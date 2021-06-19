import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
images = [
  '/assets/homePage/Best-Whisky-Brands-In-India-Banner-2-scaled.jpg',
  '/assets/homePage/pexels-alison-m-2399543.jpg'
]
imgsInfo = [
  {
    img:'/assets/homePage/Best-Whisky-Brands-In-India-Banner-2-scaled.jpg',
    photographer:'Amitest',
    price:'500$'
  },
  {
    img:'/assets/homePage/pexels-alison-m-2399543.jpg',
    photographer:'Ritest',
    price:'1200$'
  },
  {
    img:'assets/homePage/pexels-saya-kimura-978342.jpg',
    photographer:'Tokyo',
    price:'450$'
  },
  {
    img:'assets/homePage/pexels-markus-spiske-1089438.jpg',
    photographer:'Vinne',
    price:'280$'
  },
  {
    img:'/assets/homePage/pexels-kon-karampelas-3914166.jpg',
    photographer:'Zuro',
    price:'230$'
  },
  {
    img:'/assets/homePage/pexels-skitterphoto-691467.jpg',
    photographer:'Berlin',
    price:'530$'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
