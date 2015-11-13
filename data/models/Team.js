import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
});

const Team = mongoose.model('Team', TeamSchema);

export default Team;
