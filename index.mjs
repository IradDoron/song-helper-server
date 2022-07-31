import fs from 'fs';
import express from 'express';
import cors from 'cors';

// import data
import literarySourses from './db-mock/literarySourses.mjs';
import weddingSongs from './db-mock/weddingSongs.mjs';

const { PORT, HOST } = process.env;

const app = express();

app.use(cors());

app.get('/literary', (req, res) => {
	const json = JSON.stringify(literarySourses);
	res.setHeader('Content-Type', 'application/json');
	res.end(json);
});

app.get('/wedding-songs', (req, res) => {
	const json = JSON.stringify(weddingSongs);
	res.setHeader('Content-Type', 'application/json');
	res.end(json);
});

app.listen(PORT, HOST, () => {
	console.log(`Server running at http://${HOST}:${PORT}/...`);
});
