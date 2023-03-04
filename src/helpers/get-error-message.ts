import { defaultColors } from "@/styles/customTheme";
import Swal from "sweetalert2";

interface Props {
  error: any;
}

export default function getErrorMessage({ error }: Props) {
  return Swal.fire({
    title: "Erro",
    text:
      error.response.data.message ||
      error.message ||
      "Um erro desconhecido ocorreu durante o processo!",
    confirmButtonColor: defaultColors.primary["500"],
    icon: "error",
  });
}
