import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TYPES } from '../redux/reducer';

const apiListUrl = 'http://localhost:8080/api';

const App = () => {
  const dispatch = useDispatch();
  const getUsersFromServer = async () => {
    const request = await fetch(apiListUrl);
    const payload = await request.json();
    console.log(payload);
    dispatch({ type: TYPES.SET_LEST_FROM_SERVER, payload });
  };

  useEffect(() => {
    getUsersFromServer();
  }, []);
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
