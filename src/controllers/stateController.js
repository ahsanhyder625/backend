const State = require('../models/stateModel');

exports.addState = async (res, req) => {
	const state = new State({
		...req.body,
		owner: req.user._id
	});

	try {
		await state.save();
		res.status(201).send(state);
	} catch (e) {
		res.status(400).send(e);
	}
};

exports.getState = async (res, req) => {
	try {
		await req.user.populate('state').execPopulate();
		res.send(req.user.state);
	} catch (e) {
		res.status(500).send();
	}
};

exports.getAllState = async (res, req) => {
	try {
		var state = await State.find();
		res.send(state);
	} catch (e) {
		res.status(500).send();
	}
};
