# tweet-this
A bookmarklet to tweet the current document, [highlight text](javascript:(function(){n=getSelection().anchorNode;t=n.nodeType===3?n.data:n.innerText;t='“'+t+'”\n\n';window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}${document.location.href}`)})()) as the tweet.
