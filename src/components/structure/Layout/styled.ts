import styled from "styled-components";

export const LayoutWrapper = styled.div<{}>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  // background-color: $bg;
  color: var(--text);
  overflow: hidden;
  // text-align: center;

  *::selection {
    background: #31bd59;
    color: #15232e;
  }

  .content {
    position: relative;
    width: calc(100vw - $sidebar);
    height: calc(100vh - var(--header));
    overflow-y: scroll;
    margin-top: var(--header);
    margin-left: $sidebar;
    transition: 0.15s linear;
  }

  // h1 {
  //   font-size: 5rem;
  //   margin: 3rem auto;
  //   color: #2089d9;
  // }
`;
