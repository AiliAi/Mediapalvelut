import MediaRow from './MediaRow';
import PropTypes from 'prop-types';

const MediaTable = (props) => {
    return (
        <table>
            <tbody>
                {
                props.picArray.map((item, index) => {
                    return <MediaRow key={index} file={item}/>;
                })
                }
        </tbody>
        </table>
    );
  };

  MediaTable.propTypes = {
      pickArray: PropTypes.array.isRequired,
  };
  
  export default MediaTable;
  