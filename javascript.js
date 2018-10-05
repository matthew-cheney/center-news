function loadNews(query) {
    var myurlLeft = 'https://newsapi.org/v2/';
    if (query != "null") {
        myurlLeft += 'everything?' +
            'q=' + query + '&';
    }
    else {
        myurlLeft += 'top-headlines?';
    }
    myurlLeft += 'sources=the-new-york-times,the-huffington-post,the-washington-post&sortBy=publishedAt&' +
        'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
    console.log(myurlLeft);
    $.ajax({
        url: myurlLeft,
        dataType: "json",
        success: function(parsed_json) {
            console.log("Left AJAX");
            console.log(parsed_json);
            if (parsed_json['articles']['length'] == 0) {
                $("#leftNewsList").html('<h5>No results</h5>');
                $("#image1").attr("src", 'images/no-image-icon.png');
                $("#link1").attr("href", "");
                $("#span1").html("No article to show");
            }
            else {

                var title;
                var sourceName;
                var articleURL;
                var date;
                var imageURL;
                var imageAdded = 0;
                var everything = "";
                var i;
                var maxResults = 15;
                if (parsed_json['articles']['length'] < 15) {
                    maxResults = parsed_json['articles']['length'];
                }
                for (i = 0; i < maxResults; i++) {
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
        }
    });

    var myurlCenter = 'https://newsapi.org/v2/';
    if (query != "null") {
        myurlCenter += 'everything?' +
            'q=' + query + '&';
    }
    else {
        myurlCenter += 'top-headlines?';
    }
    myurlCenter += 'sources=the-wall-street-journal,cbs-news,google-news&sortBy=publishedAt&' +
        'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
    console.log(myurlCenter);
    $.ajax({
        url: myurlCenter,
        dataType: "json",
        success: function(parsed_json) {
            console.log("Center AJAX");
            console.log(parsed_json);
            if (parsed_json['articles']['length'] == 0) {
                $("#centerNewsList").html('<h5>No results</h5>');
                $("#image2").attr("src", 'images/no-image-icon.png');
                $("#link2").attr("href", "");
                $("#span2").html("No article to show");
            }
            else {
                var title;
                var sourceName;
                var articleURL;
                var date;
                var imageAdded = 0;
                var everything = "";
                var i;
                var maxResults = 15;
                if (parsed_json['articles']['length'] < 15) {
                    maxResults = parsed_json['articles']['length'];
                }
                for (i = 0; i < maxResults; i++) {
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
        }
    });
    var myurlRight = 'https://newsapi.org/v2/';
    if (query != "null") {
        myurlRight += 'everything?' +
            'q=' + query + '&';
    }
    else {
        myurlRight += 'top-headlines?';
    }
    myurlRight += 'sources=fox-news,the-washington-times,national-review&sortBy=publishedAt&' +
        'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
    console.log(myurlRight);
    $.ajax({
        url: myurlRight,
        dataType: "json",
        success: function(parsed_json) {
            console.log("Right AJAX");
            console.log(parsed_json);
            if (parsed_json['articles']['length'] == 0) {
                $("#rightNewsList").html('<h5>No results</h5>');
                $("#image3").attr("src", 'images/no-image-icon.png');
                $("#link3").attr("href", "");
                $("#span3").html("No article to show");
            }
            else {
                var title;
                var sourceName;
                var articleURL;
                var date;
                var imageAdded = 0;
                var everything = "";
                var i;
                var maxResults = 15;
                if (parsed_json['articles']['length'] < 15) {
                    maxResults = parsed_json['articles']['length'];
                }
                for (i = 0; i < maxResults; i++) {
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
        }
    });
}



$(document).ready(function(query) {

    loadNews("null");
    $('#searchField').on('submit', function(e) {
        e.preventDefault();
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        loadNews(searchTerm);
        $('#searchTerm').val("");
    });
    console.log("done");
});
