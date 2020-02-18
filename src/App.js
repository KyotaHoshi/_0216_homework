import React, { useState } from 'react'
import Form from "./Form"
import List from "./List"

const App = () => {
    const [todos, setTodos] = useState([
        { note: 'アイウエオ' },
        { note: '勉強する' },
        { note: 'ご飯食べる' },
        { note: '追加したよ' },
        { note: 'バリバリ' },
    ])
    console.log(todos);
    console.log(setTodos);
    return (
        <div>
            <Form
                setTodos={setTodos}
                todos={todos}
            />
            <List todos={todos} />
        </div>
    )
}
export default App