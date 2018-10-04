function leftNews() {
    var myurlLeft = 'https://newsapi.org/v2/top-headlines?' +
        'sources=the-new-york-times,the-huffington-post&' +
        'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
    console.log(myurlLeft);
    $.ajax({
        url: myurlLeft,
        dataType: "json",
        success: function(parsed_json) {
            console.log("Left AJAX");
            console.log(parsed_json);
            var title;
            var sourceName;
            var articleURL;
            var date;
            var everything = "";
            var i;
            for (i = 0; i < parsed_json['articles']['length']; i++) {
                title = parsed_json['articles'][i]['title'];
                sourceName = parsed_json['articles'][i]['source']['name'];
                articleURL = parsed_json['articles'][i]['url'];
                date = parsed_json['articles'][i]['publishedAt'].substring(0,10);
                everything += "<li><h3><a href=\"" + articleURL + "\" target=\"_blank\">" + title + "</a></h3>";
                everything += "<p>" + sourceName + " - " + date + "</p></li>"
            }
            $("#leftNewsList").html(everything);
        }
    });

}

function centerNews() {
    var myurlCenter = 'https://newsapi.org/v2/top-headlines?' +
        'sources=the-wall-street-journal,cbs-news,google-news&' +
        'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
    console.log(myurlCenter);
    $.ajax({
        url: myurlCenter,
        dataType: "json",
        success: function(parsed_json) {
            console.log("Center AJAX");
            console.log(parsed_json);
            var title;
            var sourceName;
            var articleURL;
            var date;
            var everything = "";
            var i;
            for (i = 0; i < parsed_json['articles']['length']; i++) {
                title = parsed_json['articles'][i]['title'];
                sourceName = parsed_json['articles'][i]['source']['name'];
                articleURL = parsed_json['articles'][i]['url'];
                date = parsed_json['articles'][i]['publishedAt'].substring(0,10);
                everything += "<li><h3><a href=\"" + articleURL + "\" target=\"_blank\">" + title + "</a></h3>";
                everything += "<p>" + sourceName + " - " + date + "</p></li>"
            }
            $("#centerNewsList").html(everything);
        }
    });
}

function rightNews() {
    var myurlRight = 'https://newsapi.org/v2/top-headlines?' +
        'sources=fox-news,the-washington-times&' +
        'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
    console.log(myurlRight);
    $.ajax({
        url: myurlRight,
        dataType: "json",
        success: function(parsed_json) {
            console.log("Right AJAX");
            console.log(parsed_json);
            var title;
            var sourceName;
            var articleURL;
            var date;
            var everything = "";
            var i;
            for (i = 0; i < parsed_json['articles']['length']; i++) {
                title = parsed_json['articles'][i]['title'];
                sourceName = parsed_json['articles'][i]['source']['name'];
                articleURL = parsed_json['articles'][i]['url'];
                date = parsed_json['articles'][i]['publishedAt'].substring(0,10);
                everything += "<li><h3><a href=\"" + articleURL + "\" target=\"_blank\">" + title + "</a></h3>";
                everything += "<p>" + sourceName + " - " + date + "</p></li>"
            }
            $("#rightNewsList").html(everything);
        }
    });
}
$(document).ready(function() {
    leftNews();
    centerNews();
    rightNews();
});
