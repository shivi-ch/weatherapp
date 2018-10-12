import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:Http) {

   }
   
   getWeatherInfo(cityname:string){

return this.http.get('https://api.openweathermap.org/data/2.5/weather',{params:{q:cityname,appid:'b4258bc0dc1c1e1848bbff87837207e6'}})
   }

}
