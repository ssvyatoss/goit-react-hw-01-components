import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  box-shadow: 0px 0px 5px 4px #9e9e9e;
  background-color: white;
  margin-bottom: 10px;
`;

export const IsOnline = styled.span`
  display: block;
  background-color: ${({isOnline}) => isOnline ? "green" : "red"};
  width: 15px;
  height: 15px;
  border-radius: 50px;
`