// require express
const express = require("express");
const request = require("request");
// Export the saved query
module.exports = app => {
    const NYT_API_KEY = "ddab414e9a924d75bc1cd66ae4933b41";


    app.get("/api/saved", function(req, res){

        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': NYT_API_KEY,
                'q': "Tesla",
                'begin_date': "20150101",
                'end_date': "20180101",
                'page': 1,
                'fl': 'web_url, headline'
            },
        }, function (err, response, body) {
            body = JSON.parse(body);
            res.json(body);
        });
    })
}