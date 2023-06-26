import { appConfigs } from "@/configs";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Banners() {
  return (
    <Carousel autoplay>
      <div className="w-full rounded-theme overflow-hidden border aspect-[16/6]">
        <Image
          alt={`${appConfigs.companyName} banner`}
          src={
            "https://img.freepik.com/vetores-premium/servico-de-entrega-rapida-por-scooter-no-celular-pedido-on-line-ecommerce-smart-logistic-concept-para-banner-do-site-e-site-movel-3d-perspective-vector-illustration_473922-151.jpg?w=2000"
          }
          width={2000}
          height={800}
        />
      </div>
      <div className="w-full rounded-theme overflow-hidden border aspect-[16/6]">
        <Image
          alt={`${appConfigs.companyName} banner`}
          src={
            "https://img.freepik.com/psd-gratuitas/modelo-de-banner-de-venda_24972-824.jpg?w=2000"
          }
          width={2000}
          height={800}
        />
      </div>
      <div className="w-full rounded-theme overflow-hidden border aspect-[16/6]">
        <Image
          alt={`${appConfigs.companyName} banner`}
          src={
            "https://img.freepik.com/vetores-premium/compras-online-no-site_145865-129.jpg?w=2000"
          }
          width={2000}
          height={800}
        />
      </div>
    </Carousel>
  );
}
