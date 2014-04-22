var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();

/* GET comic listing. */
router.get('/', function(req, res) {
	var rootUrl = 'http://www.mangareader.net';
	var comicUrl = req.query.c;

	if (comicUrl) {
        var chapters = [];

	    request(comicUrl, function(err, resp, body) {
	        if (err)
	            throw err;

	        $ = cheerio.load(body);

	        $('#listing tr').each(function(result) {
	        	if ($(this).attr('class') != 'table_head') {
		        	var chapterUrl = null;
		        	var chapterFullUrl = null;
		        	var chapterTitle = null;
		        	var chapterDescription = null;
		        	var chapterDate = null;

					$(this).find('td').each(function() {
						chapterDate = $(this).text();
						$(this).find('a').each(function() {
							chapterUrl = $(this).attr('href');
							chapterFullUrl = rootUrl + chapterUrl;
							chapterTitle = $(this).text();
		    			});
	    			});

					var chapter = {
	                    "chapterUrl": chapterUrl,
	                    "chapterFullUrl" : chapterFullUrl,
	                    "chapterTitle": chapterTitle,
	                    "chapterDescription" : chapterDescription,
	                    "chapterDate" : chapterDate
	                };

	                chapters.push(chapter);
				} 
	        });

	        var chapterResults = {
	        	"comicUrl" : comicUrl,
	        	"chapterCount" : chapters.length,
	        	"chapters": chapters
	        };

	        res.send(JSON.stringify(chapterResults));
	    });		
	} else {
		res.send('no searchTerm');
	}
});

module.exports = router;
