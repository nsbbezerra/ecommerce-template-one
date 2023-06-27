import { defaultFont } from "@/configs/fonts";
import {
  List,
  ListItem,
  ListProps,
  ListItemProps,
  ListItemPrefix,
  ListItemPrefixProps,
  ListItemSuffix,
  ListItemSuffixProps,
} from "@material-tailwind/react";

const Root = ({ children, ref, ...rest }: ListProps) => (
  <List {...rest}>{children}</List>
);

const Item = ({ children, ref, ...rest }: ListItemProps) => (
  <ListItem {...rest} className={`${defaultFont.className} ${rest.className}`}>
    {children}
  </ListItem>
);

const Prefix = ({ children, ref, ...rest }: ListItemPrefixProps) => (
  <ListItemPrefix {...rest}>{children}</ListItemPrefix>
);

const Suffix = ({ children, ref, ...rest }: ListItemSuffixProps) => (
  <ListItemSuffix {...rest}>{children}</ListItemSuffix>
);

export { Root, Item, Prefix, Suffix };
