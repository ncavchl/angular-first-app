import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../share/todo.model';

@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo?.done"><label>{{todo?.text}}</label>
  `,
  styles: [
    `
    :host {
      display:block;
      padding:16px;
      color:darkgray;
      background-color:white;  
    }
    input {
      position:relative;
    }
    input:before {
      content:'';
      display:inline-block;
      width:18px;
      height:18px;
      background-color:white;
      border-radius:18px;
      position:absolute;
      top:-2px;
      left:-4px;
      border:1px solid dimgray;
    }
    input:checked:after {
      content:'\\2713';
      font-size:14px;
      display:inline-block;
      width:18px;
      height:18px;
      border-radius:18px;
      position:absolute;
      top:-2px;
      left:-4px;
      border:1px solid darkgray;
      background-color:dimgray;
      text-align:center;
      color:white;
    }
    input + label {
      margin-left:5px;
    }
    input:checked + label {
      text-decoration:line-through;
    }
    `
  ]
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo |undefined ;

  

  constructor() { 
  }

  ngOnInit(): void {
  }

}
