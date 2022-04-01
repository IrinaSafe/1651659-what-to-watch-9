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
