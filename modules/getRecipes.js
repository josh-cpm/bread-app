const url = `https://joshcpm.com/.netlify/functions/recipes`;

export default async function getRecipe() {
	try {
		const request = await fetch(url);
		return request.json();
	} catch (e) {
		throw e;
	}
}
