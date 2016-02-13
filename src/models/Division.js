import mongoose from 'mongoose';

const DivisionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rank: {
    type: Number,
  },
});

const Division = mongoose.model('Division', DivisionSchema);

export default Division;
