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
  visibility: "public" | "private";
  collaborators: string[];
};

type TripsContextValue = {
  trips: Trip[];
  addTrip: (trip: Omit<Trip, "id">) => void;
  updateTrip: (tripId: string, updates: Partial<Trip>) => void;
  updateTripVisibility: (tripId: string, visibility: Trip["visibility"]) => void;
  addCollaborator: (tripId: string, userId: string) => void;
  removeCollaborator: (tripId: string, userId: string) => void;
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

  const updateTrip = (tripId: string, updates: Partial<Trip>) => {
    setTrips((prev) =>
      prev.map((trip) => (trip.id === tripId ? { ...trip, ...updates } : trip))
    );
  };

  const updateTripVisibility = (tripId: string, visibility: Trip["visibility"]) => {
    updateTrip(tripId, { visibility });
  };

  const addCollaborator = (tripId: string, userId: string) => {
    setTrips((prev) =>
      prev.map((trip) =>
        trip.id === tripId && !trip.collaborators.includes(userId)
          ? { ...trip, collaborators: [...trip.collaborators, userId] }
          : trip
      )
    );
  };

  const removeCollaborator = (tripId: string, userId: string) => {
    setTrips((prev) =>
      prev.map((trip) =>
        trip.id === tripId
          ? {
              ...trip,
              collaborators: trip.collaborators.filter((id) => id !== userId),
            }
          : trip
      )
    );
  };

  const value = useMemo(
    () => ({
      trips,
      addTrip,
      updateTrip,
      updateTripVisibility,
      addCollaborator,
      removeCollaborator,
    }),
    [trips]
  );

  return <TripsContext.Provider value={value}>{children}</TripsContext.Provider>;
}

export function useTrips() {
  const context = useContext(TripsContext);
  if (!context) {
    throw new Error("useTrips must be used within TripsProvider");
  }
  return context;
}
