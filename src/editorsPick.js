function loadHeadlines(data){
  var articles = '<ul>';
  data['response']['editorsPicks'].forEach(function(article){
    articles += ("<li><div>" + article['webTitle'] + "</div></li>")
  });
  articles += '</ul>'
  return articles
}
