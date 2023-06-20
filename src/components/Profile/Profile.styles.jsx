import styled from "styled-components";

export const ProfileStyled = styled.div`
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
  max-width: 60%;
  max-height: 30%;
  margin: 40px;
  padding-top: 50px;
`;

export const DescriptionStyled = styled.div`
  text-align: center;
  color: gray;
  margin-bottom: 50px;

  p:first-of-type {
    font-weight: bold;
    font-size: 30px;
    color: black;
  }
`;

export const AvatarStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StatsStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

export const StatsItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightgray;
  width: 100%;
  height: 70px;
  border-right: 2px solid gray;

  &:last-child {
    border-right: none;
  }
`;