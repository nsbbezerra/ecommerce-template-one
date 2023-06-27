import { appConfigs } from "@/configs";
import "./globals.css";
import { defaultFont } from "@/configs/fonts";

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
      <body className={`${defaultFont.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
