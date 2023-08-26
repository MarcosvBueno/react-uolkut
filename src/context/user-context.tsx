import React, { useState, createContext, ReactNode } from 'react';

// Defining types for the context
interface UserContextType {
  userIsLogged: boolean;
  setUserIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  loginForm: boolean;
  setLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
  registerForm: boolean;
  setRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
  forgotPasswordForm: boolean;
  setForgotPasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
  newPasswordForm: boolean;
  setNewPasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
  userUid: string;
  setUserUid: React.Dispatch<React.SetStateAction<string>>;

}

// Initializing the context with an initial value of null
export const UserContext = createContext<UserContextType | null>(null);

// Defining the type for UserProvider props
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = (props: UserProviderProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [loginForm, setLoginForm] = useState(true);
  const [registerForm, setRegisterForm] = useState(false);
  const [forgotPasswordForm, setForgotPasswordForm] = useState(false);
  const [newPasswordForm, setNewPasswordForm] = useState(false);
  const [userUid, setUserUid] = useState('');

  return (
    // Providing the state and setter to the context value
    <UserContext.Provider
      value={{
        userIsLogged,
        setUserIsLogged,
        modalIsVisible,
        setModalIsVisible,
        loginForm,
        setLoginForm,
        registerForm,
        setRegisterForm,
        forgotPasswordForm,
        setForgotPasswordForm,
        newPasswordForm,
        setNewPasswordForm,
        userUid,
        setUserUid
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
