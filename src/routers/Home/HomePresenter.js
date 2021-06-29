import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Color } from 'components/globalStyle';
import Sections from 'components/Sections';
import Loader from 'components/Loader';
import Message from 'components/Message';
import Poster from 'components/Poster';

const Div = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Div>
      {nowPlaying && nowPlaying.length > 0 && (
        <Sections title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Sections>
      )}
      {upcoming && upcoming.length > 0 && (
        <Sections title="Upcoming Movies">
          {upcoming.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Sections>
      )}
      {popular && popular.length > 0 && (
        <Sections title="Popular Movies">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Sections>
      )}
      {error && <Message color={Color.gColor2} text={error} />}
    </Div>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
