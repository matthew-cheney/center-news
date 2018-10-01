        $(document).ready(function() {
            var myurl = 'https://newsapi.org/v2/top-headlines?' +
            'sources=the-new-york-times,bbc-news&' +
          'apiKey=84016fc1a1fb4b57b4d8e7950645ee27';
          console.log(myurl);
            $.ajax({
            url : myurl,
            dataType : "json",
            success : function(parsed_json) {
                console.log(parsed_json);
                var title;
                console.log(title);
                var everything;
                var i;
                for (i=0; i<19; i++) {
                    title = parsed_json['articles'][i]['title'];
                    everything += "<li>" + title + "</li>";
                }
                $("#leftNewsList").html(everything);
                
                
                
            }
            });
          });
