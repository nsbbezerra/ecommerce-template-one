import Button from "../Button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
      <div className="rounded-theme overflow-hidden bg-white shadow-lg w-full h-fit">
        <div className="relative w-full">
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </div>

        <div className="p-3 flex flex-col gap-2 flex-1">
          <strong>Apple AirPods</strong>

          <span className="text-sm text-zinc-700">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>

          <span>R$ 190,00</span>
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />}
          >
            Comprar
          </Button>
        </div>
      </div>
      <div className="rounded-theme overflow-hidden bg-white shadow-lg w-full h-fit">
        <div className="relative w-full">
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </div>

        <div className="p-3 flex flex-col gap-2 flex-1">
          <strong>Apple AirPods</strong>

          <span className="text-sm text-zinc-700">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>

          <span>R$ 190,00</span>
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />}
          >
            Comprar
          </Button>
        </div>
      </div>
      <div className="rounded-theme overflow-hidden bg-white shadow-lg w-full h-fit">
        <div className="relative w-full">
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </div>

        <div className="p-3 flex flex-col gap-2 flex-1">
          <strong>Apple AirPods</strong>

          <span className="text-sm text-zinc-700">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>

          <span>R$ 190,00</span>
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />}
          >
            Comprar
          </Button>
        </div>
      </div>
      <div className="rounded-theme overflow-hidden bg-white shadow-lg w-full h-fit">
        <div className="relative w-full">
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </div>

        <div className="p-3 flex flex-col gap-2 flex-1">
          <strong>Apple AirPods</strong>

          <span className="text-sm text-zinc-700">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>

          <span>R$ 190,00</span>
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5 flex-shrink-0" />}
          >
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
