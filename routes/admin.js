import express from 'express';
import path from 'path';

const router = express.Router();

import rootDir from '../utilities/path.js'

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.resolve(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

export default router;