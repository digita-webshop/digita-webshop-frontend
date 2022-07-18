import { Box, Typography } from "@mui/material";
import { contentStyle } from "../../../../Styles/About";
const Contents = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={contentStyle}>
          <Typography variant='body2' sx={{ color: "#777", fontSize: "16px", mb: '20px'}}>
            Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed
            pulvinar ex eros vel orci. Sed tempor placerat tristique. Ut
            tristique leo sit amet nisi blandit rutrum. Nunc hendrerit a diam
            vel ultricies. Morbi gravida, dui eu efficitur aliquet, ante nisl
            mollis ex, eget venenatis magna urna non ex. Suspendisse et orci
            viverra lacus consectetur posuere. Curabitur bibendum nisi at sapien
            viverra ultricies. Praesent commodo volutpat leo, ut accumsan ipsum
            egestas in. Integer elementum ligula vel cursus bibendum. Nulla nibh
            ante, iaculis at consequat id, euismod a sem. Fusce et sapien
            cursus, placerat dui non, rhoncus diam. Praesent ac consectetur dui.
          </Typography>
          <Typography variant='body2' sx={{ color: "#777", fontSize: "16px", mb: '20px' }}>
            Phasellus ac sem eu mauris sodales tristique sed non ligula. Aenean
            in mauris ac libero condimentum vulputate quis ut sapien. Phasellus
            euismod mi eget interdum pellentesque. Maecenas molestie vitae risus
            vitae volutpat. Maecenas a velit rutrum, auctor quam et, commodo
            est. Cras leo sem, maximus non ex ac, porttitor egestas dolor. Fusce
            ut metus sodales, pellentesque diam sed, sodales massa. Nulla
            facilisi. Sed sed quam eget metus interdum condimentum non et odio.
            Nam magna tortor, vulputate in venenatis et, porta ac orci. Sed
            venenatis scelerisque scelerisque. Nullam ut neque sed libero
            feugiat fermentum et non odio. Aenean et justo elementum, volutpat
            arcu vitae, tincidunt lorem
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Contents;
