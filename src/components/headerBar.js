import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AppBar, Toolbar, Typography, IconButton, Button, ButtonGroup } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

export default function HeaderBar() {

    const siteData = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <div style={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="primary">
            <Toolbar>
            <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
                {siteData.site.siteMetadata.title}
            </Typography>
            <ButtonGroup variant="text" style={{ flexGrow: 1 }} color="secondary">
                <Link to="/">
                <Button color="secondary">Home</Button>
                </Link>
                <Link to="/about">
                <Button color="secondary">About</Button>
                </Link>
            </ButtonGroup>
            <IconButton color="inherit" target="_blank" href="http://www.instagram.com/john.rocha5">
                <InstagramIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" href="mailto:john.rocha5@gmail.com">
                <EmailIcon />
            </IconButton>
            </Toolbar>
        </AppBar>
    </div>
    );
}