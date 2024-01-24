import { PropsWithChildren, memo } from "react";
import { AppBar } from "../component";
import styled from "styled-components";
import { Box } from "@mui/material";

const Wrapper = styled(Box)`
  height: 100vh;
`;
export const BasePage = memo<PropsWithChildren>(({ children }) => {
  return (
    <Wrapper>
      <AppBar />
      {children}
    </Wrapper>
  );
});

BasePage.displayName = "BasePage";
