export const CompleteTodo = (props) => {
  const { todo, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">達成できたこと</p>
      <ul>
        {todo.map((todo, index) => (
          <li key={todo}>
            <div className="List-row">
              <p className="todo-item">
                {index + 1}.{todo}
              </p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
