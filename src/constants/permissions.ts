import { TripVisibility } from "../services/trips.service";

export type TripSource = "discover" | "my" | "my_shared" | undefined;
export type CollaboratorRole = "viewer" | "editor" | null;

export type PermissionInput = {
  source: TripSource;
  isOwner: boolean;
  isAcceptedCollaborator: boolean;
  collabRole: CollaboratorRole;
  visibility?: TripVisibility | null;
};

const canAccessTrip = ({ source, isOwner, isAcceptedCollaborator, visibility }: PermissionInput) => {
  if (isOwner || isAcceptedCollaborator) return true;
  if (source === "discover" || visibility === "public") return true;
  return false;
};

export const canEditTrip = (input: PermissionInput) => {
  if (input.isOwner) return true;
  if (!input.isAcceptedCollaborator) return false;
  return input.collabRole === "editor";
};

export const canDeleteTrip = (input: PermissionInput) => input.isOwner;

export const canUploadMedia = (input: PermissionInput) => canEditTrip(input);
export const canDeleteMedia = (input: PermissionInput) => input.isOwner;
export const canUploadPdf = (input: PermissionInput) => canEditTrip(input);
export const canDeletePdf = (input: PermissionInput) => canEditTrip(input);

export const canComment = (input: PermissionInput) => canAccessTrip(input);
export const canLike = (input: PermissionInput) => canAccessTrip(input);
export const canDownloadPdf = (input: PermissionInput) => input.isOwner || input.isAcceptedCollaborator;

export const canManagePlaySession = (input: PermissionInput) => canEditTrip(input);
export const canInviteToPlaySession = (input: PermissionInput) => canEditTrip(input);
export const canEditPlayChecklistSummary = (input: PermissionInput) => canEditTrip(input);
