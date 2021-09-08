import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2012',
    price: 500,
    imageUrl: 'https://sportshub.cbsistatic.com/i/r/2021/05/05/c49e2fd1-badb-465a-b7ff-9ad8b7104266/thumbnail/640x360/0f05986f63242071184561a99263b224/untitled-design-40.jpg',
    location: {
      address: 'Neaddress',
      city: 'Vly',
      country: 'India'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
