import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import WeatherExtraInfo from './WeatherData/WeatherExtraInfo';
import WeatherTemperature from './WeatherData/WeatherTemperature';
import './styles.css'
import {
    SUN,
} from '../../constants/weathers'

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 25,
    wind: '10 m/s'
}

class WeatherLocation extends Component{
    render() {
        return (
            <div className="weatherLocationCont">
            <Location city={"Marinilla"}></Location>
            <WeatherData data={data}>
            </WeatherData>
        </div>
        );
    }
};

export default WeatherLocation;