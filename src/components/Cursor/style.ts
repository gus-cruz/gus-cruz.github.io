import styled from "styled-components";

export const ItSelf = styled.div`
  width: 10px;
  height: 10px;
  background: ${props => props.theme.colors.text.regular};
  border-radius: 50%;
  position: absolute;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  pointer-events: none;
`;