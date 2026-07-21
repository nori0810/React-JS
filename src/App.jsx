import { useState } from 'react';
import './style.css';
import { InputTodo } from './compornent/InputTodo';
import { IncompleteTodo } from './compornent/IncompleteTodo';
import { CompleteTodo } from './compornent/CompleteTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [inCompleteTodo, setinCompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodo = [...inCompleteTodo, todoText];
    setinCompleteTodo(newTodo);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodo];
    newTodos.splice(index, 1);
    setinCompleteTodo(newTodos);
  };

  const onClickComplete = (index) => {
    const newinCompleteTodo = [...inCompleteTodo];
    newinCompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodo, inCompleteTodo[index]];
    setinCompleteTodo(newinCompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);

    const newinCompleteTodo = [...inCompleteTodo, completeTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setinCompleteTodo(newinCompleteTodo);
  };

  const isMaxLimitIncompleteTodo = inCompleteTodo.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodo}
      />

      {isMaxLimitIncompleteTodo && (
        <p style={{ color: 'red' }}>
          登録できるのは5個まで！ 帰れなくなるよ(；ﾟДﾟ)
        </p>
      )}

      <IncompleteTodo
        todo={inCompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todo={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
