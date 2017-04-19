import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor() { }

  projects = [
    {
      id: 1,
      title: 'test',
      author: 'Ludovico',
      description: 'ajaskd alksdjlaksjdkl asjdklj hjglfger fsdlkfjsd kfjsd jfksdljfk lsdjfklsdjklf jsdlkfj klsjflksdjflsd k',
      image: 'https://www.arduino.cc/new_home/assets/illu-arduino-UNO.png'
    },
    {
      id: 2,
      title: 'test 2',
      author: 'Ludovico',
      description: 'ajaskd alksdjlaksjdkl asjdklj hjglfger fsdlkfjsd kfjsd jfksdljfk lsdjfklsdjklf jsdlkfj klsjflksdjflsd k',
      image: 'https://images-na.ssl-images-amazon.com/images/I/913XYU1VtjL._SX355_.jpg'
    },
    {
      id: 3,
      title: 'test 3',
      author: 'Ludovico',
      description: 'ajaskd alksdjlaksjdkl asjdklj hjglfger fsdlkfjsd kfjsd jfksdljfk lsdjfklsdjklf jsdlkfj klsjflksdjflsd k',
      image: 'https://www.arduino.cc/new_home/assets/illu-arduino-UNO.png'
    }
  ];


  ngOnInit() {
  }

}
