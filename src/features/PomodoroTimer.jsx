import { useState, useEffect } from "react";
import { formatTimeHours } from "../utils/formatTimeHours";
import '../styles/PomodoroTimer.css';


function PomodoroTimer(){

    function reset(){
        setRunning(() => false);
        setSeconds(() => 60*60);
    }
    let [seconds, setSeconds] = useState(60*60);
    let [isRunning, setRunning] = useState(false);

    useEffect(() => {
        if (!isRunning){
            return;
        }
        const interval = setInterval(() => {
            setSeconds((previousSeconds) => previousSeconds - 1);
        }, 1000);
    
        return() => clearInterval(interval);

    }, [isRunning]);

    return (
    <section className="timer-shell">
        <div className="timer-card">
        <h3 id="timer">{formatTimeHours(seconds)}</h3>

        <div className="timer-actions">
            <button
            type="button"
            id="action-btn"
            onClick={() => setRunning(prev => !prev)}
            >
            {seconds == 0 ? "Reset" : isRunning ? "Pause" : "Start"}
            </button>

            <button type="button" id="reset-btn" onClick={reset}>
            Reset
            </button>
        </div>
        </div>
    </section>
    );
};


export default PomodoroTimer;
