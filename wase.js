var stickerSelector = "._1mTER._3h2XH>._5auXc"; // This is the image object of a sticker in chat. You may need to change this.
var filenamePrefix = new Date().getTime();

var urls = [];
var duplicates = 0;
var uniques = 0;

Array.from(document.querySelectorAll(stickerSelector)).forEach(sticker => {
	if (sticker.src === undefined) return;
	if (urls.indexOf(sticker.src) !== -1) return duplicates++;
	uniques++;
	download(filenamePrefix + "-" + uniques, sticker.src);
	console.log("Now downloading sticker #" + i + ": " + sticker.src);
	urls.push(sticker.src);
});

function download(filename, link) {
	var element = document.createElement("a");
	element.setAttribute("href", link);
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}