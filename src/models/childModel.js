const mongoose = require('mongoose');

const childSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		sex: {
			type: String,
			required: true,
			trim: true
		},
		dob: {
			type: Date,
			required: true,
			trim: true
		},
		fathername: {
			type: String,
			required: true,
			trim: true
		},
		mothername: {
			type: String,
			required: true,
			trim: true
		},
		state: {
			type: String,
			required: true,
			trim: true
		},
		district: {
			type: String,
			required: true,
			trim: true
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		image: {
			data: Buffer,
			contentType: String
		}
	},
	{
		versionKey: false,
		timestamps: true
	}
);

const Child = mongoose.model('child', childSchema);

module.exports = Child;
