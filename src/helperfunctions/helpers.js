export function isTouchDevice(){
	const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	let mq = function (query) {
		return window.matchMedia(query).matches;
	};

	if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
		return true;
	}

	// include the 'heartz' as a way to have a non matching MQ to help terminate the join
	// https://git.io/vznFH
	var query = [ '(', prefixes.join('touch-enabled),('), 'heartz', ')' ].join('');
	return mq(query);
}

// Use this to test is the device is a touch screen such as tablet, ipad or desktop touch screen.
// if (isTouchDevice()) {
//     document.write("Your device is Touch");
// } else {
//     document.write("Your device is NOT touch");
// }
