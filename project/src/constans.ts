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
