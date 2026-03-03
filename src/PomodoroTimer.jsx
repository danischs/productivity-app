import { useState, useEffect } from "react";
import './PomodoroTimer.css';

function formatTime(totalSeconds){
    const seconds = (totalSeconds % 60).toString();
    const minutes = Math.floor(totalSeconds / 60).toString(); 

    //old method
    // return `${minutes < 10 ? "0".concat(minutes.toString()) : minutes}:${seconds < 10 ? "0".concat(seconds.toString()) : seconds}`

    //using padStart
    return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}



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
        <h3 id="timer">{formatTime(seconds)}</h3>

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
