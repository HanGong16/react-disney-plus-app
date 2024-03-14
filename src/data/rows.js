import requests from '../api/requests';

export const rows = [
  {
    title: 'Trending Now',
    id: 'TN',
    fetchurl: requests.fetchTrending,
    key: 1,
  },
  {
    title: 'Top Rated',
    id: 'TR',
    fetchurl: requests.fetchTrending,
    key: 2,
  },
  {
    title: 'Action Movies',
    id: 'AM',
    fetchurl: requests.fetchActionMovies,
    key: 3,
  },
  {
    title: 'Comedy Movies',
    id: 'CM',
    fetchurl: requests.fetchComedyMovies,
    key: 4,
  },
];
