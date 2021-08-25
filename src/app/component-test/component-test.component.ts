import { Component, OnInit } from '@angular/core';
import { ComponentTestService } from './component-test.service';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.scss'],
})
export class ComponentTestComponent implements OnInit {

  myFirstInterpolation: string;
  anotherTest = {
    id: 10,
    name: 'Amaury',
  };
  anotherVariable: number;

  myImage = 'http://i.imgur.com/m1UIjW1.jpg';


  constructor(
    private testService: ComponentTestService
  ) { }

  ngOnInit() {
    this.myFirstInterpolation = 'Hello my dear';


    this.testService.printMessage();

    this.anotherVariable = 10;
    console.log(this.anotherVariable);
  }

  getName(): string {
    return 'amaury';
  }

  setMyStyle() {
    const styles = {
      'background-color': this.anotherVariable === 10 ? '#999' : '#555',
      'font-size': '20px',
    };

    return styles;
  }

}
