import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { RoomList } from '../app/Roomlist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: Http) {
  }
  title = 'app';
  tool: string = 'Two Way Data-Binding';
  hide:boolean=false;
  roomlist:RoomList;
  appList: any[] = [ {
    "ID": "1",
    "Name": 'Apple'
 },
 {
    "ID": "2",
    "Name": 'Orange'
 } ];
  ngOnInit() {
    this.http.get('http://localhost:8081/api/room').subscribe(result => {
    this.roomlist=result.json();
    console.log(this.roomlist);
    });
  }
  toggle()
  {
    if(this.hide==true)
    {
      this.hide=false;
    }
    else{
      this.hide=true;
    }

  }
}
