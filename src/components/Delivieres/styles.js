import styled from "styled-components";

export const Item = styled.div`
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 30px #00000010;

  @media (max-width: 508px){
    height: 76px;
  }

  p {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  span {
    font-size: 1.25rem;
  }
`;