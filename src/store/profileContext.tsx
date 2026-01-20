import React, { createContext, useContext, useMemo, useState } from "react";

export type ProfileData = {
  name: string;
  email: string;
  location: string;
  gender: string;
  pronouns: string;
  bio: string;
  password: string;
};

type ProfileContextValue = {
  profile: ProfileData;
  updateProfile: (next: Partial<ProfileData>) => void;
  needsProfileSetup: boolean;
  setNeedsProfileSetup: (value: boolean) => void;
  profileComplete: boolean;
  completeProfile: (next: Partial<ProfileData>) => void;
};

const defaultProfile: ProfileData = {
  name: "",
  email: "",
  location: "",
  gender: "",
  pronouns: "",
  bio: "",
  password: "",
};

const ProfileContext = createContext<ProfileContextValue | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);

  const updateProfile = (next: Partial<ProfileData>) => {
    setProfile((prev) => ({ ...prev, ...next }));
  };

  const completeProfile = (next: Partial<ProfileData>) => {
    const updated = { ...profile, ...next };
    setProfile(updated);
    const isComplete =
      updated.name.trim().length > 0 &&
      updated.location.trim().length > 0 &&
      updated.pronouns.trim().length > 0;
    setProfileComplete(isComplete);
    setNeedsProfileSetup(!isComplete);
  };

  const value = useMemo(
    () => ({
      profile,
      updateProfile,
      needsProfileSetup,
      setNeedsProfileSetup,
      profileComplete,
      completeProfile,
    }),
    [profile, needsProfileSetup, profileComplete]
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return context;
}
