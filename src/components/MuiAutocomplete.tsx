import { Stack, Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null)
    console.log({ value });

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
            />
        </Stack>
    )
}
