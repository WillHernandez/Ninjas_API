const express = require('express');
const router = express.Router();
const { 
	createNinja,
	getNinjas,
	getNinja,
	editNinja,
	deleteNinja
} = require('../controllers/ninjaController');

// CRUD

// Create
router.post('/', createNinja);
// Read
router.get('/', getNinjas);
// Read
router.get('/:id', getNinja);
// Update
router.put('/:id', editNinja);
// Delete
router.delete('/:id', deleteNinja);

module.exports = router;