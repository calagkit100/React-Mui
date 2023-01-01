import { Typography } from "@mui/material"

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>
                h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>

            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure repellat itaque voluptatum modi placeat dignissimos voluptas beatae! Maiores nemo minima, temporibus id accusamus sint? Assumenda labore fugit cupiditate?</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt autem debitis incidunt. In veniam voluptatum dolor molestiae, saepe culpa beatae odit modi minima. Ipsa architecto fugiat dignissimos minima fuga?</Typography>
        </div>
    )
}
