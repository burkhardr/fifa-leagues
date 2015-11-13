import {getSchema} from '@risingstack/graffiti-mongoose';

import User from './models/User';
import Season from './models/Season';
import Division from './models/Division';
import Team from './models/Team';
import Match from './models/Match';

// TODO: remove
import Todo from './models/Todo';

export default getSchema([
  Todo,
  User,
  Season,
  Division,
  Team,
  Match,
]);
