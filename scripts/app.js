
function getFinalUrl(url) {
    var ajaxRequest = $.ajax({
        url: "http://goo.gl/uEnfv",
        type: "HEAD"
    }).done(function(message, status, response) {
        console.log(response.getAllResponseHeaders( 301));
        console.log(ajaxRequest)
    });
}

// getFinalUrl("");
