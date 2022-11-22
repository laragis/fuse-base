import { unstable_generateUtilityClass as generateUtilityClass } from "@mui/utils";

export function getIconUtilityClass(slot: string): string {
  return generateUtilityClass('FuseIcon', slot);
}
