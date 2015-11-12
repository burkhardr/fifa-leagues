import mongoose from 'mongoose';
import {getSchema} from '@risingstack/graffiti-mongoose';

const TodoSchema = new mongoose.Schema({
  text: {
    type: String
  },
  complete: {
    type: Boolean
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

export default getSchema([Todo]);
