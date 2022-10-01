import AddressPage from "../../../../Components/Settings/Addresses/Addresses";
import { useAppSelector } from "../../../../store";

function Addresses() {
  const { user } = useAppSelector((state) => state.reducer.auth);

  return <AddressPage user={user!} />;
}

export default Addresses;
