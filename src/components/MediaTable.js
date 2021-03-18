import {useState, useEffect} from 'react';
import MediaRow from './MediaRow';
import {baseUrl} from '../utils/variables';
// import PropTypes from 'prop-types';

const MediaTable = () => {
  const [picArray, setPicArray] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      // 1nd fetch:
      const response = await fetch(baseUrl + 'media');
      const files = await response.json();
      console.log(files);

      // 2nd fetch:
      const media = await Promise.all(files.map(async (item) => {
        const resp = await fetch(baseUrl + 'media/' + item.file_id);
        return resp.json();
      }));

      setPicArray(media);
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
