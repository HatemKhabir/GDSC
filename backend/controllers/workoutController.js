import workoutModel from "../db/workoutModel.js";
import mongoose from "mongoose";

export const getWorkouts=async(req,res)=>{
    try {
        const workouts=await workoutModel.find({})
        if (workouts!=null)
        return res.status(201).json(workouts);
        return res.status(201).json("no workouts added");
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const getWorkout=async(req,res)=>{
    try{
        const searchQuery=req.query.q;
        const workouts=await workoutModel.find({title:{ $regex: new RegExp(searchQuery, "i")}});
        return res.status(201).json(workouts)
    }catch(err){
        console.log(err);
       return res.status(500).json({message:"Internal Server Error"}); 
    };
    }
  
    
  // create a new workout
  export const createWorkout = async (req, res) => {
    try {
      const { title, load, reps } = req.body; // Assuming the data is sent in the request body
      // Create a new workout
      const newWorkout = await workoutModel.create({ title, load, reps });
  
      // Respond with the newly created workout
      return res.status(200).json(newWorkout);
    } catch (error) {
      return res.status(400).json({ error: 'Error creating workout' });
    }
  };
  // delete a workout
  export const deleteWorkout = async (req, res) => {
    const title  = req.body.title
       const workout=await workoutModel.findOneAndDelete({title:title});
       if (workout!=null)
        return res.status(201).json(workout)
  
    if(!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    return res.status(200).json(workout)
  }
  
  // update a workout
  export const updateWorkout = async (req, res) => {
    const title  = req.body.title
  
     const searchQuery=req.query.q;
     const workout=await workoutModel.findOneAndUpdate({title: title}, {
        ...req.body
      })
  
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    return res.status(200).json(workout)
  
  }