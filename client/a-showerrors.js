function addDOMMessage(textmsg) {
    var divg = document.createElement("div");
    divg.appendChild(document.createTextNode(textmsg));
    document.body.appendChild(divg);
}

console.log = function(i) { 
    addDOMMessage(i);
}

window.onerror = function(message, url, lineNumber) {  
  console.log("Msg: " + message + " | URL: " + url + " | Line: " + linenumber);
};  




