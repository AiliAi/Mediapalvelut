import MediaRow from './MediaRow';
import {useAllMedia} from '../hooks/ApiHooks';
// import PropTypes from 'prop-types';

const MediaTable = () => {
  const picArray = useAllMedia();
  console.log('MediaTable', picArray);
  return (
    <table>
      <tbody>
        {
          picArray.map((item, index) => {
            return <MediaRow key={index} file={item} />;
          })
        }
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  // pickArray: PropTypes.array.isRequired,
};

export default MediaTable;
