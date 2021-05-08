export interface IAuth {
  id: number,
  username: string;
  mail: string;
  password: string;
}


export interface IContact {
  id?: number,
  name: string;
  email: string;
  phone: number;
  contactType: string;
}

export interface IEachContact {
  contacts: IContact[]
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
