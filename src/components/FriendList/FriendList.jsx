import PropTypes from 'prop-types'; 
import { FriendListItem } from './FriendListItem';

export const FriendList = ({persons}) => {
  console.log('friends', persons);
  return (
    <ul>
      {persons.map(person => {
        return <FriendListItem avatar={person.avatar} name={person.name} isOnline={person.isOnline} key={person.id}/>;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })) 
}