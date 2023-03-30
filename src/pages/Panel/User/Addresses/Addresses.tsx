import { Addresses } from "components/Settings";
import { useAppSelector } from "redux/store";

function AddressesPage() {
  const { user } = useAppSelector((state) => state.reducer.auth);

  return <Addresses user={user!} />;
}

export default AddressesPage;
