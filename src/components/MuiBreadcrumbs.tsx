import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'


export const MuiBreadcrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label='breadcrumbs'
                separator={<NavigateNextIcon fontSize='small' />}
                maxItems={2}
                itemsBeforeCollapse={2}
            >
                <Link href='#' underline='hover'>Home</Link>
                <Link href='#' underline='hover'>Catalog</Link>
                <Link href='#' underline='hover'>Accesories</Link>
                <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}
