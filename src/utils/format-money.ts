export default function formatMoney(price: string) {
  return Number(price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
