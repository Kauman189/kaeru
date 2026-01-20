import React, { createContext, useContext, useMemo, useState } from "react";

export type TripStop = {
  id: string;
  title: string;
  address: string;
  time?: string;
  price?: string;
  latitude?: number;
  longitude?: number;
};

export type Trip = {
  id: string;
  title: string;
  destination: string;
  duration: string;
  budget: string;
  tags: string[];
  stops: TripStop[];
};

type TripsContextValue = {
  trips: Trip[];
  addTrip: (trip: Omit<Trip, "id">) => void;
};

const TripsContext = createContext<TripsContextValue | undefined>(undefined);

export function TripsProvider({ children }: { children: React.ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>([]);

  const addTrip = (trip: Omit<Trip, "id">) => {
    setTrips((prev) => [
      {
        ...trip,
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      },
      ...prev,
    ]);
  };

  const value = useMemo(() => ({ trips, addTrip }), [trips]);

  return <TripsContext.Provider value={value}>{children}</TripsContext.Provider>;
}

export function useTrips() {
  const context = useContext(TripsContext);
  if (!context) {
    throw new Error("useTrips must be used within TripsProvider");
  }
  return context;
}
