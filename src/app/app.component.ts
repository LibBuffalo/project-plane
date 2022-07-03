import { Component, OnInit } from '@angular/core';

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
    },
    {
      seatId : 'A2',
      row : 'A',
      seat : '2',
    },
    {
      seatId : 'A3',
      row : 'A',
      seat : '3',
    },
    {
      seatId : 'A6',
      row : 'A',
      seat : '6',
    },
    {
      seatId : 'A7',
      row : 'A',
      seat : '7',
    },
    {
      seatId : 'A8',
      row : 'A',
      seat : '8',
    },
    {
      seatId : 'B1',
      row : 'B',
      seat : '1',
    },
    {
      seatId : 'B2',
      row : 'B',
      seat : '2',
    },
    {
      seatId : 'B3',
      row : 'B',
      seat : '3',
    },
    {
      seatId : 'B6',
      row : 'B',
      seat : '6',
    },
    {
      seatId : 'B7',
      row : 'B',
      seat : '7',
    },
    {
      seatId : 'B8',
      row : 'B',
      seat : '8',
    },
    {
      seatId : 'C1',
      row : 'C',
      seat : '1',
    },
    {
      seatId : 'C2',
      row : 'C',
      seat : '2',
    },
    {
      seatId : 'C3',
      row : 'C',
      seat : '3',
    },
    {
      seatId : 'C6',
      row : 'C',
      seat : '6',
    },
    {
      seatId : 'C7',
      row : 'C',
      seat : '7',
    },
    {
      seatId : 'C8',
      row : 'C',
      seat : '8',
    },
    {
      seatId : 'D1',
      row : 'D',
      seat : '1',
    },
    {
      seatId : 'D2',
      row : 'D',
      seat : '2',
    },
    {
      seatId : 'D3',
      row : 'D',
      seat : '3',
    },
    {
      seatId : 'D6',
      row : 'D',
      seat : '6',
    },
    {
      seatId : 'D7',
      row : 'D',
      seat : '7',
    },
    {
      seatId : 'D8',
      row : 'D',
      seat : '8',
    },
    {
      seatId : 'F1',
      row : 'F',
      seat : '1',
    },
    {
      seatId : 'F2',
      row : 'F',
      seat : '2',
    },
    {
      seatId : 'F3',
      row : 'F',
      seat : '3',
    },
    {
      seatId : 'F6',
      row : 'F',
      seat : '6',
    },
    {
      seatId : 'F7',
      row : 'F',
      seat : '7',
    },
    {
      seatId : 'F8',
      row : 'F',
      seat : '8',
    },
    {
      seatId : 'G1',
      row : 'G',
      seat : '1',
    },
    {
      seatId : 'G2',
      row : 'G',
      seat : '2',
    },
    {
      seatId : 'G3',
      row : 'G',
      seat : '3',
    },
    {
      seatId : 'G6',
      row : 'G',
      seat : '6',
    },
    {
      seatId : 'G7',
      row : 'G',
      seat : '7',
    },
    {
      seatId : 'G8',
      row : 'G',
      seat : '8',
    },
    {
      seatId : 'H1',
      row : 'H',
      seat : '1',
    },
    {
      seatId : 'H2',
      row : 'H',
      seat : '2',
    },
    {
      seatId : 'H3',
      row : 'H',
      seat : '3',
    },
    {
      seatId : 'H6',
      row : 'H',
      seat : '6',
    },
    {
      seatId : 'H7',
      row : 'H',
      seat : '7',
    },
    {
      seatId : 'H8',
      row : 'H',
      seat : '8',
    },
    {
      seatId : 'I1',
      row : 'I',
      seat : '1',
    },
    {
      seatId : 'I2',
      row : 'I',
      seat : '2',
    },
    {
      seatId : 'I3',
      row : 'I',
      seat : '3',
    },
    {
      seatId : 'I6',
      row : 'I',
      seat : '6',
    },
    {
      seatId : 'I7',
      row : 'I',
      seat : '7',
    },
    {
      seatId : 'I8',
      row : 'I',
      seat : '8',
    },
    {
      seatId : 'J1',
      row : 'J',
      seat : '1',
    },
    {
      seatId : 'J2',
      row : 'J',
      seat : '2',
    },
    {
      seatId : 'J3',
      row : 'J',
      seat : '3',
    },
    {
      seatId : 'J6',
      row : 'J',
      seat : '6',
    },
    {
      seatId : 'J7',
      row : 'J',
      seat : '7',
    },
    {
      seatId : 'J8',
      row : 'J',
      seat : '8',
    },
  ];



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getData(isSelected: any, data: any){
    console.log(isSelected, data);
  }
}


