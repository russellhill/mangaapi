var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();

/* GET page listing. */
router.get('/', function(req, res) {
	var rootUrl = 'http://www.mangareader.net';
	var pageUrl = req.query.p;

	if (pageUrl) {
	    request(pageUrl, function(err, resp, body) {
	        if (err)
	            throw err;

	        $ = cheerio.load(body);

			var page = {};

	        $('#imgholder').each(function(result) {
				$(this).find('img').each(function() {
					var imageWidth = null;
					var imageHeight = null;
					var imageSource = null;
					var imageAlt = null;

					imageWidth = $(this).attr('width');
					imageHeight = $(this).attr('height');
					imageSource = $(this).attr('src');
					imageAlt = $(this).attr('alt');

					page = {
	                    "imageWidth": imageWidth,
	                    "imageHeight" : imageHeight,
	                    "imageSource" : imageSource,
	                    "imageAlt" : imageAlt
	                };
    			});
	        });

	        var pageResults = {
	        	"pageUrl" : pageUrl,
	        	"pageImage" : page
	        };

	        res.send(JSON.stringify(pageResults));
	    });		
	} else {
		res.send('no searchTerm');
	}
});

module.exports = router;
