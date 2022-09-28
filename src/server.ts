import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT || 3003;

export const server = new App();

server.start(PORT);
