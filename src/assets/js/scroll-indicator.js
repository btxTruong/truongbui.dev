window.onscroll = function () {
	scrollFunction();
}

function scrollFunction() {
	const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const scrolled = (windowScroll / windowHeight) * 100;
	document.getElementById("scrollIndicator").style.width = scrolled + "%";
}
