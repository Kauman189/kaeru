import * as ImageManipulator from "expo-image-manipulator";

type PickerLikeAsset = {
  uri: string;
  fileName?: string | null;
  mimeType?: string | null;
};

export type NormalizedImageAsset = {
  uri: string;
  mimeType: string;
  extension: string;
  fileName: string;
  wasConverted: boolean;
};

const sanitizeName = (value: string) => value.replace(/[^a-zA-Z0-9._-]/g, "-");

const splitName = (fileName?: string | null) => {
  const raw = (fileName || "image").trim();
  const dotIndex = raw.lastIndexOf(".");
  if (dotIndex <= 0) {
    return { base: sanitizeName(raw || "image"), ext: "" };
  }
  const base = sanitizeName(raw.slice(0, dotIndex) || "image");
  const ext = raw.slice(dotIndex + 1).toLowerCase();
  return { base, ext };
};

const inferExtension = (asset: PickerLikeAsset) => {
  const fromName = splitName(asset.fileName).ext;
  if (fromName) return fromName;
  const fromMime = (asset.mimeType || "").split("/")[1]?.toLowerCase();
  return fromMime || "jpg";
};

const shouldConvertToJpg = (asset: PickerLikeAsset, extension: string) => {
  const mime = (asset.mimeType || "").toLowerCase();
  if (mime.includes("heic") || mime.includes("heif")) return true;
  if (["heic", "heif", "img"].includes(extension)) return true;
  const knownSafe = new Set(["jpg", "jpeg", "png", "webp"]);
  if (!knownSafe.has(extension)) return true;
  return false;
};

export async function normalizeImageForUpload(
  asset: PickerLikeAsset,
  options?: { quality?: number }
): Promise<NormalizedImageAsset> {
  const quality = options?.quality ?? 0.85;
  const extension = inferExtension(asset);
  const { base } = splitName(asset.fileName);

  if (shouldConvertToJpg(asset, extension)) {
    const converted = await ImageManipulator.manipulateAsync(
      asset.uri,
      [],
      { compress: quality, format: ImageManipulator.SaveFormat.JPEG }
    );
    return {
      uri: converted.uri,
      mimeType: "image/jpeg",
      extension: "jpg",
      fileName: `${base || "image"}.jpg`,
      wasConverted: true,
    };
  }

  const normalizedExt = extension === "jpeg" ? "jpg" : extension;
  const normalizedMime =
    (asset.mimeType || "").toLowerCase().startsWith("image/")
      ? (asset.mimeType || "").toLowerCase()
      : `image/${normalizedExt || "jpeg"}`;

  return {
    uri: asset.uri,
    mimeType: normalizedMime,
    extension: normalizedExt || "jpg",
    fileName: `${base || "image"}.${normalizedExt || "jpg"}`,
    wasConverted: false,
  };
}
