import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lat:any[];
  lon:any[];
  temp:any[];
  tempmin:any[];
  tempmax:any[];
  name:any[]
  weather:any[];
  wspeed:any[]
  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe((params:any)=>{
        this.lat = params['lat'];
        this.lon = params['lon'];
        this.temp = params['temp'];
        this.weather = params['weather'];
        this.tempmin = params['tempmin'];
        this.tempmax = params['tempmax'];
        this.name = params['name'];
        this.wspeed = params['wspeed']
      })
   }

  ngOnInit() {
  }

}
