import { Text } from 'components';
import { TodoWrapper, DeleteButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Todo = ({ children }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        {children}
      </Text>
      <Text>Some description</Text>
      <DeleteButton type="button">
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
