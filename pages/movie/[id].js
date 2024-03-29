

import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import PageWrapper from 'parts/PageWrapper';
import Loader from 'components/UI/Loader';
import PaddingWrapper from 'parts/PaddingWrapper';

import RecommendedMovieList from 'components/RecommendedMovieList';
import MovieSummary from 'components/MovieSummary';
import getMovie from 'actions/getMovie';
import getRecommendedMovies from 'actions/getRecommendedMovies';
import clearRecommendedMovies from 'actions/clearRecommendedMovies';
import clearMovie from 'actions/clearMovie';
import QUERY_PARAMS from 'utils/constants/query-params';
import LINKS from 'utils/constants/links';
import checkEmptyObject from 'utils/helpers/checkEmptyObject';
import MovieInfo from 'components/MovieInfo';


export async function getServerSideProps({ query }) {
    // Fetch data from external API
    const { id } = query
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
    let genreArr = []
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    const data = await res.json()
    data.genres.map(element => {
        genreArr.push(element.name)
    })
    if (res.ok) {
        return {
            props: { MovieDetail: data, genreArr, id }
        }
    }
  }
  

  const MovieDetail = ({ MovieDetail, genreArr, id }) => {
    const router = useRouter();
    const obj = router.query;
  return (
    <PageWrapper>
    <PaddingWrapper>
      <Head>
      
        <title>{`${obj.id} - Movie Library`}</title>
      </Head>
    <MovieInfo MovieDetail={MovieDetail} genreArr={genreArr} id={id}/>
    
    </PaddingWrapper>
      
    </PageWrapper>
  );
};




export default MovieDetail;