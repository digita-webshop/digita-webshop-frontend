import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import breadcrumbBg from '../../Assets/Images/breadcrumb-bg.jpg'
import { Link as RouterLink } from 'react-router-dom'

function CustomBreadcrumbs({ title }: { title: string }) {
  const { pathname } = useLocation()
  const pathnames = pathname.split('/').filter((x) => x)

  return (
    <Box
      sx={{
        backgroundImage: `url(${breadcrumbBg})`,
        height: { xs: '160px', sm: '210px', md: '260px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center  ',
        backgroundSize: 'cover',
      }}
    >
      <Typography
        color="white"
        variant="h3"
        textTransform={'capitalize'}
        fontWeight={600}
        mb={2}
        sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }}
      >
        {title}
      </Typography>
      <Breadcrumbs
        separator={
          <NavigateNext sx={{ color: 'white', fontSize: '20px', margin: 0 }} />
        }
      >
        <Link
          component={RouterLink}
          to="/"
          color="#fff"
          underline="none"
          sx={{
            transition: 'all 150ms ease-in',
            '&:hover': { color: '#f03637' },
          }}
        >
          Home
        </Link>
        {pathnames.map((path, index) => {
          const route = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const name = path.replace(/-/g, ' ')

          return isLast ? (
            <Typography sx={{ color: '#fff', textTransform: 'capitalize' }}>
              {name}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              to={route}
              color="#fff"
              underline="none"
              textTransform={'capitalize'}
              sx={{
                transition: 'all 150ms ease-in',
                '&:hover': { color: '#f03637' },
              }}
            >
              {name}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default CustomBreadcrumbs
