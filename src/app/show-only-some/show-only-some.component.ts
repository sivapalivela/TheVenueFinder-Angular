import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-only-some',
  templateUrl: './show-only-some.component.html',
  styleUrls: ['./show-only-some.component.css']
})
export class ShowOnlySomeComponent implements OnInit {

  @Output()
  disable = new EventEmitter<{disabledvalue: number}>();

  component_disable :number = 1;

  one: number;
  restaurants_list: any;
  constructor(private http: HttpClient,private route: Router) { }

  ngOnInit() {
  }

  get_all_restaurants(){
    this.http.get('http://127.0.0.1:8000/api/getjson/').subscribe(datavar => {
      this.restaurants_list = datavar;
    });
    this.component_disable = 0;
    this.one = 1;
    this.disable.emit({disabledvalue: this.one});
  }

  get_rate(){
    this.http.get('http://127.0.0.1:8000/api/ratingsjson').subscribe(datavar=>{
      this.restaurants_list = datavar;
    });
  }

  get_avgcost(){
    this.http.get('http://127.0.0.1:8000/api/avgcostjson').subscribe(datavar=>{
      this.restaurants_list = datavar;
    });
  }

  get_vote(){
    this.http.get('http://127.0.0.1:8000/api/votesjson').subscribe(datavar=>{
      this.restaurants_list = datavar;
    });
  }

  get_minimal(){
    this.component_disable = 1;
    this.one = 0;
    this.disable.emit({disabledvalue: this.one});
  }

}
