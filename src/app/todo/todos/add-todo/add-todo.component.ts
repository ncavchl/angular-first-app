import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText"/>
   
  `,
  styles: [`
    :host {
      display:block;
      padding:16px;
      background-color:white;
    }
    input {
      display:inline-block;
      font-size:18px;
      border:none;
    }
    input:focus {
      border-bottom:1px solid darkblue;
    }
    input:focus, button:focus {
      outline:none;
    }
    button {
      width:24px;
      height:24px;
      border-radius:24px;
      color:white;
      font-size:16px;
      line-height:17px;
      border: 1px solid dimgray;
      background-color: darkblue;
      margin-right:10px;
    }
  `]
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText: string ;

  constructor() { 
    this.newText='';
  }

  ngOnInit(): void {
  }

  addTodo(newText:string){
    this.onTodoAdded.emit(newText);
    this.newText = "";
  }

}
