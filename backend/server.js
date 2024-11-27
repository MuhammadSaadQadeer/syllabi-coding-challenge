const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');
const rules = auth.rewriter({
	users: 660, // Example rule: Users must be authenticated to read/write
});
const app = jsonServer.create();
const router = jsonServer.router('db.json');

// Bind the router db to the app
app.db = router.db;

// Add custom middleware to validate the status during login

// List available routes dynamically
app.get('/routes', (req, res) => {
	const resources = Object.keys(router.db.getState());
	const routes = resources.map((resource) => ({
		resource,
		link: `http://localhost:3000/${resource}`,
	}));
	res.json({ routes });
});
app.use(
	cors({
		origin: 'http://localhost:5173', // Replace with your client URL
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true, // Allow cookies or authorization headers
	})
);

// Middleware setup
app.use(rules);
app.use(auth);
app.use(router);

// Start the server
app.listen(3000, () => {
	console.log('JSON Server listening on http://localhost:3000');
});
