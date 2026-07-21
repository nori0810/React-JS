export const IncompleteTodo = (props) => {
  const { todo, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">今日やること</p>
      <ul>
        {todo.map((todo, index) => (
          <li key={todo}>
            <div className="List-row">
              <p className="todo-item">
                {index + 1}.{todo}
              </p>
              <button onClick={() => onClickComplete(index)}>達成</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
