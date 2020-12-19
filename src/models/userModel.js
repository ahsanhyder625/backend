const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const District = require('./districtModel');
const State = require('./stateModel');
const Child = require('./childModel');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error('Email is invalid');
				}
			}
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: 7,
			validate(value) {
				if (value.toLowerCase().includes('password')) {
					throw new Error("Password shouldn't contain the word password");
				}
			}
		},
		tokens: [
			{
				token: {
					type: String,
					required: true
				}
			}
		]
	},
	{
		versionKey: false,
		timestamps: true
	}
);

userSchema.virtual('state', {
	ref: State,
	localField: '_id',
	foreignField: 'owner'
});

userSchema.virtual('district', {
	ref: District,
	localField: '_id',
	foreignField: 'owner'
});

userSchema.virtual('child', {
	ref: Child,
	localField: '_id',
	foreignField: 'owner'
});

userSchema.methods.toJSON = function() {
	const user = this;
	const userObject = user.toObject();y
	delete userObject.password;
	delete userObject.tokens;
	return userObject;
};

userSchema.statics.findByCredentials = async (username, password) => {
	const user = await User.findOne({ username });

	if (!user) {
		throw new Error('Unable to login');
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error('Unable to login');
	}
	return user;
};
userSchema.methods.generateAuthToken = async function() {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewtoken');

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

userSchema.pre('save', async function(next) {
	const user = this;

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
