import { IsOnline, Item } from "./FriendListItem.styled";


export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <Item>
      <IsOnline isOnline={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};
