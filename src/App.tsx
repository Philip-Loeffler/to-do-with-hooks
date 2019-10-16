import React, { Fragment, useState } from 'react'
import { StringLiteral } from 'typescript';
//The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.
type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string;
  complete: boolean;
}

//JSX tells typescript what datatype this function will return
function App(): JSX.Element {

  //useState hook takes the default state as an argument
  //and returns an aray with two things, the state and the function
  //used to update the state
  //<string> means the function accepts a string
  const [value, setValue] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue("")
  }
  //his accepts an argument of type string and adds a new array newTodos with our existing todos array and a new object. Then passes that to our todo state with the setTodos function
  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false}];
    setTodos(newTodos);
  };

  return (
 <Fragment>
   <h1>To Do List</h1>
     <form onSubmit={handleSubmit}>
     <input type="text"
     value={value}
     onChange={e => setValue(e.target.value)}></input>
     <button type="submit">Add to do</button>
   </form>
 </Fragment>
  )
}

export default App