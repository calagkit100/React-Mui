import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/lab'
import { useState } from 'react'



export const MuiDateRangePicker = () => {
    const [value, setValue] = useState < DateRange<Date>([null, null])
    return (
        <Box width='500px'>MuiDateRangePicker</Box>
    )
}
