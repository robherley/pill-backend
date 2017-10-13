# pill-backend

Simple Express.js server to send json data from Youtube API

`/playlist/:id`

Returns an array of objects for each youtube video from `:id` playlist.
```
[
    {
	kind: 'youtube#playlistItem',
	etag: '"cbz3lIQ2N25AfwNr-BdxUVxJ_QY/Au_Z_nTYEF3KsfE2FhfPgdwnRUw"',
	id: 'UEw3WGxxWDRucGRkZnJkcE1DeEJuTlpYZzJHRmxsN3Q1eS41NkI0NEY2RDEwNTU3Q0M2',
	snippet: {
		publishedAt: '2015-12-30T03:21:48.000Z',
		channelId: 'UCZj9kF7Wu2IE_-DzbQZwCEw',
		title: 'Yee',
		description: [String]
		thumbnails: {
			default: {
				url: 'https://i.ytimg.com/vi/q6EoRBvdVPQ/default.jpg',
				width: 120,
				height: 90
			},
			medium: {
				url: 'https://i.ytimg.com/vi/q6EoRBvdVPQ/mqdefault.jpg',
				width: 320,
				height: 180
			},
			high: {
				url: 'https://i.ytimg.com/vi/q6EoRBvdVPQ/hqdefault.jpg',
				width: 480,
				height: 360
			}
		},
		channelTitle: 'eljolto',
		playlistId: 'PL7XlqX4npddfrdpMCxBnNZXg2GFll7t5y',
		position: 0,
		resourceId: {
			kind: 'youtube#video',
			videoId: 'q6EoRBvdVPQ'
		}
	}
};
    ...
]
```

### TODO:

Integrate into heroku toolchain on robherley.me
