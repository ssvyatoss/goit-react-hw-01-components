import PropTypes from 'prop-types';
import { IsOnline, Item } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <IsOnline isOnline={isOnline} />
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  IsOnline: PropTypes.bool,
};
