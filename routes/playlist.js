const router = require('express').Router();
const axios = require('axios');
const _ = require('lodash');

const BASE = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet';

router.get('/:id', async (req, res) => {
	try {
		if (!req.params.id) {
			res.status(400).json({ error: 'Playlist ID is not valid.' });
		}
		const fetch = axios.create({
			method: 'get',
			baseURL: BASE,
			params: {
				key: 'AIzaSyCIjjltfnIzw3HYqTeaJXqu_GTZABq0c9s',
				maxResults: '50', // Biggest possible res size
				playlistId: req.params.id
			}
		});

		const fetchAllVideos = async () => {
			let response = await fetch(),
				videos = [response.data.items],
				nextToken = response.data.nextPageToken;
			while (nextToken) {
				response = await fetch({
					params: {
						pageToken: nextToken
					}
				});
				nextToken = response.data.nextPageToken;
				videos = [...videos, response.data.items];
				console.log('Token:', nextToken);
			}
			// Slightly faster then concatting all arrays
			return _.flatten(videos);
		};
		const videos = await fetchAllVideos();
		console.log('Number of Videos:', videos.length);
		res.json(videos);
	} catch (e) {
		// TODO: Have better errors
		console.error(e);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;
