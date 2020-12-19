const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		state: {
			type: String,
			required: true
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

const District = mongoose.model('District', districtSchema);

module.exports = District;
