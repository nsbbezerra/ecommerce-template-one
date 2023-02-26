import { defaultColors } from "@/styles/customTheme";
import { Input as ChakraInput, InputProps } from "@chakra-ui/input";

export default function Input({ ...rest }: InputProps) {
  return (
    <ChakraInput focusBorderColor={defaultColors.primary["500"]} {...rest} />
  );
}
