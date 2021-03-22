function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
function a(elem) {
	console.log(elem.id)
	openInNewTab(elem.id)
}
function onClick(element) {
	var url = element.src;
	url = url.replace("downscaled_to_50", "normal");
	url = url.replace("downscaled_to_30", "normal");
	url = url.replace("downscaled_to_5", "normal");
	openInNewTab(url);
//	document.getElementById("img01").src = element.src;
//	document.getElementById("modal01").style.display = "block";
//	var captionText = document.getElementById("caption");
//	captionText.innerHTML = element.alt;
}

console.log("Modal functionality loaded.")
