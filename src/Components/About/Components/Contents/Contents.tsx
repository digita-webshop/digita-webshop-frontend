import { Box, Typography } from "@mui/material";

const titleStyle = {
  padding: "1rem 0",
  fontWeight: "600",
  color: "#333",
  fontSize: "20px",
};

const Contents = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: "35px",
            fontWeight: "700",
            color: "#333",
            margin: "3rem 0 2rem 0",
          }}
        >
          Find Out More About Butterfly's Birth History And Historic Mission
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="body1" component="p" sx={titleStyle}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusant doloremque laudantium, aperiam arm eaquen ipsa quae inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", fontSize: "16px" }}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt. Et harum quidem rerum
          facilis est et expedita distinctio. Nam et libero tempore, cum soluta
          nobis est eligendi optio cumque nihil impedit quond minus id quod
          maxime placeat facere.possimus. Et harum quidem rerum omnis voluptas
          assumenda est, omnis dolor repellendus.
        </Typography>
        <Typography variant="body1" component="p" sx={titleStyle}>
          Our Mission
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", fontSize: "16px" }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia day deserunt mollit anim id est laborum. Sed et ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium an
          doloremque laudantium, totam rem aperia quae illo inventore. Veritatis
          quasi ccusanti architecto beatae vitae dicta sunt explicabo. On the
          other hand, we denounce with righteous indignation and dislike men who
          are so beguiled and demoralized by the charms of pleasure of the
          moment, so blinded by desire cannot foresee the pain.
        </Typography>
        <Typography variant="body1" component="p" sx={titleStyle}>
          Our Vision
        </Typography>
        <Typography variant="body2" sx={{ color: "#777", fontSize: "16px" }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          products accusantium an doloremque laudantium, totam rem an aperiam,
          ant eaque ipsa quae ab illo inventore veritati quasi architecto beatae
          vitae dicta sunt give you everythings explicabo. But I must explain to
          you how all this mistaken of denouncing pleasure and praising pain was
          born and I will give you a complete account of the system, and expound
          the actual teachings of the great explorer of the truth human
          happiness.
        </Typography>
      </Box>
    </>
  );
};

export default Contents;
