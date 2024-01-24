import { Card } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

import { RoomList } from "./room_list";
import { MessagesSectionBody } from "./messages_section_body";
import { MessagesSectionTopBar } from "./messages_section_top_bar";
import { MessageSectionInputField } from "./messages_section_input_field";

const Wrapper = styled(Card)`
  display: flex;
  height: 93vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.greys[0]};
`;
const LeftBox = styled(Card)`
  flex: 1;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.greys[2]};
  color: white;
`;
const RightBox = styled(Card)`
  border: 1px solid black;
  flex: 3;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.greys[2]};
  color: white;
  display: flex;
  flex-direction: column;
`;

export const HomePage = memo(() => {
  //   const { t } = useTranslation();
  return (
    <Wrapper>
      <LeftBox>
        <RoomList />
      </LeftBox>
      <RightBox>
        <MessagesSectionTopBar />
        <MessagesSectionBody />
        <MessageSectionInputField />
      </RightBox>
    </Wrapper>
  );
});

HomePage.displayName = "HomePage";
