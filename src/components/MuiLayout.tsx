import { Box, Stack, Divider, Grid } from '@mui/material'







export const MuiLayout = () => {
    return (
        <>
            <Stack
                sx={{ border: '1px solid' }}
                direction='column-reverse'
                spacing={2}
                divider={<Divider orientation='vertical' flexItem />}
            >
                <Box
                    // component='span' 
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        },
                    }}
                >
                    CODEEVO
                </Box>
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='success.light'
                    p={2}
                    color='white'
                >
                    BOX2
                </Box>
            </Stack>
            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
