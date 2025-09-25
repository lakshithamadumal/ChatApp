import React, { createContext, ReactNode, useContext, useState } from "react";

export interface UserRegistrationDate {
  firstName: string;
  lastName: string;
  contactNo: string;
  countryCode: string;
  profileImage: string | null;
}

interface UserRegistrationContextType {
  userData: UserRegistrationDate;
  setUserData: React.Dispatch<React.SetStateAction<UserRegistrationDate>>;
}

const UserRegistrationContext = createContext<
  UserRegistrationContextType | undefined
>(undefined);

export const UserRegistrationProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [userData, setUserData] = useState<UserRegistrationDate>({
    firstName: "",
    lastName: "",
    contactNo: "",
    countryCode: "",
    profileImage: null,
  });
  return (
    <UserRegistrationContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserRegistrationContext.Provider>
  );
};

export const useUserRegistration = (): UserRegistrationContextType => {
  const ctx = useContext(UserRegistrationContext);
  if (!ctx) {
    throw new Error(
      "useUserRegistration must be used within a UserRegistrationProvider"
    );
  }
  return ctx;
};
