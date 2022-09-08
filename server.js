const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const port = process.env.PORT || 4000;
require('dotenv').config();

app.use(express.json());

app.use('/api/ninjas', apiRoutes);

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
	} catch (e) {
		console.error(e);
	}

	app.listen(port, () => {
		console.log(`Server running on port: ${port}`);
	})
}
dbConnect();

