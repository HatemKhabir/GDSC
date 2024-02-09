import express from "express"
import * as dotenv from "dotenv"
import workoutRoutes from "./routes/workoutRoute.js"
import cors from "cors"
import mongoose from "mongoose"

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/workouts',workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 