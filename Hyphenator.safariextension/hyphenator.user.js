var htmlElement = document.getElementsByTagName("html")[0];
var lang = htmlElement.getAttribute("lang");

if (!lang || lang == "") {
	lang = htmlElement.getAttribute("xml:lang");
	if (!lang || lang == "") {
		lang = "en";
	}
	htmlElement.setAttribute("lang", lang);
}

var pElements = document.getElementsByTagName("p");
for (i = 0; i < pElements.length; i++) {
	if (document.defaultView.getComputedStyle(pElements[i],null).getPropertyValue('text-align') =='justify') {
		var className = pElements[i].className;
		if (!className || className == "") {
			className = "";
		}
		className += " hyphenate";
		pElements[i].className = className;
	}
}

Hyphenator.config({
	displaytogglebox : false,
	remoteloading : false,
	minwordlength : 4,
	onerrorhandler : function (e) { /* do nothing */ }
});
Hyphenator.run();