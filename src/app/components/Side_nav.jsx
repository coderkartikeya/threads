
import main from '../styles/side_nav.module.css';
import { Box } from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const Side_nav = () => {
    


  return (

    <Box sx={{
        backgroundColor:'black',
        boxShadow:'3px 4px 7px white',
        
        position: 'fixed',
        margin:{
            xs:'0px',
            sm:'0px',
            lg:'10px'
        },
        marginTop:{
            xs:'85vh',
            sm:'93vh',
        },
        

        height: {
            xs:'20vh',
            lg:'100vw'
        },
        width:{
            xs:'100vw',
            lg:'13vw'
        },
        borderRadius:{
            lg:'1em'
        },
        opacity:{
            xs:1,
            lg:'0.8'
        },
        display:'flex',
        flexDirection:{
            xs:'row',
            lg:'column'
        },
        textDecoration:'none',
        
    }}>
    <Link href={'/main'}>
        <div className={main.side_icon}>
        <HomeIcon sx={{
            color:'white',
            textDecoration:'none',
            fontSize:{
                xs:'35px',
                lg:'35px'
            },
            p:'5px',
            textDecoration:'none',
        

        }}/>
        <h1 className={main.h1_side}>Home</h1>
        
        </div>
    </Link>

    <Link href={'/search'}>
        <div className={main.side_icon}>
        <SearchIcon sx={{
            color:'white',
            textDecoration:'none',
            fontSize:{
                xs:'35px',
                lg:'35px'
            },
            p:'5px'
        

        }}/>
        <h1 className={main.h1_side}>Search</h1>
        
        </div>
    </Link>

    <Link href={'/add'} style={{textDecoration:"none"}} > 
        <div className={main.side_icon}>
        <EditNoteIcon sx={{
            color:'white',
            textDecoration:'none',
            fontSize:{
                xs:'35px',
                lg:'35px'
            },
            p:'5px'
        

        }}/>
        <h1 className={main.h1_side}>Thread</h1>
        
        </div>
    </Link>

    <Link href={'/activity'} >
        <div className={main.side_icon}>
        <FavoriteIcon sx={{
            color:'white',
            textDecoration:'none',
            fontSize:{
                xs:'35px',
                lg:'35px'
            },
            p:'5px'
        

        }}/>
        <h1 className={main.h1_side}>Activity</h1>
        
        </div>
    </Link>

    <Link href={'/profile'} style={{textDecoration:"none"}} >
        <div className={main.side_icon}>
        <PersonIcon sx={{
            color:'white',
            textDecoration:'none',
            fontSize:{
                xs:'35px',
                lg:'35px'
            },
            p:'5px'
        

        }}/>
        <h1 className={main.h1_side}>Profile</h1>
        
        </div>
    </Link>
    

    </Box>
  )
}

export default Side_nav