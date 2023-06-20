import styled from "styled-components";

export const StatSection = styled.section`
  width: 40%;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
  padding: 0;
`;

export const StatItem = styled.li`
  background-color: #${props => props.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  gap: 15px;
  color: white;
`;