import { Component } from '@angular/core';
import { trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [

  ]
})
export class AboutComponent {
  title = 'Morris Shen';
  intro = 'I have over 6 years of strong software experience designing, developing and deploying web-based business applications using web technologies including frontend framework in <b>Angular 8+</b>, <b>JavaScript</b> (ES6), <b>TypeScript</b>, <b>HTML5 </b>, <b>CSS</b> ; backend services in <b>Node.js</b>, <b>NestJS</b>; database systems in <b>PostgreSQL</b> and <b>MongoDB</b>.';



}
