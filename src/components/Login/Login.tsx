import React from 'react'
import {useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components"
import "./Login.css";
import { themeProps } from 'utils/ThemeConfig';

//dependency injection
type LoginProps = {
loginWithRedirect?:()=>any,
};

//theme
const LoginContainerStyled = styled.div`
background-color : ${(props : themeProps)=>props.theme.secondary};
`;

export const Login: React.FC<LoginProps> = ({
         loginWithRedirect = () => {},
       }) => {
         return (
           <LoginContainerStyled className="loginContainer">
             <div className="loginWrapper">
               <h1>Let's Get Started</h1>
               <h4>
                 No Credit Required, start your{" "}
                 <b>Free 14 days</b> trial now.
               </h4>

               <div
                 className="loginBtn"
                 onClick={() => {
                   loginWithRedirect();
                 }}
               >
                 Login with Google
               </div>
               <p className="privacyPolicy">
                 By clicking on above button you
                 accepting our{" "}
                 <a href="#">Terms & Condition</a> and{" "}
                 <a href="#">Privacy Policy</a>
               </p>
             </div>
           </LoginContainerStyled>
         );
       };

export const LoginWithAuth: React.FC = () => {
         let { loginWithRedirect } = useAuth0();

         return (
           <Login
             loginWithRedirect={loginWithRedirect}
           />
         );
       };
