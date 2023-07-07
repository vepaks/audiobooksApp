export interface User {
  // returnSecureToken не е задължителен аргумент
  returnSecureToken?: boolean;
  email: string;
  password: string;
}
export interface FbAuthResponse {
  // idToken не е задължителен аргумент
  idToken?: string;
  // expiresIn не е задължителен аргумент
  expiresIn?: string;
}
