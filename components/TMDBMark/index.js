

import { DARK_TMDB_IMAGE_PATH, LIGHT_TMDB_IMAGE_PATH } from 'utils/constants/image-paths';

const TMDBMark = () => (
  <>
    <style jsx>{`
      .tmdb-mark {
        display: flex;
        justify-content: center;
      }

      .tmdb-mark > img {
        max-width: 80%;
        height: 8rem;
      }
    `}</style>
  </>
);

export default TMDBMark;
