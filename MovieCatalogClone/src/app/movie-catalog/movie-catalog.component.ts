import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent implements OnInit {


  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 2000};

  slides = [
    {img:'../assets/images/1.png'},
    {img: '../assets/images/2.png'},
    {img: '../assets/images/3.png'},
    {img: '../assets/images/4.png'},
    {img: '../assets/images/5.png'}
  ];

  // imageObject: Array<any> = [{
  //   image: '../assets/images/1.png',
  //   thumbImage: '../assets/images/1.png',
  //   alt: 'Film 1',
  //   title: 'Film'
  // }, {
  //   image: '../assets/images/2.png',
  //   thumbImage: '../assets/images/2.png',
  //   title: 'Film 2',
  //   alt: 'Film'
  // }, {
  //   image: '../assets/images/3.png',
  //   thumbImage: '../assets/images/3.png',
  //   title: 'Film 3',
  //   alt: 'Film'
  // }, {
  //   image: '../assets/images/4.png',
  //   thumbImage: '../assets/images/4.png',
  //   title: 'Film 4',
  //   alt: 'Film'
  // }, {
  //   image: '../assets/images/5.png',
  //   thumbImage: '../assets/images/5.png',
  //   title: 'Film 5',
  //   alt: 'Film'
  // },
  // {
  //   image: '../assets/images/1.png',
  //   thumbImage: '../assets/images/1.png',
  //   alt: 'Film 1',
  //   title: 'Film'
  // }, {
  //   image: '../assets/images/2.png',
  //   thumbImage: '../assets/images/2.png',
  //   title: 'Film 2',
  //   alt: 'Film'
  // }, {
  //   image: '../assets/images/3.png',
  //   thumbImage: '../assets/images/3.png',
  //   title: 'Film 3',
  //   alt: 'Film'
  // }, {
  //   image: '../assets/images/4.png',
  //   thumbImage: '../assets/images/4.png',
  //   title: 'Film 4',
  //   alt: 'Film'
  // }, {
  //   image: '../assets/images/5.png',
  //   thumbImage: '../assets/images/5.png',
  //   title: 'Film 5',
  //   alt: 'Film'
  // }];
  
  constructor() { }

  ngOnInit(): void {
  }

}
