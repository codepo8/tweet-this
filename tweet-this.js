(function(){
    var n = decodeURIComponent(document.getSelection());
    if(!n) {
      n = document.title;
    }
  
    n = '“' + n.trim() + '”\n\n';
  
    window.open(
      `https://twitter.com/intent/tweet?text=
      ${encodeURIComponent(n)}
      ${document.location.href}`
    );
})();