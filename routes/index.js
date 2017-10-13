const playlistRoutes = require('./playlist');

// Top Level Route List, may add more routes
const allRoutes = [['/playlist', playlistRoutes]];

// Config the server to use allRoutes
const useRoutes = app => {
	allRoutes.forEach(route => {
		app.use(route[0], route[1]);
	});

	// If specified route is not in routes
	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Specified Route not found.' });
	});
};

module.exports = useRoutes;
