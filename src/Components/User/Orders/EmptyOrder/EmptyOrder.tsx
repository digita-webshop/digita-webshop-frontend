import { Box, Typography } from '@mui/material'
import { EmptyWishlistWrapper } from '../../../../Styles/EmptyList'

const EmptyOrder = () => {
  return (
    <EmptyWishlistWrapper>
      <Box
        component="img"
        src="https://www.digikala.com/statics/img/svg/profile/order-empty.svg"
        alt="empty"
        className="itemImg"
      />
      <Typography sx={{ fontWeight: "400", fontSize: "17px" }}>
        You don't have any orders
      </Typography>
    </EmptyWishlistWrapper>
  )
}

export default EmptyOrder