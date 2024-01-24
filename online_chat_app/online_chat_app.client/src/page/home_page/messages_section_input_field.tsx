import { memo } from "react";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
`;

const StyledTextField = styled(TextField)`
  .MuiInputBase-input {
    background-color: ${({ theme }) => theme.colors.greys[1]};
    color: ${({ theme }) => theme.colors.white};
    texttransform: "none";
  }
`;
const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
export const MessageSectionInputField = memo(() => {
  return (
    <StyledDiv>
      <StyledTextField fullWidth />
      <StyledButton disableRipple variant="contained">
        Send
      </StyledButton>
    </StyledDiv>
  );
});
MessageSectionInputField.displayName = "MessageSectionInputField";
