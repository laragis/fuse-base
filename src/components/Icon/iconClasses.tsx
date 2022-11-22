import generateUtilityClass from "@mui/utils/generateUtilityClass/index.js";

export function getIconUtilityClass(slot: string): string {
  return generateUtilityClass('FuseIcon', slot);
}