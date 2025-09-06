const NEBULA_API_ENDPOINT = 'https://api.utdnebula.com/';

export async function nebulaFetch(path) {      // fetch function that returns json response
	const url = `${NEBULA_API_ENDPOINT}${path}`;
  console.log(url);
	const headers = {
		'x-api-key': process.env.NEXT_PUBLIC_NEBULA_API_KEY,
	};
	const response = await fetch(url, {
		headers,
	});
  console.log(response);
	if (!response.ok) {
		throw new Error(`Nebula API error: ${response.status}`);
	}
	return response.json();

}
