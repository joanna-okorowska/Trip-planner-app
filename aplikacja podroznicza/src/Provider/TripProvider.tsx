import React, { createContext, useEffect, useState } from "react";

export type Trip = {
  id: number;
  title: string;
  city: string;
};

type TripContextState = {
  user: string | null;
  setUser: (username: string | null) => void;
  trips: Trip[];
  setTrips: (trip: Trip[]) => void;
};
type TripProviderProps = {
  children: React.ReactNode;
};
export const TripContext = createContext<TripContextState>(
  {} as TripContextState
);

export const TripProvider = ({ children }: TripProviderProps): JSX.Element => {
  const [user, setUser] = useState<string | null>("");
  const [trips, setTrips] = useState([] as Trip[]);
  return (
    <TripContext.Provider
      value={{
        user,
        setUser,
        trips,
        setTrips,
      }}>
      {children}
    </TripContext.Provider>
  );
};
