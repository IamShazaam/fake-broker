import express from 'express';

import path from 'path';

import rootDir from '../utilities/path.js'

const router = express.Router();

router.get('/', (req, res, next) => {
     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});


router.get('/css', (req, res, next) => {
     res.sendFile(path.join(rootDir, 'css', 'style.css'));
});

export default router;