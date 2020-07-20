import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { sanslash } from '@neuekit/utilities/src/middleware';
import 'dotenv/config';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
   .use(sanslash)
   .use(compression({ threshold: 0 }))
   .use(sirv('static', { dev }))
   .use(sapper.middleware())
   .listen(PORT, err => err && console.log('error', err));