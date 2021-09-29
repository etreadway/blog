import styled from "styled-components";
import { colorPallet } from "./ColorPallet";

export const Card = styled.div`
  background-color: ${colorPallet.primary};
  width: 70%;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 1em;
  margin: auto;
  margin-top: 1em;
`;
