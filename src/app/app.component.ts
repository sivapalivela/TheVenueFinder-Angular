import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../app/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'AngularFortinet';
  nill:number=0;

  showFiller:boolean= false;

  constructor(public dialog: MatDialog){}

  ngOnInit() {
  }

  disabled_executed(eventdata:{disabledvalue:number}){
    this.nill=eventdata.disabledvalue;
    console.log(this.nill);
  }

  openLogin() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}
