import { defaultColors } from "@/styles/customTheme";
import Swal from "sweetalert2";

interface Props {
  error: any;
}

export default function getErrorMessage({ error }: Props) {
  return Swal.fire({
    title: "Erro",
    text: (error.message && error.response?.data.message) || "",
    confirmButtonColor: defaultColors.primary["500"],
    icon: "error",
  });
}
