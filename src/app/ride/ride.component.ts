import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent {
  rides;

  constructor(private http:Http ) {
    http.get('http://localhost:3000/rides.json')
        .subscribe(res => this.rides = res.json());
  }

}
