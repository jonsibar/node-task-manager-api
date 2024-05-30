const express = require('express')
const app = express()
const taskRoutes = require('./routes/task.routes.js');
const { sequelize } = require('./models');

const port = 3000

//middleware
app.use(express.static('./public'))
app.use(express.json());


//routes
app.use('/api/v1/tasks', taskRoutes)



const start = async () => {
try {
  await sequelize.authenticate();
  console.log(`db connection successful`)
  app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
  );
} catch (error) {
  console.log(error);
  }
};

start();