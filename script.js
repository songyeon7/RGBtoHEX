// function RGBToHex(r,g,b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);

//   if (r.length == 1)
//     r = "0" + r;
//   if (g.length == 1)
//     g = "0" + g;
//   if (b.length == 1)
//     b = "0" + b;

//   return "#" + r + g + b;
// }
// function componentToHex(c) {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// }

// function rgbToHex(r, g, b) {
//   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
// }

// alert(rgbToHex(0, 51, 255)); // #0033ff

function convert() {
	r = parseInt(document.getElementById('r').value);
	g = parseInt(document.getElementById('g').value);
	b = parseInt(document.getElementById('b').value);

	res = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	document.getElementById('result').innerHTML = res.toUpperCase();
	document.body.style.backgroundColor = res;

	ConvertColor(r, g, b);

	return false;
}

function ConvertColor(r, g, b) {
	if ((r < 140 || g < 140 || b < 140) && (r + g + b < 510)) {
		document.body.style.color = 'white';
	} else {
		document.body.style.color = 'black';
	}
}