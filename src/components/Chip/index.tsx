import { Chip as CustomChip, ChipProps } from "@material-tailwind/react";

export default function Chip({ ...rest }: ChipProps) {
  return <CustomChip {...rest} />;
}
