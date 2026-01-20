export type MockUser = {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
};

export const MOCK_USERS: MockUser[] = [
  { id: "u1", name: "Maya Costa", initials: "MC", avatarColor: "#E9F5FF" },
  { id: "u2", name: "Leo Park", initials: "LP", avatarColor: "#FDECEC" },
  { id: "u3", name: "Ava Ruiz", initials: "AR", avatarColor: "#F3F5E8" },
  { id: "u4", name: "Noah Kim", initials: "NK", avatarColor: "#F1ECFF" },
  { id: "u5", name: "Iris Soto", initials: "IS", avatarColor: "#EAF7F1" },
];
