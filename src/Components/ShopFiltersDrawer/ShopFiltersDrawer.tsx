import { Drawer } from "@mui/material";

type ShopFiltersDrawerProps = {
  displayDrawer: boolean;
  toggleDrawer: (open: boolean) => void;
};

function ShopFiltersDrawer({
  displayDrawer,
  toggleDrawer,
}: ShopFiltersDrawerProps) {
  return (
    <Drawer
      anchor="left"
      open={displayDrawer}
      onClose={() => toggleDrawer(false)}
    ></Drawer>
  );
}

export default ShopFiltersDrawer;
