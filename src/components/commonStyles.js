import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;
  justify-content: center;
  width: 70px;
  height: 35px;
  background-color: ${(props) => (props.isdark ? "#ffffff" : "midnightblue")};
`;
