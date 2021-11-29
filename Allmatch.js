import { processScorecard } from "./scorecard.js";
import cheerio from "cheerio";
import request from "request";
function getAllMatchesLink(url) {
	request(url, function (err, response, html) {
		if (err) {
			console.log(err);
		} else {
			extractAllLinks(html);
		}
});
}

function extractAllLinks(html) {
	let $ = cheerio.load(html);

	let scorecardElems = $("a[data-hover='Scorecard']");

	for (let i = 0; i < scorecardElems.length; i++) {
		let link = $(scorecardElems[i]).attr("href");

		let fullLink = "https://www.espncricinfo.com/" + link;
		console.log(fullLink);
		processScorecard(fullLink);
	}
}
export { getAllMatchesLink };
