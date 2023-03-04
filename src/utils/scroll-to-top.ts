export default function scrollToTop() {
  const element = document.getElementById("scroller");
  element?.scrollTo({ top: 0, behavior: "smooth" });
}
