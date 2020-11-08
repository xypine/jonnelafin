var popupClass = "jf_pop";
function popup(text){
	var popdocs = document.getElementsByClassName(popupClass);
	if(popdocs.length < 1){
		var pop = document.createElement("div");
		pop.className = "jf_pop";
		pop.onclick = "this.style.display='none'";
		var node = document.createTextNode(text);
		pop.appendChild(node);

		document.getElementById("body").appendChild(pop);
	}
}
console.log("Popup functionality loaded")
usePopups = true;