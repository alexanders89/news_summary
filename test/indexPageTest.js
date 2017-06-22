function checkHtmlPageExists(){
  var title = document.getElementsByTagName('title')[0]
  assert.isTrue(title.innerHTML === 'The Day Today')

}

checkHtmlPageExists();
