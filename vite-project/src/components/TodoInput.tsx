import React from 'react'
// props 타입 정의
// 부모(App)로부터 입력값, 입력 변경 함수, 추가 함수 받음
type Props = {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>; //(string 또는 함수)를 받아서 상태를 변경하는 함수
    addTodo: ()=>void;

}

function TodoInput({
    input,
    setInput,
    addTodo
}: Props) {
    return (
        //입력 UI
        <>
            <input value={input} onChange={(e)=>setInput(e.target.value)} />

            {/* 부모 addTodo 실행 */}
            <button onClick={addTodo}>
                추가
            </button>
        </>
        
    )
}

export default TodoInput;