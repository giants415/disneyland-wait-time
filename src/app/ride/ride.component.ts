import { Component } from '@angular/core';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent {
  ridesAndTimes = [
    {ride: 'Astro Orbitor', time: 30 } ,
    {ride: 'Autotopia', time: 45},
    {ride: 'Buzz Lightyear Astro Blasters', time: 25},
    {ride: 'Finding Nemo Submarine Voyage', time: 15},
    {ride: 'Monorail', time: 20},
    {ride: 'Space Mountain', time: 65},
    {ride: 'Star Tours', time: 45},
    {ride: 'Star Wars Launch Bay', time: 30},
    {ride: 'Starcade', time: 5}
  ]

  constructor() { }


}
