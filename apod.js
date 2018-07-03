function apod(){
    var request = require("request");
    var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
    var options = { 
        method: 'GET',
        url: url
    }

    request(options, function (error, response, body) {
        if (error) 
            return console.error('Failed: %s', error.message);
        return {
            Success:  body
        }

    })
}
exports.main = apod