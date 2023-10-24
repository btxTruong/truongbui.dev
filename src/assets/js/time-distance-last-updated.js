import {formatDistance} from 'date-fns';

const addTimeDistancePost = () => {
	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
	document.querySelectorAll(".time-distance-last-updated").forEach((timeDistancePost) => {
		const lastUpdated = timeDistancePost.dataset.lastUpdated;

		// because new Date(lastUpdated) return midnight of the day. so we need to set it to midnight of today to get the correct time distance
		const todayAtMidnight = new Date();
		todayAtMidnight.setUTCHours(0, 0, 0, 0);
		timeDistancePost.innerHTML = formatDistance(new Date(lastUpdated), todayAtMidnight, {addSuffix: true});
	});
};

window.addEventListener("DOMContentLoaded", addTimeDistancePost);
