import { FriendListItem } from './FriendListItem';

export const FriendList = ({persons}) => {
  console.log('friends', persons);
  return (
    <ul className="friend-list">
      {persons.map(person => {
        return <FriendListItem avatar={person.avatar} name={person.name} isOnline={person.isOnline} key={person.id}/>;
      })}
    </ul>
  );
};
