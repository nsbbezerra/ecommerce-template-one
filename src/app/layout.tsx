import { appConfigs } from "@/configs";
import "./globals.css";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: `${appConfigs.companyName} | ${appConfigs.companyDescription}`,
  description: appConfigs.companyDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${karla.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
