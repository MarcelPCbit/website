import express from 'express';
import { fileURLToPath } from 'url';

let app = express();

app.get('/', (req, res) => {
    res.sendFile(fileURLToPath(new URL('./public/index.html', import.meta.url)));
});

app.get('/other', (req, res) => {
    res.sendFile(fileURLToPath(new URL('./public/sites/first.html', import.meta.url)));
});

app.listen(80);