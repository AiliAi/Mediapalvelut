import {uploadsUrl} from '../utils/variables';
import PropTypes from 'prop-types';
// eslint-disable-next-line max-len
import {Card, Typography, CardActionArea, CardMedia, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '50vh',
  },
});

const Single = ({location}) => {
  const classes = useStyles();
  const file = location.state;

  return (
    <>
      <Typography component="h1" variant="h2">{file.title}</Typography>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={uploadsUrl + file.filename}
            title={file.title}
          />
          <CardContent>
            <Typography>
              {file.description}
            </Typography>
            <Typography variant="subtitle2">
              {file.user_id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

Single.propTypes = {
  location: PropTypes.object,
};

export default Single;
