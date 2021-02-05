import * as React from "react"
import HeaderBar from "../components/headerBar"
import { Grid, Typography, Paper, Link, Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: 'auto'
    },
}));

export default function AboutPage() {

    const classes = useStyles();

    return (
        <div style={{ flexGrow: 1 }}>
            <HeaderBar />
            <Paper style={{ maxWidth:'700px', margin:'auto', marginTop:'20px', padding:'20px' }}>
                <Avatar src="/images/me.jpeg" className={classes.large}/>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <Typography style={{padding:'10px'}}>
                            If you're reading this, congrats because I literally just started this website! Right now it's just a means of showing off my weekly
                            baking to those who don't look at Instagram. In the future I might store recipes here or maybe even use it as a shop front. Feel free to contact
                            me via email or Instagram.
                        </Typography>
                        <Typography variant="caption" display="block" style={{padding:'10px'}}>
                            Also, don't pay too much attention to the design just yet. My actual job is being a software engineer, but I haven't created a website from scratch in a long long time. 
                            If you're interested in the code behind this, I keep it in my public GitHub account:
                            <Link href="https://github.com/jrocha2/shake-and-bake" target="_blank" rel="noreferrer" style={{ marginLeft: '2px'}}>
                                jrocha2
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}