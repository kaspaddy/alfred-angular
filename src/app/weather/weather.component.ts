import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  temp: any;
  maxtemp: any;
  mintemp: any;

  constructor(public weather: WeatherService) {
  }

  ngOnInit() {
    this.weather.getCityWeatherByName('munich').then(weatherState => {
        this.temp = weatherState.main.temp;
        this.maxtemp = weatherState.main.temp_max;
        this.mintemp = weatherState.main.temp_min;
      }
    );
  }

  ngOnDestroy(): void {
  }

}
