import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('visibilityChanged', [
      
      transition('* => *', [
        style({ opacity: 0}),
        animate('1s', keyframes([
          style({ opacity: 1}),
        ]))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit{

  visibility = 'hidden';
  isVisible = true;

  // @Input() isVisible : boolean = true;
  ngOnInit() {
    this.visibility = this.isVisible? 'shown': 'hidden';
  }

  

}
