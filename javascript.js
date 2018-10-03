        $(document).ready(function() {
            var myurl = 'https://newsapi.org/v2/top-headlines?' +
                'sources=the-new-york-times,the-huffington-post,the-washington-post&' +
                'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
            console.log(myurl);
            $.ajax({
                url: myurl,
                dataType: "json",
                success: function(parsed_json) {
                    console.log(parsed_json);
                    var title;
                    var sourceName;
                    var articleURL;
                    var everything = "";
                    var i;
                    for (i = parsed_json['articles']['length'] - 1; i > -1; i--) {
                        title = parsed_json['articles'][i]['title'];
                        sourceName = parsed_json['articles'][i]['source']['name'];
                        articleURL = parsed_json['articles'][i]['url'];
                        console.log(title);
                        console.log(i);
                        everything += "<li><h3><a href=\"" + articleURL + "\" target=\"_blank\">" + title + "</a></h3>";
                        everything += "<p>" + sourceName + "</p></li>"
                    }
                    $("#leftNewsList").html(everything);

                    $("#centerNewsList").html(everything);
                    $("#rightNewsList").html(everything);



                }
            });
        });
        