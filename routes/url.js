const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortId = require('shortid');

const Url = require('../models/Url');

/**
 * @api {post} /shorten Create a short URL
 * @apiName Generate a short URL
 * @apiGroup Generate
 * 
 * @apiParam {String} longUrl The long url link that should be shortened
 * 
 * @apiSuccess {String} longUrl the long url submitted
 * @apiSuccess {String} shortUrl the generated link that will automatically redirect
 * @apiSuccess {String} urlCode the code generated
 * @apiSuccess {String} Date date of submission
 */

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.baseUrl;

    // check base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid Base Url')
    }

    // Create url code
    const urlCode = shortId.generate();

    // Check long url sent
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({
                longUrl
            });

            if(url){
                res.json(url);
            }else{
                const shortUrl = baseUrl+ "/" + urlCode;

                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }


        } catch (error) {
            console.error(error);
            res.status(500).json("Server Error");
        }
    } else {
        res.status(401).json("Invalid Long URL")
    }

});


module.exports = router;