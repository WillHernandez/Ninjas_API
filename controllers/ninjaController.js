const NinjasModel = require('../models/ninjaModel');

const createNinja = async (req, res) => {
	try {
		const { name, weapon, level } = req.body;
		const ninja = await NinjasModel.create({ name, weapon, level });
		res.status(200).json(ninja);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
}

const getNinjas = async (req, res) => {
	try {
		const ninjas = await NinjasModel.find({});
		res.status(200).json(ninjas);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
}

const getNinja = async (req, res) => {
	try {
		const ninja = await NinjasModel.findById(req.params.id);	
		res.status(200).json(ninja);
	} catch(e) {
		res.status(400).json({error: e.message});
	}
}

const editNinja = async (req, res) => {
	try {
		await NinjasModel.findByIdAndUpdate(req.params.id, { ...req.body });
		getNinja(req, res);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
}

const deleteNinja = async (req, res) => {
	try {
		const { id } = req.params;
		const ninja = await NinjasModel.findByIdAndDelete(id);
		res.status(200).json(ninja);
	} catch (e) {
		res.status(400).json({error: e.message});
	}
}


module.exports = {
	createNinja,
	getNinjas,
	getNinja,
	editNinja,
	deleteNinja,
}