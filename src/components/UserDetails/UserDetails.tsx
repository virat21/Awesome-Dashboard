import React from 'react'
import "./UserDetails.css";

export type userData = {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
};

export const UserDetails: React.FC<{
         userData: userData;
       }> = ({userData}) => {
         return (
           <div className="userDetails">
             <div className="avatar">
               <img
                 src={userData.picture}
                 alt="avatar"
               />
             </div>
             <div className="userName">
               Hey, {userData.name} 👋
             </div>
           </div>
         );
       };

export default UserDetails;
