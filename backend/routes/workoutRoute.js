import express from "express"
import { getWorkout,getWorkouts,createWorkout,deleteWorkout,updateWorkout } from "../controllers/workoutController.js";
const router=express.Router();

router.get('/getworkouts',getWorkouts)
router.post('/create',createWorkout)
router.get('/getsingle',getWorkout)
router.delete('/delete',deleteWorkout)
router.patch('/update',updateWorkout)

export default router