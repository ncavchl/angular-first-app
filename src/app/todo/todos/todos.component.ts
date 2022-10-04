import { Component, OnInit } from '@angular/core';

// @Component - 데코레이터 / 함수처럼 호출 / 메타데이터를 보냄 (속성) / 이 컴포넌트가 어떻게 동작하는지 정의
@Component({
  selector: 'app-todos', //선택자
  templateUrl: './todos.component.html', //뷰에 대한 정의
  styleUrls: ['./todos.component.css'] // 스타일 , 여러개 가질 수 있음
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// class에서 속성과 메소드를 통해 view와 데이터를 주고받음 

