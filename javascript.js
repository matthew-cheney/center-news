$(document).ready(function() {
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
            var imageURL;
            var imageAdded = 0;
            var everything = "";
            var i;
            for (i = 0; i < 15; i++) {
                title = parsed_json['articles'][i]['title'];
                sourceName = parsed_json['articles'][i]['source']['name'];
                imageURL = parsed_json['articles'][i]['urlToImage'];
                articleURL = parsed_json['articles'][i]['url'];
                date = parsed_json['articles'][i]['publishedAt'].substring(0, 10);
                if (imageURL == null) {
                    everything += "<li><a href=\"" + articleURL + "\" target=\"_blank\">";
                }
                else {
                    everything += "<li><a href=\"" + articleURL + "\" target=\"_blank\"><img class=\"thumbnail\" src=\"" + imageURL + "\">";
                    if (imageAdded == 0) {
                        //$("#image1text").html(title);
                        $("#image1").attr("src", imageURL);
                        $("#link1").attr("href", articleURL);
                        $("#span1").html(title);
                        imageAdded = 1;
                    }
                }
                everything += "<h3>" + title + "</h3>";
                everything += "<p>" + sourceName + " - " + date + "</p><hr></a></li>"
            }
            $("#leftNewsList").html(everything);
        }
    });

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
            var imageAdded = 0;
            var everything = "";
            var i;
            for (i = 0; i < 15; i++) {
                title = parsed_json['articles'][i]['title'];
                sourceName = parsed_json['articles'][i]['source']['name'];
                articleURL = parsed_json['articles'][i]['url'];
                imageURL = parsed_json['articles'][i]['urlToImage'];
                date = parsed_json['articles'][i]['publishedAt'].substring(0, 10);
                if (imageURL == null) {
                    everything += "<li><a href=\"" + articleURL + "\" target=\"_blank\">";
                }
                else {
                    everything += "<li><a href=\"" + articleURL + "\" target=\"_blank\"><img class=\"thumbnail\" src=\"" + imageURL + "\">";
                    if (imageAdded == 0) {
                        $("#image2").attr("src", imageURL);
                        $("#link2").attr("href", articleURL);
                        $("#span2").html(title);
                        imageAdded = 1;
                    }

                }
                everything += "<h3>" + title + "</h3>";
                everything += "<p>" + sourceName + " - " + date + "</p><hr></a></li>"
            }
            $("#centerNewsList").html(everything);
        }
    });
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
            var imageAdded = 0;
            var everything = "";
            var i;
            for (i = 0; i < 15; i++) {
                title = parsed_json['articles'][i]['title'];
                sourceName = parsed_json['articles'][i]['source']['name'];
                articleURL = parsed_json['articles'][i]['url'];
                imageURL = parsed_json['articles'][i]['urlToImage'];
                date = parsed_json['articles'][i]['publishedAt'].substring(0, 10);
                if (imageURL == null) {
                    everything += "<li><a href=\"" + articleURL + "\" target=\"_blank\">";
                }
                else {
                    everything += "<li><a href=\"" + articleURL + "\" target=\"_blank\"><img class=\"thumbnail\" src=\"" + imageURL + "\">";
                    if (imageAdded == 0) {
                        $("#image3").attr("src", imageURL);
                        $("#link3").attr("href", articleURL);
                        $("#span3").html(title);
                        imageAdded = 1;
                    }

                }
                everything += "<h3>" + title + "</h3>";
                everything += "<p>" + sourceName + " - " + date + "</p><hr></a></li>"
            }
            $("#rightNewsList").html(everything);


        }
    });



    console.log("done");
});
