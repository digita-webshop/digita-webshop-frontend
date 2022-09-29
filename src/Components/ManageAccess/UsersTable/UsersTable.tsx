import { DeleteForever } from "@mui/icons-material";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../../../features/user/userApi";
import { IUser } from "../../../Services/Types/user";
import {
  errorMessage,
  successMessage,
} from "../../../Services/Utils/toastMessages";
import { ErrorText, PTextField } from "../../../Styles/panelCommon";
import { cartModal, paginationStyle } from "../../../Styles/PanelProducts";
import { TCheckBox } from "../../../Styles/Reviews";
import NotFound from "../../EmptyList/NotFound";
import PanelLoading from "../../Loading/PanelLoading";
import PanelPagination from "../../PanelPagination/PanelPagination";
import TableItem from "./TableItem/TableItem";
interface Props {
  isUsersPage: boolean;
}
function UsersTable({ isUsersPage }: Props) {
  const [checked, setChecked] = useState<string[]>([]);
  const [openRemove, setOpenRemove] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const userType = isUsersPage ? "user" : "admin";

  const { data: usersData, isLoading, isError } = useGetAllUsersQuery(userType);
  const users = usersData?.data ?? [];
  console.log(usersData);

  const [deleteUser] = useDeleteUserMutation();

  let filteredUsers = users;

  if (searchValue) {
    filteredUsers = users.filter((user) =>
      user.userName
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
  }

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const handleToggleAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      let allChecked = filteredUsers.map((user) => user._id!);
      setChecked(allChecked);
    } else {
      setChecked([]);
    }
  };
  const removeUserHandler = async (id: string) => {
    try {
      await deleteUser({
        path: userType,
        id,
      }).unwrap();
      successMessage(`${userType} deleted successfully`);
    } catch (err: any) {
      errorMessage(err.data.message);
    }
  };
  const selectedUserRemoveHandler = () => {
    for (let i = 0; i < checked.length; i++) {
      removeUserHandler(checked[i]);
    }
  };
  return (
    <Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexBasis: { xs: "100%", sm: "60%" },
          }}
        >
          <TCheckBox onChange={handleToggleAll} />
          <Typography sx={{ color: "#ADB5BD", textTransform: "capitalize" }}>
            select all
          </Typography>
          {checked.length > 0 && (
            <Box
              sx={{
                cursor: "pointer",
                color: "#f03637",
              }}
              onClick={selectedUserRemoveHandler}
            >
              <DeleteForever />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "40%" },
            marginLeft: "auto",
            display: { xs: "none", sm: "block" },
          }}
        >
          <PTextField
            placeholder="Search... "
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Box>
      </Box>
      <Divider sx={{ marginY: "10px" }} />
      <Box>
        {isLoading && <PanelLoading />}
        {isError && <ErrorText>ERROR:Could not retrieve data!</ErrorText>}
        {filteredUsers?.length === 0 && !isLoading && !isError && <NotFound />}
        {users &&
          filteredUsers.map((user) => (
            <TableItem
              key={user._id!}
              user={user}
              handleToggle={handleToggle}
              checked={checked}
              setOpenRemove={setOpenRemove}
              setSelectedUser={setSelectedUser}
            />
          ))}
      </Box>
      {users && (
        <Box sx={paginationStyle}>
          <PanelPagination
            productsPerPage={usersPerPage}
            totalProducts={filteredUsers.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      )}
      <Modal
        open={openRemove}
        onClose={() => setOpenRemove(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={cartModal}>
          <DeleteForever
            sx={{ fontSize: 70, fontWeight: 100, color: "#f03637", p: 2 }}
          />
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {` Confirm You Want To Remove ${selectedUser?.userName}`}
          </Typography>
          <Box sx={{ display: "flex", gap: 3, margin: "1rem 0" }}>
            <Button
              variant="contained"
              sx={{
                p: "0.8rem 2.2rem",
                borderRadius: "4px",
                fontSize: "15px",
                height: "46px",
              }}
              onClick={() => setOpenRemove(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                removeUserHandler(selectedUser?._id!);
                setOpenRemove(false);
                setSelectedUser(null);
              }}
              variant="contained"
              sx={{
                p: "0.8rem 2.2rem",
                background: "#f03637",
                borderRadius: "4px",
                fontSize: "15px",
                height: "46px",
                "&:hover": { background: "#333" },
              }}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default UsersTable;
