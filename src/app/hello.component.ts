import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1 (click)="change()">Hello {{ name }}!</h1>
    <p> click to green </p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @HostBinding('style.color') color = 'red';
  @HostListener('click') function(){
   this.color = "green";
  }
 

  // @HostListener('click') function (){
  //    this.color = "yellow";
  // }
  change() {
    this.color = 'pink';
  }
}
