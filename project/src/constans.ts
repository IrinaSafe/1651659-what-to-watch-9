export enum AppRoute {
  SignIn = '/login',
  Root = '/',
  MyList = '/mylist',
  Films = '/films',
  Id = ':id',
  AddReview = 'review',
  Player = '/player'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const FilmLevel = {
  Bad: {
    name: 'Bad',
    score: 0,
  },
  Normal: {
    name: 'Normal',
    score: 3,
  },
  Good: {
    name: 'Good',
    score: 5,
  },
  VeryGood: {
    name: 'Very good',
    score: 8,
  },
  Awesome: {
    name: 'Awesome',
    score: 10,
  },
};

export const VIDEO_SIZES = {
  width: '280',
  height: '175',
};

export enum NamesTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const NamesMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const VIDEO_TIMER = 1000;

export const DEFAULT_GENRE = 'All genres';

export const MAIN_FILMS_COUNT = 8;

export const MORE_FILMS_COUNT = 4;
