const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		}
	},
	{
		versionKey: false,
		timestamps: true
	}
);

const State = mongoose.model('State', stateSchema);

module.exports = State;
