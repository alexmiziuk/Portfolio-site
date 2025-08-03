export function getScrollBarSize() {
	var el = window.document.createElement('textarea'),
		 style = {
			  'visibility': 'hidden',
			  'position': 'absolute',
			  'zIndex': '-2147483647',
			  'top': '-1000px',
			  'left': '-1000px',
			  'width': '1000px',
			  'height': '1000px',
			  'overflow': 'scroll',
			  'margin': '0',
			  'border': '0',
			  'padding': '0'
		 },
		 support = el.clientWidth !== undefined && el.offsetWidth !== undefined;

	for (var key in style) {
		 if (style.hasOwnProperty(key)) {
			  el.style[key] = style[key];
		 }
	}

	var size = null;
	if (support && window.document.body) {
		 window.document.body.appendChild(el);
		 size = [el.offsetWidth - el.clientWidth, el.offsetHeight - el.clientHeight];
		 window.document.body.removeChild(el);
	}
	return size;
}