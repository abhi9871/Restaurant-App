const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./utils/database');
const restaurantRoutes = require('./routes/restaurant');
const port = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(restaurantRoutes);

sequelize.sync()
.then(() => {
    console.log(`Server is starting at ${port}`);
    app.listen(port);
})
.catch(err => {
    console.log(err);
})