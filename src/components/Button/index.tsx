import {
  Button as CustomButton,
  ButtonProps,
} from "@material-tailwind/react/components/Button";
import { ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface Props {
  icon?: ReactNode;
  loading?: boolean;
}

type DefaultProps = ButtonProps & Props;

export default function Button({
  children,
  icon,
  ref,
  loading = false,
  ...rest
}: DefaultProps) {
  return (
    <CustomButton
      {...rest}
      className={`${rest.className} flex items-center gap-2 justify-center`}
      disabled={rest.disabled || loading}
      style={{ boxShadow: "none" }}
    >
      {loading ? (
        <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
      ) : (
        icon && icon
      )}
      {children}
    </CustomButton>
  );
}
