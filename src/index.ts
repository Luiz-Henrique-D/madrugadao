import express from 'express';
import dotenv from 'dotenv';
import { join } from 'path';
import router from './router';

dotenv.config({
    path: './.env',
});
function main() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(router);
    app.use(express.static(join(__dirname, 'public')));

    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}`);
    });
}

main();
