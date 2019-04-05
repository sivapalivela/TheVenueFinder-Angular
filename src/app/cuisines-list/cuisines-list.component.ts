import { Component, OnInit, Input } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {

  cuisinelist1,
  cuisinelist2,
  cuisinelist3,
  cuisinelist4,
  cuisinelist5,
  Tile

} from '../shared/cuisine';

@Component({
  selector: 'app-cuisines-list',
  templateUrl: './cuisines-list.component.html',
  styleUrls: ['./cuisines-list.component.css']
})
export class CuisinesListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  CuisineData1: Tile[] = cuisinelist1;

  CuisineData2: Tile[] = cuisinelist2;

  CuisineData3: Tile[] = cuisinelist3;

  CuisineData4: Tile[] = cuisinelist4;

  CuisineData5: Tile[] = cuisinelist5;


  selected_cuisine: any;

  length:number;

  close:number=1;


  ngOnInit() {
  }

  get_it_now(cuisine){
    this.http.get('http://127.0.0.1:8000/api/get/requestedjson?Cuisines=' + cuisine).subscribe(data => {
      this.selected_cuisine = data;
      this.length = this.selected_cuisine.length;
      this.close = 1;
    });
  }

  close_or_open() {
    if(this.close) {
      this.close = 0;
    }
  }


}
