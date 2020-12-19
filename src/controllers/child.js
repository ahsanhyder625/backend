const Child = require('../models/childModel');

exports.addChild = async (res, req) => {
	const child = new Child({
		...req.body,
		owner: req.user._id
	});

	try {
		await child.save();
		res.status(201).send(child);
	} catch (e) {
		res.status(400).send(e);
	}
};

exports.getChild = async (res, req) => {
	try {
		await req.user.populate('child').execPopulate();
		res.send(req.user.child);
	} catch (e) {
		res.status(500).send();
	}
};
