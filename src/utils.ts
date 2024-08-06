import express from 'express';

export function startServer() {
	const app = express();
	const port = 3000;

	app.get('/heavy', (req, res) => {
		let total = 0;
		for (let i = 0; i < 500000000; i++) {
			total++;
		}
		res.send(`Hello, TypeScript + Node.js + Express!, ${total}`);
	});

	// Start the server and listen on the specified port
	app.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}