import {formatDistance} from 'date-fns';

const addTimeDistancePost = () => {
	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
	document.querySelectorAll(".time-distance-last-updated").forEach((timeDistancePost) => {
		const lastUpdated = timeDistancePost.dataset.lastUpdated;
		timeDistancePost.innerHTML = formatDistance(new Date(lastUpdated), new Date(), {addSuffix: true});
	});
};

window.addEventListener("DOMContentLoaded", addTimeDistancePost);
