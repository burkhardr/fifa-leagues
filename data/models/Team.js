import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  // TODO
  // division: {
  // },
});

const Team = mongoose.model('Team', TeamSchema);

export default Team;
