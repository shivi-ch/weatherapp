import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http'
import {RequestService} from '../request.service'
import { Router } from '@angular/router'
// import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public model: any;

  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  constructor(private requestService: RequestService,private _router: Router) { }
  datas:any[]
  public cityname="";
  
  lastcity = JSON.parse(localStorage.getItem('lastedVisitedCity'));
  lastcitytemp = JSON.parse(localStorage.getItem('lastedVisitedCityTemp'));
  lastcityweather = JSON.parse(localStorage.getItem('lastedVisitedCityWeather'));
  lastcitywindspeed = JSON.parse(localStorage.getItem('lastedVisitedCityWindSpeed'));

  getWeather(){
    localStorage.setItem('lastedVisitedCity', JSON.stringify(this.cityname));

    this.requestService.getWeatherInfo(this.cityname)
    .subscribe(
      (response:Response) => {
       const data = response.json();
       console.log(data)
       localStorage.setItem('lastedVisitedCityTemp', JSON.stringify(data.main.temp));
       localStorage.setItem('lastedVisitedCityWeather', JSON.stringify(data.weather[0].main));
       localStorage.setItem('lastedVisitedCityWindSpeed', JSON.stringify(data.wind.speed));
       this._router.navigate(['/search/' + data.coord.lat + '/'+data.coord.lon+'/'+data.main.temp+'/'+data.name+'/'+data.wind.speed+'/'+data.main.temp_min+'/'+data.main.temp_max+'/'+data.weather[0].main])
      },
      (error) => console.log(error)
    );
    console.log(JSON.parse(localStorage.getItem('lastedVisitedCity')))
  }
  ngOnInit() {
  }

}
