type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
}

export const CompleteTodos = (props: Props) => {
    const {todos, onClickBack} = props;
    return (
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo: string, index: number) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
};