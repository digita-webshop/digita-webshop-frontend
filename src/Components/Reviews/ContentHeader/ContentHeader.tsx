import { Box } from '@mui/material'
import { PTitle } from '../../../Styles/panelCommon'

const ContentHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PTitle>Reviews</PTitle>
      <Box> </Box>
    </Box>
  )
}

export default ContentHeader