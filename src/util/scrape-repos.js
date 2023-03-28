/**
 * Helper script to scrape repos from starred lists, formatted as JSON.
 */

(() => {
	const all = document.querySelectorAll("#user-list-repositories > div.py-4");

	const data = Array.from(all).map((node) => {
		const slug = node.querySelector("h3 a").href;
		const desc = node.querySelector('[itemprop="description"]')?.textContent.trim();
		const lang = node.querySelector(
			'[itemprop="programmingLanguage"]',
		).textContent;
		const stars = node.querySelector(".Link--muted.mr-3");

		return {
			slug,
			desc,
			lang,
			stars,
		};
	});

	console.log(data);
})();
