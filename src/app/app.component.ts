import { Component, OnInit } from '@angular/core';
import { SeatsComponent } from './seats/seats.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular';
  title = 'project-plane';

    public tableall : any = [
    {
      seatId : 'A1',
      row : 'A',
      seat : '1',
      class : 'Business',
    },
    {
      seatId : 'A2',
      row : 'A',
      seat : '2',
      class : 'Business',
    },
    {
      seatId : 'A3',
      row : 'A',
      seat : '3',
      class : 'Business',
    },
    {
      seatId : 'A6',
      row : 'A',
      seat : '6',
      class : 'Business',
    },
    {
      seatId : 'A7',
      row : 'A',
      seat : '7',
      class : 'Business',
    },
    {
      seatId : 'A8',
      row : 'A',
      seat : '8',
      class : 'Business',
    },
    {
      seatId : 'B1',
      row : 'B',
      seat : '1',
      class : 'Business',
    },
    {
      seatId : 'B2',
      row : 'B',
      seat : '2',
      class : 'Business',
    },
    {
      seatId : 'B3',
      row : 'B',
      seat : '3',
      class : 'Business',
    },
    {
      seatId : 'B6',
      row : 'B',
      seat : '6',
      class : 'Business',
    },
    {
      seatId : 'B7',
      row : 'B',
      seat : '7',
      class : 'Business',
    },
    {
      seatId : 'B8',
      row : 'B',
      seat : '8',
      class : 'Business',
    },
    {
      seatId : 'C1',
      row : 'C',
      seat : '1',
      class : 'Business',
    },
    {
      seatId : 'C2',
      row : 'C',
      seat : '2',
      class : 'Business',
    },
    {
      seatId : 'C3',
      row : 'C',
      seat : '3',
      class : 'Business',
    },
    {
      seatId : 'C6',
      row : 'C',
      seat : '6',
      class : 'Business',
    },
    {
      seatId : 'C7',
      row : 'C',
      seat : '7',
      class : 'Business',
    },
    {
      seatId : 'C8',
      row : 'C',
      seat : '8',
      class : 'Business',
    },
    {
      seatId : 'D1',
      row : 'D',
      seat : '1',
      class : 'Economy',
    },
    {
      seatId : 'D2',
      row : 'D',
      seat : '2',
      class : 'Economy',
    },
    {
      seatId : 'D3',
      row : 'D',
      seat : '3',
      class : 'Economy',
    },
    {
      seatId : 'D6',
      row : 'D',
      seat : '6',
      class : 'Economy',
    },
    {
      seatId : 'D7',
      row : 'D',
      seat : '7',
      class : 'Economy',
    },
    {
      seatId : 'D8',
      row : 'D',
      seat : '8',
      class : 'Economy',
    },
    {
      seatId : 'F1',
      row : 'F',
      seat : '1',
      class : 'Economy',
    },
    {
      seatId : 'F2',
      row : 'F',
      seat : '2',
      class : 'Economy',
    },
    {
      seatId : 'F3',
      row : 'F',
      seat : '3',
      class : 'Economy',
    },
    {
      seatId : 'F6',
      row : 'F',
      seat : '6',
      class : 'Economy',
    },
    {
      seatId : 'F7',
      row : 'F',
      seat : '7',
      class : 'Economy',
    },
    {
      seatId : 'F8',
      row : 'F',
      seat : '8',
      class : 'Economy',
    },
    {
      seatId : 'G1',
      row : 'G',
      seat : '1',
      class : 'Economy',
    },
    {
      seatId : 'G2',
      row : 'G',
      seat : '2',
      class : 'Economy',
    },
    {
      seatId : 'G3',
      row : 'G',
      seat : '3',
      class : 'Economy',
    },
    {
      seatId : 'G6',
      row : 'G',
      seat : '6',
      class : 'Economy',
    },
    {
      seatId : 'G7',
      row : 'G',
      seat : '7',
      class : 'Economy',
    },
    {
      seatId : 'G8',
      row : 'G',
      seat : '8',
      class : 'Economy',
    },
    {
      seatId : 'H1',
      row : 'H',
      seat : '1',
      class : 'Economy',
    },
    {
      seatId : 'H2',
      row : 'H',
      seat : '2',
      class : 'Economy',
    },
    {
      seatId : 'H3',
      row : 'H',
      seat : '3',
      class : 'Economy',
    },
    {
      seatId : 'H6',
      row : 'H',
      seat : '6',
      class : 'Economy',
    },
    {
      seatId : 'H7',
      row : 'H',
      seat : '7',
      class : 'Economy',
    },
    {
      seatId : 'H8',
      row : 'H',
      seat : '8',
      class : 'Economy',
    },
    {
      seatId : 'I1',
      row : 'I',
      seat : '1',
      class : 'Economy',
    },
    {
      seatId : 'I2',
      row : 'I',
      seat : '2',
      class : 'Economy',
    },
    {
      seatId : 'I3',
      row : 'I',
      seat : '3',
      class : 'Economy',
    },
    {
      seatId : 'I6',
      row : 'I',
      seat : '6',
      class : 'Economy',
    },
    {
      seatId : 'I7',
      row : 'I',
      seat : '7',
      class : 'Economy',
    },
    {
      seatId : 'I8',
      row : 'I',
      seat : '8',
      class : 'Economy',
    },
    {
      seatId : 'J1',
      row : 'J',
      seat : '1',
      class : 'Economy',
    },
    {
      seatId : 'J2',
      row : 'J',
      seat : '2',
      class : 'Economy',
    },
    {
      seatId : 'J3',
      row : 'J',
      seat : '3',
      class : 'Economy',
    },
    {
      seatId : 'J6',
      row : 'J',
      seat : '6',
      class : 'Economy',
    },
    {
      seatId : 'J7',
      row : 'J',
      seat : '7',
      class : 'Economy',
    },
    {
      seatId : 'J8',
      row : 'J',
      seat : '8',
      class : 'Economy',
    },
  ];
  
  purchasedTickets = [];

  purchaseTicket() {
    this.purchasedTickets.push();
  
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getData(isSelected: any, data: any){
    console.log(isSelected, data);
    
  }
}


