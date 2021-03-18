import PropTypes from 'prop-types';

const MediaRow = (props) => {
  return (
    <tr>
      <td>
        <img src={props.file.thumbnails.w160} alt={props.file.title} />
      </td>
      <td>
        <h3>{props.file.title} </h3>
        <p>{props.file.description} </p>
      </td>
      <td>
        <a href={props.file.filename}>View</a>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object,
};

export default MediaRow;
