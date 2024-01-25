import styled from "styled-components";

export const LoginWrapper = styled.div<{}>`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  .login-card {
    position: relative;
    background-color: var(--v-card);

    /* height: 460px; */
    width: 430px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 1rem;

    /* display: flex;
    justify-content: center;
    align-items: center; */
    h2{
      font-size: 36px;
      font-weight: 700;
      text-align: center;
    }
  }
`;
