"use client";

import {
  Accordion,
  Button,
  Chip,
  Footer,
  OtherHeader,
  InputText,
  List,
  PageProductsGrid,
  Select,
} from "@/components";
import { Drawer } from "@material-tailwind/react";
import {
  ChevronDown,
  ChevronRight,
  Circle,
  Plus,
  SearchIcon,
  TagsIcon,
  Trash,
  X,
} from "lucide-react";
import { Fragment, useState } from "react";

export default function Produtos() {
  const [open, setOpen] = useState<number>(1);
  const [drawer, setDrawer] = useState<boolean>(false);

  const SideBar = () => (
    <div className="w-full">
      <div className="flex items-center gap-2 py-3 px-4 border-b">
        <TagsIcon className="w-5 h-5 shrink-0" />
        <strong className="font-semibold leading-none block">
          COMPRE POR CATEGORIAS
        </strong>
      </div>

      <div className="p-2">
        <Button
          fullWidth
          size="sm"
          icon={<Trash className="w-3.5 h-3.5" />}
          variant="outlined"
        >
          Limpar Filtros
        </Button>
      </div>

      <List.Root className="p-2 -mt-2">
        <Accordion.Root
          open={open === 1}
          icon={
            <ChevronDown
              className={`mx-auto w-3.5 h-3.5 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <List.Item className="p-0" selected={open === 1}>
            <Accordion.Header
              className="border-b-0 p-3"
              onClick={() => setOpen(1)}
            >
              <List.Prefix>
                <Circle className="w-2 h-2" />
              </List.Prefix>
              <span className="text-base font-normal mr-auto">Camisetas</span>
            </Accordion.Header>
          </List.Item>
          <Accordion.Body className="py-1">
            <List.Root className="p-0">
              <List.Item className="py-2 px-3 w-full">
                <List.Prefix>
                  <ChevronRight className="w-3.5 h-3.5" />
                </List.Prefix>
                <span>Masculinas</span>
                <List.Suffix>
                  <Chip value="14" variant="ghost" size="sm" />
                </List.Suffix>
              </List.Item>
              <List.Item className="py-2 px-3 w-full">
                <List.Prefix>
                  <ChevronRight className="w-3.5 h-3.5" />
                </List.Prefix>
                <span>Femininas</span>
                <List.Suffix>
                  <Chip value="14" variant="ghost" size="sm" />
                </List.Suffix>
              </List.Item>
              <List.Item className="py-2 px-3 w-full">
                <List.Prefix>
                  <ChevronRight className="w-3.5 h-3.5" />
                </List.Prefix>
                <span>Uni-sex</span>
                <List.Suffix>
                  <Chip value="14" variant="ghost" size="sm" />
                </List.Suffix>
              </List.Item>
            </List.Root>
          </Accordion.Body>
        </Accordion.Root>
        <Accordion.Root
          open={open === 2}
          icon={
            <ChevronDown
              className={`mx-auto w-3.5 h-3.5 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <List.Item className="p-0" selected={open === 2}>
            <Accordion.Header
              className="border-b-0 p-3"
              onClick={() => setOpen(2)}
            >
              <List.Prefix>
                <Circle className="w-2 h-2" />
              </List.Prefix>
              <span className="text-base font-normal mr-auto">Shorts</span>
            </Accordion.Header>
          </List.Item>
          <Accordion.Body className="py-1">
            <List.Root className="p-0">
              <List.Item className="py-2 px-3 w-full">
                <List.Prefix>
                  <ChevronRight className="w-3.5 h-3.5" />
                </List.Prefix>
                <span>Masculinas</span>
                <List.Suffix>
                  <Chip value="14" variant="ghost" size="sm" />
                </List.Suffix>
              </List.Item>
              <List.Item className="py-2 px-3 w-full">
                <List.Prefix>
                  <ChevronRight className="w-3.5 h-3.5" />
                </List.Prefix>
                <span>Femininas</span>
                <List.Suffix>
                  <Chip value="14" variant="ghost" size="sm" />
                </List.Suffix>
              </List.Item>
              <List.Item className="py-2 px-3 w-full">
                <List.Prefix>
                  <ChevronRight className="w-3.5 h-3.5" />
                </List.Prefix>
                <span>Uni-sex</span>
                <List.Suffix>
                  <Chip value="14" variant="ghost" size="sm" />
                </List.Suffix>
              </List.Item>
            </List.Root>
          </Accordion.Body>
        </Accordion.Root>
      </List.Root>
    </div>
  );

  return (
    <Fragment>
      <OtherHeader title="PRODUTOS" />
      <main className="px-5 mt-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 items-center bg-white p-2 rounded-theme shadow-sm">
            <div className="w-full">
              <InputText label="Buscar..." className="w-full" />
            </div>
            <div className="hidden lg:block">
              <span className="font-light text-zinc-700">
                Mostrando 30 de 50 resultados
              </span>
            </div>
            <div className="lg:col-span-2 flex flex-col md:flex-row justify-end w-full gap-3">
              <div className="flex items-center gap-2 w-full lg:w-fit">
                <span className="font-light text-zinc-700 shrink-0 hidden lg:block">
                  Filtre por
                </span>
                <Select.Root label="Filtro" className="w-full">
                  <Select.Option>Material Tailwind HTML</Select.Option>
                  <Select.Option>Material Tailwind React</Select.Option>
                  <Select.Option>Material Tailwind Vue</Select.Option>
                  <Select.Option>Material Tailwind Angular</Select.Option>
                  <Select.Option>Material Tailwind Svelte</Select.Option>
                </Select.Root>
              </div>
              <Button
                icon={<SearchIcon className="w-3.5 h-3.5 shrink-0" />}
                className="w-full md:w-40"
              >
                Buscar
              </Button>
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-[280px_1fr_1fr_1fr] xl:grid-cols-[300px_1fr_1fr_1fr] gap-5 mt-5 lg:mt-10">
            <aside className="hidden md:block w-full bg-white rounded-theme h-fit shadow-md overflow-hidden">
              <SideBar />
            </aside>
            <div className="md:hidden">
              <Button
                color="green"
                icon={<TagsIcon className="w-3.5 h-3.5" />}
                onClick={() => setDrawer(true)}
              >
                Compre por Catetoria
              </Button>
            </div>
            <div className="col-span-3">
              <PageProductsGrid />

              <div className="flex justify-center mt-10">
                <Button
                  icon={<Plus className="w-3.5 h-3.5" />}
                  variant="outlined"
                >
                  Mostrar Mais
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        placement="left"
        overlayProps={{ className: "fixed" }}
      >
        <button
          className="absolute right-2 top-2 outline-none text-zinc-600 hover:text-zinc-700 transition-colors z-20"
          onClick={() => setDrawer(false)}
        >
          <X />
        </button>
        <div className="relative w-full h-full">
          <SideBar />
        </div>
      </Drawer>
    </Fragment>
  );
}
