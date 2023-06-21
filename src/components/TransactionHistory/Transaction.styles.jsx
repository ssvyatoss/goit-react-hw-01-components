import styled from "styled-components";

export const TransactionsTable = styled.table`
  width: 50%;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const TheadStyled = styled.thead`
    background-color: blueviolet;
    height: 50px;
`;

export const BodyTrStyled = styled.tr`
  background-color: ${({idx}) => idx % 2 === 0 ? "white" : "lightgray"};
  text-align: center;
`;
