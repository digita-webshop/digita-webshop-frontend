import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import breadcrumbBg from "../../Assets/Images/breadcrumb-bg.jpg";

function BreadcrumbsCp({ title }: { title: string }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${breadcrumbBg})`,
        height: { xs: "160px", sm: "210px", md: "260px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center  ",
        backgroundSize: "cover",
      }}
    >
      <Typography
        color="white"
        variant="h3"
        textTransform={"capitalize"}
        fontWeight={600}
        mb={2}
        sx={{ fontSize: { xs: "24px", sm: "32px", md: "40px" } }}
      >
        {title}
      </Typography>
      <Breadcrumbs
        separator={
          <NavigateNext sx={{ color: "white", fontSize: "20px", margin: 0 }} />
        }
      >
        <Link
          color="#fff"
          href="/"
          underline="none"
          sx={{
            transition: "all 150ms ease-in",
            "&:hover": { color: "#f03637" },
          }}
        >
          Home{" "}
        </Link>
        <Link
          color="#fff"
          href="/shop"
          underline="none"
          sx={{
            transition: "all 150ms ease-in",
            "&:hover": { color: "#f03637" },
          }}
        >
          Products
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

export default BreadcrumbsCp;
