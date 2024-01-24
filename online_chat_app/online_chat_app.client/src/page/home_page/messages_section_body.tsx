import { memo } from "react";
import { messages } from "../../data";
import { Card } from "@mui/material";
import styled from "styled-components";

const MessageWrapper = styled(Card)<{ $fromSelf?: boolean }>`
  background-color: ${({ theme }) => theme.colors.greys[1]};
  margin-top: 10px;
  margin-left: ${({ $fromSelf }) => ($fromSelf ? "auto" : "10px")};
  margin-right: ${({ $fromSelf }) => ($fromSelf ? "10px" : "auto")};
  max-width: 40%;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
`;
const Wrapper = styled.div`
  flex: 15;
`;

export const MessagesSectionBody = memo(() => {
  return (
    <Wrapper>
      {messages.map((message) => (
        <MessageWrapper $fromSelf={message.fromSelf} key={message.key}>
          {message.content}
        </MessageWrapper>
      ))}
    </Wrapper>
  );
});

MessagesSectionBody.displayName = "MessagesSectionBody";
