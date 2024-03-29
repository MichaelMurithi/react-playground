import React from "react";

const UserContext = React.createContext("Myke");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
