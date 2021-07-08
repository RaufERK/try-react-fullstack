import { useSelector } from 'react-redux';

const TodoList = () => {
  const list = useSelector(({ list }) => list);
  return (
    <div className="box">
      <h1>TodooLIst</h1>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};

export default TodoList;
