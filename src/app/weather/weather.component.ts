import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  weatherState: any;

  constructor(public weather: WeatherService) {
  }

  ngOnInit() {
    this.weather.getCityWeatherByName('munich').then(weatherState => {
        this.weatherState = weatherState;
      }
    );
  }

  ngOnDestroy(): void {
  }

}
