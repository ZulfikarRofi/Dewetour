// import React, { ReactNode, createContext, useContext, useReducer } from "react";

// interface User {
//   id: string;
//   username: string;
// }

// interface UserContextProps {
//   user: User;
// }

// interface Action {
//   type: string;
//   payload?: {
//     token: string,
//     user: User
//   };
// }

// interface childrenProps{
//     children: ReactNode;
// }

// const initialState = {
//   user: {
//     id: "",
//     username: ""
//   }
// };




// const reducer = (state: UserContextProps, action: Action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "LOGIN_SUCCESS":
//         if(payload){
//             localStorage.setItem('token', payload.token);
//             return {
//               user: payload.user
//             };
//         }
//     return state;

//     case "LOGOUT":
//       localStorage.removeItem("token");
//       return {
//         user: {
//           id: "",
//           username: ""
//         }
//       };

//     default:
//       throw new Error("Invalid action type");
//   }
// };


// export const UserContext = createContext<UserContextProps>(initialState);
// export const useUserContext = () => useContext(UserContext);

// export const UserContextProvider: React.FC<childrenProps> = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
