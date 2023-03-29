/**
 * Helper script to scrape repos from starred lists, formatted as JSON.
 */

(() => {
	const all = document.querySelectorAll("#user-list-repositories > div.py-4");

	const data = Array.from(all).map((node) => {
		const slug = node.querySelector("h3 a").pathname.substring(1);
		const desc = node
			.querySelector('[itemprop="description"]')
			?.textContent.trim();
		const lang = node.querySelector(
			'[itemprop="programmingLanguage"]',
		)?.textContent;
		const stars = parseInt(
			node.querySelector(".Link--muted.mr-3").textContent.replace(/,/g, ""),
			10,
		);

		return {
			slug,
			desc,
			lang,
			stars,
		};
	});

	console.log(data);
})();

// single page extract
(() => {
	const slug = document
		.querySelector('[itemprop="name"] a')
		.pathname.substring(1);

	const desc = document.querySelector("p.my-3").textContent.trim();

	const lang = document
		.querySelector(".list-style-none .d-inline a")
		.textContent.trim()
		.replace(/\n.+/, "");

	const stars = parseInt(
		document
			.querySelector("#repo-stars-counter-unstar")
			.title.replace(/,/g, ""),
		10,
	);

	const data = {
		slug,
		desc,
		lang,
		stars,
	};

	console.log(JSON.stringify(data, null, 2));

	return data;
})();
