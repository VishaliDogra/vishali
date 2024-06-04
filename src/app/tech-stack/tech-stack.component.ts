import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  techStackItems = [
    {
      title: 'MongoDB',
      image: 'https://www.desuvit.com/wp-content/uploads/2021/03/mongodb-icon.png',
      description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
    },
    {
      title: 'Express.js',
      image: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png',
      description: 'Express.js is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.'
    },
    {
      title: 'Angular',
      image: 'https://www.svgrepo.com/show/439061/angular.svg',
      description: 'Angular is an open-source front-end Typescript library for building user interfaces or UI components. It is maintained by Google and a specifically for single web page applications.'
    },
    {
      title: 'Node.js',
      image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png',
      description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js runs on the V8 JavaScript engine.'
    }
  ];
  slideConfig = {
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
}
