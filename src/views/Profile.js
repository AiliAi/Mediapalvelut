import {useContext} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  // const user = JSON.parse(localStorage.getItem('user'));
  const [user] = useContext(MediaContext);

  return (
    <>
      <h1>Profile</h1>
      {user &&
      <div className={classes.root}>
        <Avatar alt="avatar picture" src="/static/images/avatar/1.jpg" />
        <p>{user.full_name}</p>
        <p>{user.email}</p>
        <p>{user.username}</p>
      </div>
      }
    </>
  );
};

export default Profile;
