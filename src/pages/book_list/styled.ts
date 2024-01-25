import styled from "styled-components";

export const BookWrapper = styled.div<{}>`
  padding: 0.5rem 1rem;
  margin: 0 auto;
  max-width: 1440px;
  color: white;

  .header {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 36px;
      font-weight: 700;

      span{
        color: var(--blue-text)
      }
    }
  }
`;
