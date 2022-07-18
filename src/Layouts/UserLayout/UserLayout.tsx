import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <>sidebar</>
      <>
        {/* here is where routes go */}
        <Outlet />
      </>
    </>
  );
}

export default UserLayout;
