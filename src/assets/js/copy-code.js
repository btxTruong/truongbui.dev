import * as clipboard from "clipboard-polyfill";

const copyText = 'Click to copy code';
const copiedText = 'Copied!';
const errorText = 'Error';

const addCopyButtons = () => {
	document.querySelectorAll(".code-block").forEach((codeBlock) => {
		const placeButtonElem = codeBlock.querySelector('.copy-button-place');
		const _code = codeBlock.querySelector('pre > code');

		const button = document.createElement("button");
		button.innerHTML = copyText;

		button.addEventListener("click", () => {
			clipboard.writeText(_code.innerText).then(
				() => {
					button.blur();
					button.innerHTML = copiedText;
					setTimeout(() => (button.innerHTML = copyText), 2000);
				},
				() => (button.innerHTML = errorText)
			);
		});
		placeButtonElem.appendChild(button);
	});
};

window.addEventListener("DOMContentLoaded", addCopyButtons);
