export interface IContact {
  id?: number;
  name: string;
  email: string;
  phone: number;
  contactType: string;
}


export interface IAuth {
  profile: object;
  loading: boolean;
  error: object;
  message: object;
  isAuthenticated: boolean;
}

export interface IAuthenticate {
  auth: IAuth;
}

export interface IEachContact {
  contacts: IContact[];
  current: IContact;
  loading: boolean;
  filtered: IContact[];
}

export interface IContacts {
  contactReducer: IEachContact;
}

export type AuthState = {
  profile: object;
  loading: boolean;
};

export type AuthAction = {
  type: string;
  profile: IAuth;
  payload: IAuth[];
};

export type DispatchType = (args: AuthAction) => AuthAction;
