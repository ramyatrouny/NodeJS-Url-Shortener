define({ "api": [
  {
    "type": "post",
    "url": "/shorten",
    "title": "Create a short URL",
    "name": "Generate_a_short_URL",
    "group": "Generate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longUrl",
            "description": "<p>The long url link that should be shortened</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "longUrl",
            "description": "<p>the long url submitted</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shortUrl",
            "description": "<p>the generated link that will automatically redirect</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "urlCode",
            "description": "<p>the code generated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Date",
            "description": "<p>date of submission</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/url.js",
    "groupTitle": "Generate"
  },
  {
    "type": "get",
    "url": "/:code",
    "title": "Redirect to the request Page",
    "name": "Redirect_Page",
    "group": "Redirect",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The code Generated from the link</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Redirect"
  }
] });
