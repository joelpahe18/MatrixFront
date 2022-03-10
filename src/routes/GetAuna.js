import { useParams } from "react-router-dom";
import { setToken } from "../utils/token";

export default function GetAuna({ history }) {
  const { acces_token, ruta } = useParams();
  
  // Multi company
  // const { acces_token, ruta, wemp_pmla } = useParams();
  // console.log(wemp_pmla);
  setToken(acces_token);

  window.location.replace(`/${ruta}`);
}
