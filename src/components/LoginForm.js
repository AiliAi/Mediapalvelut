/* eslint-disable max-len */
import {useContext} from 'react';
import useLoginForm from '../hooks/LoginHooks';
import {useLogin} from '../hooks/ApiHooks';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {makeStyles} from '@material-ui/core/styles';
import {Button, TextField, InputLabel, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: 300,
      margin: 'auto',
    },
  },
}));

const LoginForm = ({history}) => {
  const classes = useStyles();
  const [user, setUser] = useContext(MediaContext);
  const {postLogin} = useLogin();

  const doLogin = async () => {
    try {
      const userdata = await postLogin(inputs);
      console.log('userdata', userdata);
      localStorage.setItem('token', userdata.token);
      // localStorage.setItem('user', JSON.stringify(userdata.user));
      setUser(userdata.user);
      history.push('/home');
    } catch (e) {
      console.log('doLogin', e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useLoginForm(doLogin);

  console.log('LoginForm', inputs, user);

  return (
    // eslint-disable-next-line max-len
    <form onSubmit={handleSubmit} className={classes.root} style={{width: '100%'}}>
      <Box display="flex">
        <Card className={classes.root}>
          <CardContent m={2}>
            <Typography component="h1" variant="h4">Login</Typography>
            <div>
              <InputLabel htmlFor="login">Username</InputLabel>
              <TextField
                name="username"
                onChange={handleInputChange}
                value={inputs.username}
                required
                id="login"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField
                name="password"
                type="password"
                onChange={handleInputChange}
                value={inputs.password}
                required
                id="password"
                variant="outlined"
                size="small"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button type="input" variant="outlined" color="primary">Lähettää</Button>
          </CardActions>
        </Card>
      </Box>
    </form>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object,
};

export default withRouter(LoginForm);
