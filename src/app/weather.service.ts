import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) {
  }

  // todo: getOwnWeatherAPIKEY
  // todo: getWeather by position
  // todo: add weather model
  getCityWeatherByName(city: string): Promise<string> {
    return this.http.get<string>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=952d6b1a52fe15a7b901720074680562`).toPromise();
  }

  getWeatherByCoordinates(lat: number, lon: number): Promise<string> {
    return this.http.get<string>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=952d6b1a52fe15a7b901720074680562`).toPromise();
  }
}
