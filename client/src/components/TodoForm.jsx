import { useState } from 'react';

const TodoForm = () => {
  const [form, setForm] = useState({});

  const changeHandler = ({ target }) => {
    const { name, value, checked } = target;
    console.log('{ name, value } ====>', { name, value, checked });
    console.log(' target.type =', target.type);
    const setParam = target.type === 'checkbox' ? checked : value;
    setForm((pre) => ({ [target.name]: setParam }));
  };
  const submitHandler = () => {};

  return (
    <div className="box">
      <h1>Too Form</h1>
      <form onChange={changeHandler} onSubmit={submitHandler}>
        <label>
          Pease Enter a new todo item
          <input type="text" name="title" value={form.title} />
        </label>
        <label>
          Important:
          <input type="checkbox" name="important" checked={form.important} />
        </label>
        <button>SUBMIT FORM</button>
      </form>
    </div>
  );
};

export default TodoForm;
