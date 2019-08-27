(function(){
    n=getSelection().anchorNode;
    if(!n) {
        t = document.title;
    } else {
        t = n.nodeType === 3 ? n.data : n.innerText;
    }
    t = '“' + t.trim() + '”\n\n';
    window.open(
        `https://twitter.com/intent/tweet?text=
        ${encodeURIComponent(t)}
        ${document.location.href}`
    )
})();