import { FriendListItem } from 'Components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          status={friend.status}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};
