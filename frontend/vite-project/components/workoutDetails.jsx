import axios from "axios";

const WorkoutDetails = ({ workout, onWorkoutChange }) => {
  const handleDelete = async (title) => {
    try {
      await axios.delete('http://localhost:5050/api/workouts/delete', {
        data: { title }
      }).then((response) => console.log(response));
      onWorkoutChange();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg):</strong> {workout.load}</p>
      <p><strong>Number of reps:</strong> {workout.reps}</p>
      <span className="material-symbols-outlined" onClick={() => handleDelete(workout.title)}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
