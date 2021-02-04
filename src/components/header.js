import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1
    },
    homeButton: {
        marginRight:theme.spacing(1)
    },
    title:{
        flexGrow:1
    },
    appBar:{
        background: "#F0E68C",
        color: "black"
    }
}))
export default function Show_Header()
{
    const classes=useStyles();

    return(
        <AppBar position="fixed" className={classes.appBar}>
            <Container fixed>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label="home" className={classes.homeButton}>
                        <WbSunnyIcon/>
                    </IconButton>
                    <IconButton edge='start' color='inherit' aria-label="home" className={classes.homeButton}>
                        <HomeIcon/>
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>Servarium</Typography>
                    <Box mr={3}>
                        <Button color='inherit' variant="outlined">Log In</Button>
                    </Box>
                    <Button color='secondary' variant="contained">Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}