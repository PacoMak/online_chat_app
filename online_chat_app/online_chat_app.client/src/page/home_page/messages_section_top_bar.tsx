import { Typography } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.greys[1]};
  flex: 1;
`;
export const MessagesSectionTopBar = memo(() => {
  return (
    <>
      <StyledTypography variant="h4">room 1</StyledTypography>
    </>
  );
});
MessagesSectionTopBar.displayName = "MessagesSectionTopBar";
