import React, { useEffect } from "react";
import { Grid } from "@material-ui/core/";
import { gql, useSubscription } from "@apollo/client";

import Loyout from "../components/Loyout";
import UsersList from "../components/UsersList";
import Messages from "../components/Messages";
import { useHomeStyles } from "./styles";
import { useDispatch } from "react-redux";
import { addMessage, addReaction } from "../redux/Users/users.actions";
import { useTypedSelector } from "../customHooks/useTypedSelector";

import { NewMessage, NewReaction } from "../types/Pages/Home";

const NEW_MESSAGE = gql`
  subscription newMessage {
    newMessage {
      uuid
      from
      to
      content
      createdAt
    }
  }
`;

const NEW_REACTION = gql`
  subscription newReaction {
    newReaction {
      uuid
      content
      message {
        uuid
        from
        to
      }
    }
  }
`;

const mapState = (state: any) => ({ user: state.authData.user });

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const styles = useHomeStyles();
  const { user } = useTypedSelector(mapState);

  const {
    data: messageData,
    error: messageError,
  } = useSubscription<NewMessage>(NEW_MESSAGE);

  const {
    data: reactionData,
    error: reactionError,
  } = useSubscription<NewReaction>(NEW_REACTION);

  useEffect(() => {
    if (messageError) console.log(messageError);

    if (messageData) {
      const message = messageData.newMessage;
      console.log(message);
      const otherUser =
        user.username === message.to ? message.from : message.to;

      dispatch(addMessage({ username: otherUser, message }));
    }
  }, [messageError, messageData]);

  useEffect(() => {
    if (reactionError) console.log(reactionError);

    if (reactionData) {
      const reaction = reactionData.newReaction;
      const otherUser =
        user.username === reaction.message.to
          ? reaction.message.from
          : reaction.message.to;

      dispatch(addReaction({ username: otherUser, reaction }));
    }
  }, [reactionError, reactionData]);

  return (
    <Loyout>
      <Grid className={styles.content} container item sm={12} md={10} lg={8}>
        <Grid item xs={3} sm={4} md={4}>
          <UsersList />
        </Grid>
        <Grid item xs={8} className={styles.rightBlock}>
          <Messages />
        </Grid>
      </Grid>
    </Loyout>
  );
};

export default Home;
