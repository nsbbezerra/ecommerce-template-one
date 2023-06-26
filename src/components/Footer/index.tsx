import { appConfigs } from "@/configs";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="bg-blue-950 px-5">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          <div className="w-48">
            <Image
              src={"logo.svg"}
              alt={`${appConfigs.companyName} logo`}
              width={512}
              height={139}
            />
          </div>
          <div className="w-full">
            <strong className="text-white text-xl">Categorias</strong>

            <div className="flex flex-col gap-2 mt-4">
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Camisetas
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Shorts
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Blusas
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Acessórios
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Mais categorias...
              </a>
            </div>
          </div>

          <div className="w-full">
            <strong className="text-white text-xl">Links Úteis</strong>

            <div className="flex flex-col gap-2 mt-4">
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Sobre Nós
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Compre Por
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Fale Conosco
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer">
                Termos e Condições
              </a>
            </div>
          </div>

          <div className="w-full">
            <strong className="text-white text-xl">Contato</strong>

            <div className="flex flex-col gap-3 mt-4">
              <span className="text-zinc-400 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                {appConfigs.companyAddress}
              </span>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" /> {appConfigs.companyPhone}
              </a>
              <a className="text-zinc-400 text-sm hover:underline cursor-pointer flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" /> {appConfigs.companyEmail}
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl border-t border-t-zinc-800 py-5 text-white text-center">
          © {appConfigs.companyName} - {new Date().getFullYear().toString()}
        </div>
      </div>
    </footer>
  );
}
