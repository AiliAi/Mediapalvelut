/* eslint-disable max-len */
import useSignUpForm from '../hooks/RegisterHooks';
import {useUsers} from '../hooks/ApiHooks';
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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  const {register, getUserAvailable} = useUsers();

  const doRegister = async () => {
    try {
      console.log('rekisteröinti lomake lähtee');
      const available = await getUserAvailable(inputs.username);
      console.log('availabale', available);
      if (available) {
        register(inputs);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(doRegister);
  // console.log('RegisterForm', inputs);

  return (
    // eslint-disable-next-line max-len
    <form onSubmit={handleSubmit} className={classes.root} style={{width: '100%'}}>
      <Box display="flex">
        <Card className={classes.root}>
          <CardContent m={2}>
            <Typography component="h1" variant="h4" gutterBottom>Register</Typography>
            <div>
              <InputLabel htmlFor="username">Username</InputLabel>
              <TextField
                name="username"
                onChange={handleInputChange}
                value={inputs.username}
                required
                id="username"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <InputLabel htmlFor="reg-password">Password</InputLabel>
              <TextField
                name="password"
                type="password"
                onChange={handleInputChange}
                value={inputs.password}
                required
                id="reg-password"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <TextField
                name="email"
                type="email"
                onChange={handleInputChange}
                value={inputs.email}
                required
                id="email"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <InputLabel htmlFor="fullname">Fullname</InputLabel>
              <TextField
                name="full_name"
                onChange={handleInputChange}
                value={inputs.full_name}
                required
                id="fullname"
                variant="outlined"
                size="small"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button type="input" variant="outlined" color="primary">Tallenna</Button>
          </CardActions>
        </Card>
      </Box>
    </form>
  );
};

export default RegisterForm;
