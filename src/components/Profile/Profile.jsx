import { AvatarStyled, DescriptionStyled, ProfileStyled, StatsItemStyled, StatsStyled } from "./Profile.styles";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <AvatarStyled src={avatar} alt="User avatar"/>
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </DescriptionStyled>

      <StatsStyled>
        {Object.entries(stats).map(([key, value]) => {
          return (
            <StatsItemStyled key={key}>
              <span className="label">{key}</span>
              <span className="quantity">{value}</span>
            </StatsItemStyled>
          );
        })}
      </StatsStyled>
    </ProfileStyled>
  );
};
