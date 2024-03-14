import requests from '../api/requests';

export const rows = [
  {
    title: 'Trending Now',
    id: 'TN',
    fetchurl: requests.fetchTrending,
  },
  {
    title: 'Top Rated',
    id: 'TR',
    fetchurl: requests.fetchTrending,
  },
  {
    title: 'Action Movies',
    id: 'AM',
    fetchurl: requests.fetchActionMovies,
  },
  {
    title: 'Comedy Movies',
    id: 'CM',
    fetchurl: requests.fetchComedyMovies,
  },
];
