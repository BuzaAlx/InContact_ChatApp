import React, { useState } from "react";
import { Avatar, Box, Typography, Popover, Button } from "@material-ui/core";
import moment from "moment";
import { useMessageStyles } from "./styles";

import { useSelector } from "react-redux";
import { gql, useMutation } from "@apollo/client";

const mapState = (state) => ({
  user: state.authData.user,
});

const reactions = ["❤️", "😆", "😯", "😢", "😡", "👍", "👎", "😎"];

const REACT_TO_MESSAGE = gql`
  mutation reactToMessage($uuid: String!, $content: String!) {
    reactToMessage(uuid: $uuid, content: $content) {
      uuid
    }
  }
`;

function Message({ message, image }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector(mapState);
  const styles = useMessageStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // handle poover

  const sent = message.from === user.username;
  const received = !sent;
  const reactionIcons = [...new Set(message.reactions.map((r) => r.content))];

  const [reactToMessage] = useMutation(REACT_TO_MESSAGE, {
    onError: (err) => console.log(err),
    onCompleted: () => setAnchorEl(false),
  });

  const react = (reaction) => {
    reactToMessage({ variables: { uuid: message.uuid, content: reaction } });
  };

  return (
    <Box alignSelf={received ? "flex-start" : "flex-end"} display="flex">
      {received && (
        <Avatar
          style={{ marginRight: "7px" }}
          alt={message.from}
          src={image ? image : "U"}
        />
      )}
      <Box className={styles.messageBox}>
        <Box
          className={`${styles.messageText} ${
            sent ? styles.selfMessageText : null
          }`}
          onClick={handleClick}
        >
          {message.content}
        </Box>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box className={styles.reactionsBox}>
            {reactions.map((reaction) => (
              <b
                key={reaction}
                className={styles.reaction}
                onClick={() => react(reaction)}
              >
                {reaction}
              </b>
            ))}
          </Box>
        </Popover>

        <Typography
          variant="body2"
          color="textSecondary"
          align={received ? "right" : "left"}
        >
          {moment(message.createdAt).format("MMM DD @ h:mm a")}
        </Typography>

        {message.reactions.length > 0 && (
          <Box className={received ? styles.emoji : styles.emojiRight}>
            {reactionIcons} {message.reactions.length}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Message;
