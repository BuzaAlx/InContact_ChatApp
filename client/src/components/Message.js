import React from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import moment from "moment";
import { useSelector } from "react-redux";
import { gql, useMutation } from "@apollo/client";
import { useMessageStyles } from "./styles";

import { reactions } from "../helpers/ReactionList";
import { usePopover } from "../customHooks/usePopover";

const mapState = (state) => ({
  user: state.authData.user,
});

const REACT_TO_MESSAGE = gql`
  mutation reactToMessage($uuid: String!, $content: String!) {
    reactToMessage(uuid: $uuid, content: $content) {
      uuid
    }
  }
`;

function Message({ message, image }) {
  const { user } = useSelector(mapState);
  const styles = useMessageStyles();

  const [PopoverMarkup, setAnchorEl, handleClick] = usePopover();

  const sent = message.from === user.username;
  const received = !sent;
  const reactionIcons = [...new Set(message.reactions.map((r) => r.content))];

  const [reactToMessage] = useMutation(REACT_TO_MESSAGE, {
    onError: (err) => console.log(err),
    onCompleted: () => setAnchorEl(false),
  });

  const onReact = (reaction) => {
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
        <PopoverMarkup>
          <Box className={styles.reactionsBox}>
            {reactions.map((reaction) => (
              <b
                key={reaction}
                className={styles.reaction}
                onClick={() => onReact(reaction)}
              >
                {reaction}
              </b>
            ))}
          </Box>
        </PopoverMarkup>

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
