import styled from "styled-components";
import { colorPallet } from "./ColorPallet";

export const Wrapper = styled.div`
  background-color: ${colorPallet.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
