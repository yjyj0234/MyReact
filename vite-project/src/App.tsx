import { useState } from 'react'

import './App.css'
import type { Todo } from './types/todo';

function App() {
  // todos: 화면에 보여줄 상태 데이터
  // useState 사용 이유: 상태가 바뀌면 React가 자동으로 리렌더링 해줌=> 상태변환을 위해
  //todo.ts 의 타입 구조를 가지는 객체만 들어갈수있음(초기값이 []라서 타입 추론이 안되기 때문에 직접 알려줌)
  const [todos, setTodos] = useState<Todo[]>([]); 
  
  //제네릭 = “타입을 변수처럼 쓰는 것”
  //useState<number[]>([]) 숫자 배열
  //useState<string>("")  문자열

  //문자열 상태 (자동으로 string 추론됨 → 제네릭 생략 가능)
  const [input, setInput] = useState("");


  //추가 → [...todos, newTodo]
  //삭제 → filter(true인 것만 남기는 함수)
  //수정 → map

  const addTodo = () => {
    // 공백 제거헀는데 아무것도 없으면(빈문자열: !) 함수 종료
    if(!input.trim) return; 

    // 각 Todo를 구분하기 위해 고유 id필요
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    // 기존 배열을 직접 수정하지 않고 새로운 배열 생성(불변셩 유지)
    // [...todos]: 배열을 풀어서 복사
    setTodos([...todos, newTodo]);

    //입력창 초기화
    setInput("");
  };

  const deleteTodo = (id: number) => {
    // filter: 조건에 맞는 것만 남긴 새로운 배열 반환
    // 기존 배열 변경x (불변성 유지)

    // todo 하나씩 꺼내서 id가 같지 않은 것만 남김
    setTodos(todos.filter((todo) => todo.id !== id));

  };

  //완료 토글
  const toggleTodo = (id: number) => {
    // map : 특정 요소만 변경
    // 객체도 새로 만들어야 함(불변성)
    //id가 같은 Todo 하나만 찾아서 completed 값을 반대로 바꾸는 코드”
    setTodos (
      todos.map((todo) => 
        todo.id === id
         ? { ...todo, completed: !todo.completed} //객체 복사후 값 변경
         : todo
      )
    )


  }

  return <h1>리액트 시작</h1>
}

export default App
