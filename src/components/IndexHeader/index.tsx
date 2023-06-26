"use client";

import { appConfigs } from "@/configs";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  User2,
  ShoppingCart,
  Search,
  List,
  Home,
  Info,
  Menu as Bars,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";

import { Karla } from "next/font/google";
const karla = Karla({ subsets: ["latin"] });

export default function IndexHeader() {
  const [drawer, setDrawer] = useState<boolean>(false);
  const [showTopBar, setShowTopBar] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 220) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
    });
  }, []);

  return (
    <Fragment>
      <header className="w-full bg-white">
        <div className="w-full border-b px-5">
          <div className="container max-w-6xl mx-auto flex justify-between items-center gap-2 py-2">
            <div className="flex gap-4 items-center">
              <a className="flex items-center cursor-pointer gap-2 group">
                <Mail className="w-4 h-4 text-zinc-400" />
                <span className="transition-colors group-hover:text-blue-500 text-sm hidden sm:block">
                  {appConfigs.companyEmail}
                </span>
              </a>

              <a className="flex items-center cursor-pointer gap-2 group">
                <Phone className="w-4 h-4 text-zinc-400" />
                <span className="transition-colors group-hover:text-blue-500 text-sm hidden sm:block">
                  {appConfigs.companyPhone}
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a className="group cursor-pointer">
                <Facebook className="w-4 h-4 text-zinc-400 transition-colors group-hover:text-blue-500" />
              </a>
              <a className="group cursor-pointer">
                <Instagram className="w-4 h-4 text-zinc-400 transition-colors group-hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-28 px-5 w-full flex items-center">
          <div className="container max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-[260px_1fr_260px]">
            <div className="relative w-52">
              <Image
                src={"logo.svg"}
                alt={`${appConfigs.companyName} logo`}
                width={512}
                height={139}
              />
            </div>
            <div className="hidden w-full lg:flex items-center">
              <div className="relative w-full flex items-center">
                <input
                  className="w-full outline-none border rounded-theme h-12 px-4 focus:ring-2 focus:ring-blue-500"
                  placeholder="Buscar por produtos"
                />
                <Search className="absolute right-4 text-blue-500" />
              </div>
            </div>
            <div className="w-full flex items-center justify-end gap-2">
              <button className="w-11 h-11 flex items-center justify-center hover:text-blue-500 transition-colors">
                <User2 className="w-7 h-7" />
              </button>
              <div className="relative">
                <button className="w-11 h-11 flex items-center justify-center hover:text-blue-500 transition-colors">
                  <ShoppingCart className="w-7 h-7" />
                </button>
                <span className="absolute -top-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-light text-sm shadow-md">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-500 w-full px-5 h-14">
          <div className="container max-w-6xl mx-auto flex items-center gap-3 h-full justify-between lg:justify-start">
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <button className="flex gap-2 h-full items-center bg-green-500 w-64 px-5 font-semibold text-white hover:bg-green-600 transition-colors mr-4">
                  <List className="w-5 h-5" />
                  <span>CATEGORIAS</span>
                </button>
              </MenuHandler>
              <MenuList className="w-64 p-0 rounded-theme overflow-hidden max-h-[70vh] divide-y bg-opacity-70 bg-white backdrop-blur-sm">
                <MenuItem className="text-zinc-900 gap-3 flex items-center rounded-none hover:bg-blue-200">
                  <Avatar
                    src="https://storetng.vteximg.com.br/arquivos/ids/412221-690-690/BNMKCW33_950_1-CAMISETA-BASICA-GOLA-LARGA.jpg?v=637703412713570000"
                    size="sm"
                  />
                  <span className={karla.className}>Camisetas</span>
                </MenuItem>
                <MenuItem className="text-zinc-900 gap-3 flex items-center rounded-none">
                  <Avatar
                    src="https://storetng.vteximg.com.br/arquivos/ids/412221-690-690/BNMKCW33_950_1-CAMISETA-BASICA-GOLA-LARGA.jpg?v=637703412713570000"
                    size="sm"
                  />
                  <span className={karla.className}>Shorts</span>
                </MenuItem>
              </MenuList>
            </Menu>

            <div className="items-center gap-10 hidden lg:flex">
              <button className="flex items-center font-semibold gap-2 text-white hover:text-zinc-200 transition-colors active:text-white">
                <Home className="w-3.5 h-3.5" />
                Início
              </button>
              <button className="flex items-center font-semibold gap-2 text-white hover:text-zinc-200 transition-colors active:text-white">
                <ShoppingCart className="w-3.5 h-3.5" />
                Compre por
              </button>
              <button className="flex items-center font-semibold gap-2 text-white hover:text-zinc-200 transition-colors active:text-white">
                <Info className="w-3.5 h-3.5" />
                Sobre Nós
              </button>
              <button className="flex items-center font-semibold gap-2 text-white hover:text-zinc-200 transition-colors active:text-white">
                <Phone className="w-3.5 h-3.5" />
                Contato
              </button>
            </div>

            <button
              className="w-10 h-10 flex justify-center items-center rounded-theme text-white lg:hidden"
              onClick={() => setDrawer(true)}
            >
              <Bars className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      <Drawer open={drawer} onClose={() => setDrawer(false)} placement="right">
        <div className="relative w-full h-full">
          <div className="relative w-52 p-5">
            <Image
              src={"logo.svg"}
              alt={`${appConfigs.companyName} logo`}
              width={512}
              height={139}
            />
          </div>

          <button
            className="absolute right-4 top-4 outline-none text-zinc-600 hover:text-zinc-700 transition-colors"
            onClick={() => setDrawer(false)}
          >
            <X />
          </button>

          <div className="space-y-5 mt-10">
            <button className="flex items-center gap-2 px-5 hover:text-blue-500 transition-colors">
              <Home className="w-3.5 h-3.5" /> Início
            </button>
            <button className="flex items-center gap-2 px-5 hover:text-blue-500 transition-colors">
              <ShoppingCart className="w-3.5 h-3.5" /> Compre por
            </button>
            <button className="flex items-center gap-2 px-5 hover:text-blue-500 transition-colors">
              <Info className="w-3.5 h-3.5" /> Sobre nós
            </button>
            <button className="flex items-center gap-2 px-5 hover:text-blue-500 transition-colors">
              <Phone className="w-3.5 h-3.5" /> Contato
            </button>
          </div>
        </div>
      </Drawer>

      <nav
        className={`fixed left-0 right-0 top-0 bg-white h-[60px] z-10 shadow-md bg-opacity-80 backdrop-blur-sm px-5 transition-all ${
          showTopBar ? "mt-0" : "-mt-[100%]"
        } delay-200`}
      >
        <div className="container max-w-6xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-40 mr-16">
              <Image
                src={"logo.svg"}
                alt={`${appConfigs.companyName} logo`}
                width={512}
                height={139}
              />
            </div>
            <div className="flex items-center gap-5">
              <button className="flex items-center font-semibold gap-2 text-blue-500 hover:text-blue-600 transition-colors active:text-blue-500">
                <Home className="w-3.5 h-3.5" />
                Início
              </button>
              <button className="flex items-center font-semibold gap-2 text-blue-500 hover:text-blue-600 transition-colors active:text-blue-500">
                <ShoppingCart className="w-3.5 h-3.5" />
                Compre por
              </button>
              <button className="flex items-center font-semibold gap-2 text-blue-500 hover:text-blue-600 transition-colors active:text-blue-500">
                <Info className="w-3.5 h-3.5" />
                Sobre Nós
              </button>
              <button className="flex items-center font-semibold gap-2 text-blue-500 hover:text-blue-600 transition-colors active:text-blue-500">
                <Phone className="w-3.5 h-3.5" />
                Contato
              </button>
            </div>
          </div>

          <div className="w-fit flex items-center justify-end gap-2">
            <button className="w-10 h-10 flex items-center justify-center hover:text-blue-500 transition-colors">
              <User2 className="w-5 h-5" />
            </button>
            <div className="relative">
              <button className="w-10 h-10 flex items-center justify-center hover:text-blue-500 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <span className="absolute top-0 right-0 bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center text-white font-light text-xs shadow-md">
                1
              </span>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
