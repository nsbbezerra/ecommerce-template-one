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
  Home,
  Info,
  Menu as Bars,
  X,
} from "lucide-react";
import Image from "next/image";
import { Drawer } from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  title: string;
}

export default function OtherHeader({ title }: Props) {
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
      <header className="w-full bg-white shadow-lg">
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

        <div className="h-24 px-5 w-full flex items-center">
          <div className="container max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-[260px_1fr_260px]">
            <Link href={"/"}>
              <div className="relative w-52">
                <Image
                  src={"logo.svg"}
                  alt={`${appConfigs.companyName} logo`}
                  width={512}
                  height={139}
                />
              </div>
            </Link>
            <div className="hidden w-full lg:flex items-center">
              <div className="items-center gap-10 hidden lg:flex">
                <Link
                  href={"/"}
                  className="flex items-center font-semibold gap-2 text-blue-500 hover:text-blue-600 transition-colors active:text-blue-500"
                >
                  <Home className="w-3.5 h-3.5" />
                  Início
                </Link>
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
              L
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

        <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500 p-3 flex justify-center items-center text-center text-3xl text-white font-bold">
          {title}
        </div>
      </header>

      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        placement="right"
        overlayProps={{ className: "fixed" }}
      >
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
        className={`fixed left-0 right-0 top-0 bg-white h-[60px] z-10 shadow-lg bg-opacity-80 backdrop-blur-sm px-5 transition-all ${
          showTopBar ? "mt-0" : "-mt-[100%]"
        }`}
      >
        <div className="container max-w-6xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href={"/"}>
              <div className="relative w-36 sm:w-40 sm:mr-16">
                <Image
                  src={"logo.svg"}
                  alt={`${appConfigs.companyName} logo`}
                  width={512}
                  height={139}
                />
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href={"/"}
                className="flex items-center font-semibold gap-2 text-blue-500 hover:text-blue-600 transition-colors active:text-blue-500"
              >
                <Home className="w-3.5 h-3.5" />
                Início
              </Link>
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
              L
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
            <button
              className="w-10 h-10 flex justify-center items-center rounded-theme text-blue-500 lg:hidden"
              onClick={() => setDrawer(true)}
            >
              <Bars className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
