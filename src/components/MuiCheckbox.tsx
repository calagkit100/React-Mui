import {
    Box,
    FormControlLabel,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText
}
    from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    const [skills, setSkills] = useState<string[]>([])
    console.log({ skills });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter(skills => skills != event.target.value))
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel label='I accept terms and conditions'
                    control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='Html'
                            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />} />
                        <FormControlLabel
                            label='CSS'
                            value='css'
                            control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />} />
                        <FormControlLabel
                            label='JavaScript'
                            value='javascript'
                            control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />} />
                    </FormGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}
