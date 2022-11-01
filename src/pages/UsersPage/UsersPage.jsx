import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';
import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';
import { EmailFilterUsers } from 'components/EmailFilterUsers/EmailFilterUsers';
import { selectUsers } from 'redux/users/usersSelectors';

export const UsersPage = () => {
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
