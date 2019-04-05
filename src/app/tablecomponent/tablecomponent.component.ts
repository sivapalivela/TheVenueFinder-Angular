import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../shared/cuisine';
@Component({
  selector: 'app-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.css']
})
export class TablecomponentComponent implements OnInit {

  @Input()
  selected_Cuisine: Tile;

  @Input()
  length:number;


  displayedColumns: string[] = ['Restaurant ID', 'Restaurant Name', 'Cuisines', 'Average Cost for two', 'Currency', 'Has Table Booking', 'Has Online Delivery', 'Aggregate Rating', 'Rating Text', 'Votes'];

  constructor() { }

  ngOnInit() {
  }

}
