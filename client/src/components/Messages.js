import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  Divider,
  Typography,
} from "@material-ui/core/";
import { logout } from "../redux/Auth/auth.actions";

import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import Message from "./Message";
import { useMessagesStyles } from "./styles";
import { gql, useLazyQuery, useMutation } from "@apollo/client";

import { useSelector, useDispatch } from "react-redux";

import { setUserMessages } from "../redux/Users/users.actions";

const mapState = (state) => ({
  users: state.usersData.users,
});

const SEND_MESSAGE = gql`
  mutation sendMessage($to: String!, $content: String!) {
    sendMessage(to: $to, content: $content) {
      uuid
      from
      to
      content
      createdAt
    }
  }
`;

const GET_MESSAGES = gql`
  query getMessages($from: String!) {
    getMessages(from: $from) {
      uuid
      from
      to
      content
      createdAt
      reactions {
        uuid
        content
      }
    }
  }
`;

function Messages() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const styles = useMessagesStyles();

  const { users } = useSelector(mapState);

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  const selectedUser = users?.find((u) => u.selected === true);
  const messages = selectedUser?.messages;

  const [
    getMessages,
    { loading: messagesLoading, data: messagesData },
  ] = useLazyQuery(GET_MESSAGES);

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    if (selectedUser && !selectedUser.messages) {
      getMessages({ variables: { from: selectedUser.username } });
    }
  }, [selectedUser]);

  useEffect(() => {
    if (messagesData) {
      dispatch(
        setUserMessages({
          username: selectedUser.username,
          messages: messagesData.getMessages,
        })
      );
    }
  }, [messagesData]);

  const submitMessage = (e) => {
    e.preventDefault();

    if (content.trim() === "" || !selectedUser) return;
    if (content.length)
      sendMessage({ variables: { to: selectedUser.username, content } });
    setContent("");
  };

  let selectedChatMarkup;
  if (!messages && !messagesLoading) {
    selectedChatMarkup = (
      <Typography variant="overline">Select a friend</Typography>
    );
  } else if (messagesLoading) {
    selectedChatMarkup = <Typography variant="overline">Loading..</Typography>;
  } else if (messages.length > 0) {
    selectedChatMarkup = messages.map((message, index) => (
      <React.Fragment key={message.uuid}>
        <Message image={selectedUser.imageUrl} message={message} />
      </React.Fragment>
    ));
  } else if (messages.length === 0) {
    selectedChatMarkup = (
      <Typography variant="overline">
        You are now connected! send your first message!
      </Typography>
    );
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <List>
          <ListItem key="RemySharp" className={styles.messagesHeader}>
            <ListItemIcon>
              <Avatar
                alt="user"
                src={selectedUser ? selectedUser.imageUrl : ""}
              />
            </ListItemIcon>
            <ListItemText
              style={{ textTransform: "uppercase" }}
              primary={selectedUser ? selectedUser.username : ""}
            />
            <ListItemText align="right" className={styles.logoutButton}>
              <IconButton onClick={handleLogout}>
                <ExitToAppTwoToneIcon />
              </IconButton>
            </ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Box>
      <Box className={styles.main} display="flex" flexDirection="column">
        {selectedChatMarkup}
      </Box>
      <Box className={styles.footer}>
        <form onSubmit={submitMessage} className={styles.form}>
          <Input
            disableUnderline
            type="text"
            placeholder="type your message"
            className={styles.input}
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
          <IconButton type="submit" className={styles.button}>
            <MailOutlineOutlinedIcon />
          </IconButton>
        </form>
      </Box>
    </Box>
  );
}

export default Messages;
