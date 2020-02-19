import React from "react"

const Form = ({ setTodos, todos }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
      const newTodos = todos.slice()
      newTodos.push({ note: "やらなければならないこと" })
      console.log(todos);
      console.log(newTodos);
      setTodos(todos = newTodos)

    // setTodos(todos.concat({ note: 'やらなければならないこと'}))
  }
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
    >
      <input type="text" />
      <button type="submit">追加</button>
    </form>
  )
}

export default Form