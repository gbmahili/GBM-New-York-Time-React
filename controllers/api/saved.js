// require express
const express = require("express");
// Export the saved query
module.exports = app => {
    const NYT_API_KEY = "ddab414e9a924d75bc1cd66ae4933b41";
    // Get saved articles
    app.get("/api/saved", function(req, res){
        
        console.log(req);
    })
}