import { memo, useCallback } from "react";
import {
  Button,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
} from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CN_Icon, EN_Icon } from "../assets";

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
`;
const LeftDiv = styled.div`
  margin-right: auto;
`;
const StyledAppBar = styled(MuiAppBar)`
  position: sticky;
  #F3EFDD
  border: 1px solid #111111;
`;
const RightDiv = styled.div``;
export const AppBar = memo(() => {
  const { t, i18n } = useTranslation();
  const changeLanguage = useCallback(
    (newLanguage: string) => {
      i18n.changeLanguage(newLanguage);
    },
    [i18n]
  );
  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <LeftDiv>
          <StyledButton>{t("login")}</StyledButton>
          <StyledButton>{t("signUp")}</StyledButton>
        </LeftDiv>
        <RightDiv>
          <IconButton onClick={() => changeLanguage("cn")}>
            <CN_Icon />
          </IconButton>
          <IconButton onClick={() => changeLanguage("en")}>
            <EN_Icon />
          </IconButton>
        </RightDiv>
      </Toolbar>
    </StyledAppBar>
  );
});

AppBar.displayName = "AppBar";
