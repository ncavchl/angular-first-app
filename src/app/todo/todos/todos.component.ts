import { Component, OnInit } from '@angular/core';
import { Todo } from '../share/todo.model';

// @Component - 데코레이터 / 함수처럼 호출 / 메타데이터를 보냄 (속성) / 이 컴포넌트가 어떻게 동작하는지 정의
@Component({
  selector: 'app-todos', //선택자
  templateUrl: './todos.component.html', //뷰에 대한 정의
  styleUrls: ['./todos.component.css'] // 스타일 , 여러개 가질 수 있음
})
export class TodosComponent implements OnInit {

  newText="";
  // todos라는 속성 선언
  todos: Todo[];
  
  constructor() { 
    // todos 속성값 초기화
    this.todos = [
      {done:false, text:'운동하기'},
      {done:true, text:'공부하기'},
    ]
  }

  ngOnInit(): void {
  }

  toggleTodo(todo: Todo) {
    todo.done = !todo.done
  }

  addTodo(text:string) {
    this.todos.push({done:false, text:text})
  }

  deleteTodo(todo:Todo){
    this.todos= this.todos.filter((value)=> value !=todo)
  }
}

// class에서 속성과 메소드를 통해 view와 데이터를 주고받음 

