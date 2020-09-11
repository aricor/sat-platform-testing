
import React, { Component } from 'react'
import styles from './timer.css'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: props.initialTimer, 
            seconds: 0, 
            sectionType: props.sectionType,
        }
    }


    componentDidMount() {
       
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    this.props.onTimeEnd();
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.sectionType !== prevProps.sectionType){
            return {
                minutes: nextProps.initialTimer, 
                seconds: 0,
                sectionType: nextProps.sectionType,
            };
        }

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    renderTimerText() {
        const { minutes, seconds } = this.state;
        if (minutes === 0 && seconds === 0) {
            return (
                <h1>Time's up!</h1>
            );
        } else if (minutes === 0 & seconds <= 15) {
            return (
                <h1>### WARNING ### Time Remaining: {minutes < 10 ? `0${minutes}`: minutes} :{seconds < 10 ? `0${seconds}` : seconds}</h1>
            )
        } else {
            return (
                <h1>
                    {minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            );
        }

    }

    render() {
        return (
            <div className="timerContainer">
                <div className="sectionType">
                <h2>{this.props.sectionType}</h2>
                </div>
                    <a href="" className="elite">Elite Prep VN</a>
                <div className="timer">
                {this.renderTimerText()}
                </div>
            </div>
        )
    };
}