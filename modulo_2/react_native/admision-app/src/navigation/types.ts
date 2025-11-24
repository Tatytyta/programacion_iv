export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type AppTabsParamList = {
  Home: undefined;
  Students: undefined;
  Profile: undefined;
};

export type StudentsStackParamList = {
  StudentsList: undefined;
  StudentForm: { id?: number };
};
