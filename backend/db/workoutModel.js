import mongoose from "mongoose";

const workoutSchema=mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      reps: {
        type: Number,
        required: true
      },
      load: {
        type: Number,
        required: true
      }
    }, { timestamps: true })

const workoutModel=mongoose.model("Workout",workoutSchema)

export default workoutModel;