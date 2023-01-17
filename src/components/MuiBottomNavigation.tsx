import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from "react"
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0)


    return (
        <BottomNavigation sx={{
            width: '100%',
            position: 'absolute',

            top: 0
        }}
            value={value}
            onChange={(event, newValue) => { setValue(newValue) }}
            showLabels
        >
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
            <BottomNavigationAction label='Watch' icon={<PersonalVideoIcon />} />
            <BottomNavigationAction label='Marketplace' icon={<StorefrontIcon />} />
            <BottomNavigationAction label='Profile' icon={<PersonIcon />} />

        </BottomNavigation>
    )
}
