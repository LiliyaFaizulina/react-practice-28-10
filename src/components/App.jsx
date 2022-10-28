import { Button } from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';
import { UsersList } from './UsersList/UsersList';
import { EmailFilterUsers } from './EmailFilterUsers/EmailFilterUsers';
import { selectUsers } from 'redux/users/usersSelectors';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      {users.length > 0 ? (
        <>
          <EmailFilterUsers />
          <UsersList />
        </>
      ) : (
        <Button text="Show users" type="button" clickHandler={handleClick} />
      )}
    </>
  );
};
