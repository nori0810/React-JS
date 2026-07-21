const style = {
  backgroundColor: '#561cdd',
  width: '400px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="今日も頑張っていこう～！"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
