import {useState, useEffect} from 'react';
import MediaRow from './MediaRow';
// import PropTypes from 'prop-types';

const MediaTable = () => {
  const [picArray, setPicArray] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      const response = await fetch('test.json');
      const files = await response.json();
      console.log(files);
      setPicArray(files);
    };

    loadMedia();
  }, []);


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
