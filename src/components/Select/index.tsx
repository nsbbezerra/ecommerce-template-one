import {
  Select as CustomSelect,
  Option as CustomOption,
  SelectProps,
  SelectOptionProps,
} from "@material-tailwind/react";
import { defaultFont } from "@/configs/fonts";

const Root = ({ children, ref, ...rest }: SelectProps) => (
  <CustomSelect {...rest}>{children}</CustomSelect>
);

const Option = ({ children, ...rest }: SelectOptionProps) => (
  <CustomOption {...rest} className={`${defaultFont.className}`}>
    {children}
  </CustomOption>
);

export { Root, Option };
