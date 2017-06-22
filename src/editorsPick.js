function loadHeadlines(data){
  var newData = JSON.parse(data)
  var articles = '<ul>';
  newData['response']['editorsPicks'].forEach(function(article){
    articles += ("<li><div>" + article['webTitle'] + "</div></li>")
  });
  articles += '</ul>'
  return articles
}

function retrieveHeadlines(){
  var request = new XMLHttpRequest();
  request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk?show-editors-picks=true', false)
  request.send();
  return request.response
}
