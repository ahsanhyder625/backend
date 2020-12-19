const User = require('../models/userModel');

exports.signUpUser = async (req, res) => {
	const user = new User(req.body);
	console.log(user);
	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
};

exports.loginUser = async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.username, req.body.password);
		const token = await user.generateAuthToken();

		res.send({ user, token });
	} catch (e) {
		res.status(400).send();
	}
};

exports.logoutUser = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.send();
	} catch (error) {
		res.status(500).send();
	}
};
