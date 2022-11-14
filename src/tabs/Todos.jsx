import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, Todo } from 'components';
import useLocalStorage from '../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../constants/constants';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage(LOCAL_STORAGE_KEYS.todos, []);
  // const [isEditing, setIsEditing] = useState();

  const onCreatingTodo = todo => {
    if (todo.trim() !== '') {
      const newTodo = { id: nanoid(), text: todo };
      setTodos(prevState => [newTodo, ...prevState]);
    }
  };

  return (
    <>
      <SearchForm onSubmit={onCreatingTodo}> </SearchForm>
      {todos.length > 0 && (
        <Grid>
          {todos.map(item => (
            <GridItem key={item.id}>
              <Todo>{item.text}</Todo>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
