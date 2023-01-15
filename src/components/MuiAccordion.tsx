import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'





export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }


    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
            >
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius dicta quisquam. Sunt pariatur vero iusto ex corporis, porro eum quibusdam sapiente nam! Quis, corrupti asperiores suscipit aliquam alias laboriosam.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
            >
                <AccordionSummary
                    id='panel2-header'
                    aria-controls='panel2-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius dicta quisquam. Sunt pariatur vero iusto ex corporis, porro eum quibusdam sapiente nam! Quis, corrupti asperiores suscipit aliquam alias laboriosam.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary
                    id='panel3-header'
                    aria-controls='panel3-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius dicta quisquam. Sunt pariatur vero iusto ex corporis, porro eum quibusdam sapiente nam! Quis, corrupti asperiores suscipit aliquam alias laboriosam.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
