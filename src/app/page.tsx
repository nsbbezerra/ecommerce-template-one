"use client";

import {
  Banners,
  Button,
  Footer,
  IndexHeader,
  ProductsGrid,
} from "@/components";
import { ArrowUpRight, InfinityIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <IndexHeader />
      <main className="px-5">
        <div className="container mx-auto max-w-6xl mt-8">
          <Banners />

          <section className="mt-16">
            <div className="flex flex-col items-center gap-2 text-center mb-5">
              <strong className="leading-none text-3xl">
                Produtos Recentes
              </strong>
              <span className="font-light">
                Veja o que há de novo em nossa loja!
              </span>
              <InfinityIcon />
            </div>

            <ProductsGrid />

            <div className="mt-10 flex justify-center">
              <Link href={"/produtos"}>
                <Button variant="outlined">
                  Veja mais produtos <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <hr className="my-10" />

          <section>
            <div className="flex flex-col items-center gap-2 text-center mb-5">
              <strong className="leading-none text-3xl">
                Produtos Mais Vendidos
              </strong>
              <span className="font-light">
                Confira os nossos melhores produtos!
              </span>
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
