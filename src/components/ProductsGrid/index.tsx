import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Button from "../Button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <Card className="w-full shadow-lg">
        <CardHeader floated={false}>
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </CardHeader>
        <CardBody className="h-48 max-h-44 flex flex-col gap-2">
          <span className="text-zinc-900">Apple AirPods</span>
          <span className="text-sm">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>
          <span className="text-zinc-900">$95.00</span>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5" />}
          >
            Comprar
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full shadow-lg">
        <CardHeader floated={false}>
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </CardHeader>
        <CardBody className="h-48 max-h-44 flex flex-col gap-2">
          <span className="text-zinc-900">Apple AirPods</span>
          <span className="text-sm">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>
          <span className="text-zinc-900">$95.00</span>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5" />}
          >
            Comprar
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full shadow-lg">
        <CardHeader floated={false}>
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </CardHeader>
        <CardBody className="h-48 max-h-44 flex flex-col gap-2">
          <span className="text-zinc-900">Apple AirPods</span>
          <span className="text-sm">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>
          <span className="text-zinc-900">$95.00</span>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5" />}
          >
            Comprar
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full shadow-lg">
        <CardHeader floated={false}>
          <Image
            src="https://img.freepik.com/psd-premium/ola-venda-de-produto-de-outono-midia-social-e-post-design-do-instagram_407398-461.jpg?w=2000"
            className="w-full object-cover"
            alt="Produto alt..."
            width={600}
            height={600}
          />
        </CardHeader>
        <CardBody className="h-48 max-h-44 flex flex-col gap-2">
          <span className="text-zinc-900">Apple AirPods</span>
          <span className="text-sm">
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </span>
          <span className="text-zinc-900">$95.00</span>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            fullWidth={true}
            icon={<ShoppingCart className="w-3.5 h-3.5" />}
          >
            Comprar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
