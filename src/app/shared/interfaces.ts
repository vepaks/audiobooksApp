export interface User {
  email: string;
  password: string;
  // returnSecureToken не е задължителен аргумент
  returnSecureToken?: boolean;
}
export interface FbAuthResponse {
  // idToken не е задължителен аргумент
  idToken?: string;
  // expiresIn не е задължителен аргумент
  expiresIn?: string;
}

export interface Post {
  id?: string,
  title?: string,
  text?: string,
  narrator?: string,
  date?: Date
}
