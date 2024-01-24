import { Avatar, List, ListItem, ListItemText } from "@mui/material";
import { memo } from "react";
import styled, { useTheme } from "styled-components";
import { rooms } from "../../data";

const StyledListItemText = styled(ListItemText)`
  margin-left: 10px;
  border-collapse: collapse;
`;
const StyledListItem = styled(ListItem)`
  border: 1px solid ${({ theme }) => theme.colors.greys[0]};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.greys[4]};
  }
`;
const StyledList = styled(List)`
  margin: 0;
  padding: 0;
`;
export const RoomList = memo(() => {
  const theme = useTheme();
  return (
    <StyledList
      style={{
        maxHeight: "100%",
        overflow: "auto",
      }}
      sx={{
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.colors.greys[2],
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.colors.greys[3],
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: theme.colors.greys[4],
        },
      }}
    >
      {rooms.map((room) => (
        <StyledListItem
          key={room.id}
          onClick={() => {
            console.log(room.id);
          }}
        >
          <Avatar></Avatar>
          <StyledListItemText>{room.name}</StyledListItemText>
        </StyledListItem>
      ))}
    </StyledList>
  );
});

RoomList.displayName = "RoomList";
