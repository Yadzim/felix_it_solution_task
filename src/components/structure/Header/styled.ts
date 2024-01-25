import styled from "styled-components";

export const HeaderWrapper = styled.div<{}>`
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header);
  // background: $card;
  z-index: 23;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  max-width: 1440px;

  .left {
    // width: 220px;
    display: flex;
    align-items: center;
    gap: 8px;
    .logo {
      // width: 50%;
      display: flex;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
      }
      h1 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
        margin-left: 0.5rem;
        color: white;

        span {
          color: var(--blue-text);
        }
      }
    }
    .burger {
      cursor: pointer;

      &:hover {
        color: $blue;
      }
    }
    .search {
      color: white;
      input {
        border: none;
        outline: none;
        background: transparent;
        width: 260px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .profile {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $element;
      // margin-left: 1rem;
    }
  }
`;
