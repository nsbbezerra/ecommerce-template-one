"use client";

import {
  Button,
  Footer,
  InputText,
  OtherHeader,
  ProductsGrid,
} from "@/components";
import { InfinityIcon, Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

export default function ProductPage() {
  return (
    <Fragment>
      <OtherHeader title="DETALHES DO PRODUTO" />
      <main className="mt-16 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative overflow-hidden rounded-theme shadow-lg h-fit max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
                className="w-full object-cover"
                alt="Produto alt..."
                width={600}
                height={600}
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <strong className="text-2xl">Apple AirPods</strong>
              <span className="text-lg">R$ 190,00</span>
              <span className="text-zinc-600">
                With plenty of talk and listen time, voice-activated Siri
                access, and an available wireless charging case.
              </span>

              <div className="mt-4">
                <strong>Opções</strong>
                <div className="flex gap-3 flex-wrap mt-2">
                  <button
                    className="w-12 h-12 border rounded-full flex justify-center items-center hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:text-white disabled:pointer-events-none"
                    disabled
                  >
                    34
                  </button>
                  <button className="w-12 h-12 border rounded-full flex justify-center items-center hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:text-white disabled:pointer-events-none bg-blue-500 text-white">
                    36
                  </button>
                  <button className="w-12 h-12 border rounded-full flex justify-center items-center hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:text-white disabled:pointer-events-none">
                    38
                  </button>
                  <button className="w-12 h-12 border rounded-full flex justify-center items-center hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:text-white disabled:pointer-events-none">
                    40
                  </button>
                  <button className="w-12 h-12 border rounded-full flex justify-center items-center hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:text-white disabled:pointer-events-none">
                    42
                  </button>
                  <button className="w-12 h-12 border rounded-full flex justify-center items-center hover:bg-zinc-200 transition-colors disabled:bg-zinc-300 disabled:text-white disabled:pointer-events-none">
                    XXL
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mt-4">
                <div className="border rounded-theme flex items-center w-full justify-between">
                  <button className="w-10 h-10 flex justify-center items-center">
                    <Minus className="w-4 h-4 text-zinc-600" />
                  </button>
                  <span className="block text-center w-10">1</span>
                  <button className="w-10 h-10 flex justify-center items-center">
                    <Plus className="w-4 h-4 text-zinc-600" />
                  </button>
                </div>

                <Button
                  fullWidth
                  icon={<ShoppingCart className="w-3.5 h-3.5 shrink-0" />}
                  className="col-span-2"
                >
                  Adicionar ao Carrinho
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center mt-4">
                <InputText label="Digite seu CEP" />
                <Button className="w-full" color="green">
                  Calcular Frete
                </Button>
              </div>
            </div>
          </div>

          <section className="mt-10">
            <div className="flex flex-col items-center gap-2 text-center mb-5">
              <strong className="leading-none text-3xl">
                Descrição do Produto
              </strong>
              <InfinityIcon />
            </div>

            <div className="mt-5 text-zinc-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
          </section>

          <section className="mt-16">
            <div className="flex flex-col items-center gap-2 text-center mb-5">
              <strong className="leading-none text-3xl">
                Produtos Relacionados
              </strong>
              <InfinityIcon />
            </div>

            <ProductsGrid />
          </section>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
