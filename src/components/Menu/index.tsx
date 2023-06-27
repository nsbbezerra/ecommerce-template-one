import {
  Menu as CustomMenu,
  MenuHandler as CustomMenuHandler,
  MenuList as CustomMenuList,
  MenuItem as CustomMenuItem,
  MenuProps,
  MenuHandlerProps,
  MenuItemProps,
  MenuListProps,
} from "@material-tailwind/react";

const Menu = ({ children, ...rest }: MenuProps) => (
  <CustomMenu {...rest}>{children}</CustomMenu>
);

const MenuHandler = ({ children, ...rest }: MenuHandlerProps) => (
  <CustomMenuHandler {...rest}>{children}</CustomMenuHandler>
);

const MenuList = ({ children, ref, ...rest }: MenuListProps) => (
  <CustomMenuList {...rest}>{children}</CustomMenuList>
);

const MenuItem = ({ children }: MenuItemProps) => (
  <CustomMenuItem>{children}</CustomMenuItem>
);

export { Menu, MenuHandler, MenuList, MenuItem };
