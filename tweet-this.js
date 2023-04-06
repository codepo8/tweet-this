(function(){
let d = document;
let t = d.title;
let u = d.location.href;
var s = window.getSelection().getRangeAt(0).cloneContents();
var tw = d.createTreeWalker(s, NodeFilter.SHOW_TEXT);
var c = '';
while (tw.nextNode()) { 
    c = c.concat(treeWalker.currentNode.nodeValue);
}
let out = encodeURIComponent(`👉🏼 „${t}”\n🔗${u}\n💬 ${c}`);
console.log(`[${t}](${u})\n${c}`);
navigator.clipboard.writeText(snippet);
window.open(`https://twitter.com/intent/tweet?text=${out}`);
})();

