import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import apiRoutes from './api/index.js';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mount API routes first
router.use('/api', apiRoutes);

//  Serve static files from client build
const clientDistPath = path.join(__dirname, '../../../client/dist');
router.use(express.static(clientDistPath));

//  For any unmatched route, send React index.html
router.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

export default router;
