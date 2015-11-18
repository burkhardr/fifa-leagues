import koa from 'koa';
import serve from 'koa-static';
import path from 'path';
import graffiti from '@risingstack/graffiti';
import mongoose from 'mongoose';
import schema from './data/schema';

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/graphql';

mongoose.connect(mongoUri);

const app = koa();

app.use(serve(path.resolve(__dirname, 'public')));

// register graphQL schema
app.use(graffiti.koa({schema, graphiql: true}));

app.listen(port);
console.log('listening on port ' + port);
