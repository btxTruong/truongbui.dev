const scrollFunction = () => {
	const backToTopBtn = document.getElementById("btn-back-to-top");
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		backToTopBtn.classList.remove("hidden");
	} else {
		backToTopBtn.classList.add("hidden");
	}
};

const backToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", scrollFunction);

window.addEventListener('DOMContentLoaded', () => {
	const backToTopBtn = document.getElementById("btn-back-to-top");
	backToTopBtn.addEventListener("click", backToTop);
});
