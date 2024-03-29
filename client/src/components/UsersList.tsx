import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { gql, useQuery } from "@apollo/client";
import { useUsersListStyles } from "./styles";
import moment from "moment";

import { useDispatch } from "react-redux";
import { useTypedSelector } from "../customHooks/useTypedSelector";
import { setUsers, setSelectedUser } from "../redux/Users/users.actions";

import { GetUsersData, User } from "../types/components/UsersList";

const GET_USERS = gql`
  query getUsers {
    getUsers {
      username
      createdAt
      imageUrl
      latestMessage {
        uuid
        from
        to
        content
        createdAt
      }
    }
  }
`;

const mapState = (state: any) => ({
  user: state.authData.user,
  users: state.usersData.users,
});

const UsersList: React.FC = () => {
  const [value, setValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const { user, users } = useTypedSelector(mapState);
  const classes = useUsersListStyles();

  const dispatch = useDispatch();

  const selectedUser = users?.find((u: User) => u.selected === true)?.username;

  const { loading } = useQuery<GetUsersData>(GET_USERS, {
    onCompleted: (data) => {
      setFilteredUsers(data.getUsers);
      dispatch(setUsers(data.getUsers));
    },
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    let newUsers;
    newUsers = users?.filter((user: User) => {
      return user.username.startsWith(value.toLowerCase());
    });

    setFilteredUsers(newUsers);
  }, [value]);

  let usersMarkup;
  if (!filteredUsers || loading) {
    usersMarkup = (
      <Typography variant="body2" className={classes.usersMarkup}>
        Loading..
      </Typography>
    );
  } else if (filteredUsers.length === 0) {
    usersMarkup = (
      <Typography variant="body2" className={classes.usersMarkup}>
        No users
      </Typography>
    );
  } else if (filteredUsers.length > 0) {
    usersMarkup = filteredUsers.map((user) => {
      const selected = selectedUser === user.username;
      return (
        <ListItem
          className={classes.listItem}
          alignItems="center"
          button
          key={user.username}
          onClick={() => dispatch(setSelectedUser(user.username))}
          selected={selected}
        >
          <ListItemIcon className={classes.avatar}>
            <Avatar
              alt={user.username}
              src={
                user.imageUrl ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
            />
            <div className={classes.onlineIcon}></div>
          </ListItemIcon>
          <ListItemText
            className={classes.userInfo}
            primary={user.username}
            secondary={
              <Typography
                className={classes.lastMessage}
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {user.latestMessage
                  ? user.latestMessage.content
                  : "You are connected!"}
              </Typography>
            }
          />

          <ListItemText
            className={classes.latestMessageTimeBox}
            secondary={moment(user.latestMessage?.createdAt).format("h:mm a")}
          />
        </ListItem>
      );
    });
  }

  return (
    <>
      <List>
        <ListItem key="user" className={classes.authUserContainer}>
          <ListItemIcon>
            <Avatar
              alt="user"
              src="https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-18.jpg"
            />
          </ListItemIcon>
          <ListItemText
            className={classes.authUser}
            primary={user.username}
          ></ListItemText>
        </ListItem>
      </List>
      <Divider />
      <Grid item xs={12} className={classes.searchUserInput}>
        <TextField
          value={value}
          onChange={({ target }) => setValue(target.value)}
          id="outlined-basic-email"
          label="Search"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Divider />
      <List className={classes.usersList}>{usersMarkup}</List>
    </>
  );
};

export default UsersList;
