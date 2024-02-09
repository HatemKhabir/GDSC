import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/workoutDetails.jsx"
import WorkoutForm from "../components/workoutForm.jsx"
import axios from "axios"

const Home = () => {
 const [workout,setWorkouts]=useState([])
 const fetchWorkouts = async () => {
    try {
  const response = await axios.get('http://localhost:5050/api/workouts/getworkouts')
  setWorkouts(response.data)
} catch (error) {
 console.log(error);       
}
}
  useEffect(() => {
    const asyncFetching=async()=>{
     await fetchWorkouts()
    }
    asyncFetching()
  }, [workout])
  const handleWorkoutChange = async () => {
    // Re-fetch workouts or perform any other necessary actions
    await fetchWorkouts();
};
  return (
    <div className="home">
      <div className="workouts">
        {workout && workout.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} onWorkoutChange={handleWorkoutChange} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home