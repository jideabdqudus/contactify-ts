export interface IAuth {
  username: string;
  mail: string;
  password: string;
}

export type AuthState = {
  profile: object;
  loading: boolean
};

export type AuthAction = {
  type: string;
  profile: IAuth;
  payload: IAuth[];
};

export type DispatchType = (args: AuthAction) => AuthAction;
