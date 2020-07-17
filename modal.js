function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
function a(elem) {
	console.log(elem.id)
	openInNewTab(elem.id)
}
function onClick(element) {
	openInNewTab(element.src)
//	document.getElementById("img01").src = element.src;
//	document.getElementById("modal01").style.display = "block";
//	var captionText = document.getElementById("caption");
//	captionText.innerHTML = element.alt;
}

console.log("Modal functionality loaded.")
