var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	var rootUrl = 'http://www.mangareader.net';
	var searchTerm = req.query.t;

	if (searchTerm) {
		var url = rootUrl + '/search/?w=' + searchTerm;

        var results = [];

	    request(url, function(err, resp, body) {
	        if (err)
	            throw err;

	        $ = cheerio.load(body);

	        $('#mangaresults .mangaresultitem .mangaresultinner').each(function(result) {
				var resultName = null;
				var resultUrl = null;
				var resultFullUrl = null;
				var thumb = null;

				$(this).find('a').each(function() {
					resultName = $(this).text();
					resultUrl = $(this).attr('href');
					resultFullUrl = rootUrl + $(this).attr('href');
    			});

				$(this).find('.imgsearchresults').each(function() {
					thumb = $(this).css('background-image');
					thumb = thumb.replace('url(\'','').replace('\')','');
    			});

				var result = {
                    "resultName": resultName,
                    "resultUrl": resultUrl,
                    "resultFullUrl" : resultFullUrl,
                    "resultThumbImageUrl" : thumb
                };

                results.push(result);
	        });

	        var searchResults = {
	        	"searchTerm" : searchTerm,
	        	"results": results
	        };

	        res.send(JSON.stringify(searchResults));
	    });		
	} else {
		res.send('no searchTerm');
	}
});

module.exports = router;
