import SideBar from "../components/NavBar";
import { useFav } from "../hooks/useFav";

export default function People() {
  const { favorites } = useFav();
  console.log(favorites);
  return (
    <>
      <SideBar />
    </>
  );
}
