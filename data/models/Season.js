import mongoose from 'mongoose';

const SeasonSchema = new mongoose.Schema({
});

const Season = mongoose.model('Season', SeasonSchema);

export default Season;
