import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

    const app = express();

    import adminRoutes from './routes/admin.js';
    import userRoutes from './routes/shop.js';
    
    app.use(express.urlencoded({ extended: true }));

    app.use('/admin', adminRoutes);
    app.use(userRoutes);


    //Adding 404 page.
    app.use((req, res, next) => {
        
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    })

    app.listen(5000);