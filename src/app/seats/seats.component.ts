import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  public takenSeats : any[] = [];

  public availableSeats : any[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
