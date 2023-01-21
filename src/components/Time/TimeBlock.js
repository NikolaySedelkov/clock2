import React from 'react';

class TimeBlock extends React.Component{

    constructor(props){
        super(props);
        this.hourArrow      = React.createRef();
        this.minutesArrow   = React.createRef();
        this.secondsArrow   = React.createRef();
        this.state = {
            time: new Date()
        }
        this.zone           = parseInt(this.props.zone.timeZone.slice(3, this.props.zone.timeZone.length));
    }

    makeTime(){
        let date = this.state.time;
        this.minutes = (date.getMinutes() + date.getSeconds() / 60) * 6;
        this.seconds = date.getSeconds() * 6;
        this.hours = (date.getHours() + this.zone-this.currentZone) % 24 * 30;
        
    }

    makeClock(){
        this.makeTime();
        this.secondsArrow.current.style.transform = `rotate(${this.seconds}deg)`;
        this.minutesArrow.current.style.transform = `rotate(${this.minutes}deg)`;
        this.hourArrow.current.style.transform = `rotate(${this.hours}deg)`;
    }

    componentDidUpdate(oldProps, oldState){
        this.makeClock();  
    }

    componentDidMount(){
        this.makeClock();
        this.timer = setInterval(() => {
            this.setState({time: new Date()});   
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        const p = this.props;
        return(
            <div>
                <h5>{p.zone.name}</h5>
                <div className="clock-circle">
                    <div className="button-delete-clock" onClick={(e)=>{p.func(p.zone.name)}}>x</div>
                    <div className="arrow-time hour-time" ref={this.hourArrow}></div>
                    <div className="arrow-time minutes-time" ref={this.minutesArrow}></div>
                    <div className="arrow-time seconds-time" ref={this.secondsArrow}></div>
                </div>
            </div>
        )
    }
}

export default TimeBlock;