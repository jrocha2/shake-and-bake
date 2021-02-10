import * as React from "react"
import HeaderBar from "../components/headerBar"
import { Grid, Typography, Paper, Avatar } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import GatsbyIcon from "!svg-react-loader!../../static/svg/gatsby.svg?name=GatsbyIcon"
import GithubIcon from "!svg-react-loader!../../static/svg/github.svg?name=GithubIcon"
import GraphqlIcon from "!svg-react-loader!../../static/svg/graphql.svg?name=GraphqlIcon"
import MaterialUiIcon from "!svg-react-loader!../../static/svg/material-ui.svg?name=MaterialUiIcon"
import NetlifyIcon from "!svg-react-loader!../../static/svg/netlify.svg?name=NetlifyIcon"
import ReactIcon from "!svg-react-loader!../../static/svg/react.svg?name=ReactIcon"


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: 'auto'
    },
    text: {
        padding: '10px',
        marginBottom: '10px'
    }
}));

export default function AboutPage() {

    const classes = useStyles();

    const builtWithItems = [
        { url: "https://github.com/jrocha2/shake-and-bake", icon: GithubIcon },
        { url: "https://www.gatsbyjs.org/", icon: GatsbyIcon },
        { url: "http://graphql.org/", icon: GraphqlIcon },
        { url: "https://reactjs.org/", icon: ReactIcon },
        { url: "https://material-ui.com/", icon: MaterialUiIcon },
        { url: "https://www.netlify.com/", icon: NetlifyIcon },
    ];

    return (
        <div style={{ flexGrow: 1 }}>
            <HeaderBar />
            <Paper style={{ maxWidth:'700px', margin:'auto', marginTop:'20px', padding:'20px' }}>
                <Avatar src="/images/me.jpeg" className={classes.large}/>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <Typography className={classes.text}>
                            If you're reading this, congrats because I literally just started this website! Right now it's just a way to show off my weekly
                            baking to those who don't look at Instagram. In the future I might store recipes here or maybe even use it as a shop front. Cooking and baking consumes 
                            a lot of my free time, so the least I can do is document it for myself somewhere!
                        </Typography>
                        <Typography variant="h6"> Cut Copy Pastry? </Typography>
                        <Typography variant="body1" className={classes.text}>
                            I majored in computer science and am a software engineer by day. Supposedly my job is a lot of copy-pasting from Stack Overflow? If I had my way, it'd be all pastry though.
                        </Typography>
                        <Typography variant="h6"> Taking Requests? </Typography>
                        <Typography variant="body1" className={classes.text}>
                            I tell myself baking is just a hobby. That being said, I'll occasionally whip something up at a price if my schedule is free. If you're in the Houston area, it doesn't hurt to ask!
                        </Typography>
                        <Typography variant="h6"> Contact Me </Typography>
                        <Typography variant="body1" style={{ padding: '10px', marginBottom: '60px' }}>
                            Use the links up there in the top bar! Your best bets are email and Instagram.
                        </Typography>
                        <Typography variant="subtitle2"> This website sucks... </Typography>
                        <Typography variant="caption" display="block" className={classes.text}>
                            Ha! Fair enough. I'm no design major, but figured I'd put my computer skills to work making this website from scratch. 
                            If you're interested in the code behind this, checkout the below links and technologies used. The GitHub icon will
                            also take you straight to my public code if interested.
                        </Typography>
                        <Typography variant="caption" style={{ display: "flex", justifyContent: "center", marginBottom: '5px' }}> Built with: </Typography>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            {builtWithItems.map(item => {
                                const SvgIcon = item.icon;
                                return (
                                    <a key={item.url} href={item.url} target="_blank" rel="noopener noreferrer" style={{ padding: '10px'}}>
                                        <SvgIcon style={{ height: '22px', width: '22px'}}/>
                                    </a>
                                );
                            })}
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}