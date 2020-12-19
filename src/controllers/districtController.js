const District = require('../models/districtModel');

exports.addDistrict = async (res, req) => {
	const district = new District({
		...req.body,
		owner: req.user._id
	});

	try {
		await district.save();
		res.status(201).send(district);
	} catch (e) {
		res.status(400).send(e);
	}
};

exports.getDistrict = async (res, req) => {
	try {
		await req.user.populate('district').execPopulate();
		res.send(req.user.district);
	} catch (e) {
		res.status(500).send();
	}
};

exports.getAllDistrict = async (res, req) => {
	try {
		var district = await District.find();
		res.send(district);
	} catch (e) {
		res.status(500).send();
	}
};
