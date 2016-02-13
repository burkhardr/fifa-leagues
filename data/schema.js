import {getSchema} from '@risingstack/graffiti-mongoose';

import User from '../src/models/User';
import Season from '../src/models/Season';
import Division from '../src/models/Division';
import Team from '../src/models/Team';
import Match from '../src/models/Match';

export default getSchema([
  User,
  Season,
  Division,
  Team,
  Match,
]);
