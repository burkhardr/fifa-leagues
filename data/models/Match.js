import mongoose from 'mongoose';

const MatchSchema = new mongoose.Schema({
});

const Match = mongoose.model('Match', MatchSchema);

export default Match;
