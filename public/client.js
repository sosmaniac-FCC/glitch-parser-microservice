// client-side js
$(function() {
  var output = document.querySelector('h1');
  $.get('/send', function(data) {
    var dArr = data.toString().split(' ');
    output.innerHTML = 'IP ADDRESS: ' + dArr[0].substring(0, dArr[0].indexOf(',')) + '<br>'
      + 'LANGUAGE: ' + dArr[1].substring(0, dArr[1].indexOf(','));
    
    $.get('/sendmore', function(moredata) {
      moredata = moredata.toString();
      output.innerHTML = output.innerHTML + '<br>'
        + 'SYSTEM: ' + moredata.substring(moredata.indexOf('(') + 1, moredata.indexOf(')'));
    });
  });
});

/*
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36
*/
