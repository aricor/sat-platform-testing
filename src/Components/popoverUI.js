import styled from "styled-components";

export const Bar = styled.div`
  background: ${props => props.bg};
  border-radius: 3px;
  overflow: hidden;
  transition: 300ms;
  white-space: nowrap;
  display: flex;
  user-select: none;
  p {
    margin: 0;
    padding: 1em;
  }
`;

Bar.defaultProps = {
  bg: "#fff"
};

