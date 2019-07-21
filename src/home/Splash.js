import React from 'react';
import WorkoutIndex from "../workouts/WorkoutIndex";

const Splash = (props) => {
    return (
        <div>
            <WorkoutIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;