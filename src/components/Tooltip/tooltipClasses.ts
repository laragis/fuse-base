import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from '@mui/utils';

export interface TooltipClasses {
  root: string;
}

export type TooltipClassKey = keyof TooltipClasses;

export function getTooltipUtilityClass(slot: string): string {
  return generateUtilityClass('FuseTooltip', slot);
}

const alertClasses: TooltipClasses = generateUtilityClasses('FuseTooltip', [
  'root',
]);

export default alertClasses;