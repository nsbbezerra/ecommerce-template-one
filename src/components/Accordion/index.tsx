import { defaultFont } from "@/configs/fonts";
import {
  Accordion as CustomAccordion,
  AccordionHeader as CustomAccordionHeader,
  AccordionBody as CustomAccordionBody,
  AccordionBodyProps,
  AccordionProps,
  AccordionHeaderProps,
} from "@material-tailwind/react";

const Root = ({ children, ref, ...rest }: AccordionProps) => (
  <CustomAccordion {...rest}>{children}</CustomAccordion>
);

const Header = ({ children, ref, ...rest }: AccordionHeaderProps) => (
  <CustomAccordionHeader
    {...rest}
    className={`${defaultFont.className} ${rest.className}`}
  >
    {children}
  </CustomAccordionHeader>
);

const Body = ({ children, ...rest }: AccordionBodyProps) => (
  <CustomAccordionBody {...rest}>{children}</CustomAccordionBody>
);

export { Root, Header, Body };
