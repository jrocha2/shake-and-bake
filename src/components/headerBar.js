import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { AppBar, Toolbar, Typography, IconButton, Button, ButtonGroup } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

export default function HeaderBar() {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        email
                        instagram_username
                    }
                }
            }
        `
    );

    return (
            <AppBar position="sticky" color="primary">
                <Toolbar>
                <Typography variant="h6" noWrap style={{ flexGrow: .95 }}>
                    {data.site.siteMetadata.title}
                </Typography>
                <ButtonGroup variant="text" style={{ flexGrow: 1 }} color="secondary">
                    <Link to="/">
                    <Button color="secondary">Home</Button>
                    </Link>
                    <Link to="/about">
                    <Button color="secondary">About</Button>
                    </Link>
                </ButtonGroup>
                <IconButton color="inherit" target="_blank" href={"http://www.instagram.com/" + data.site.siteMetadata.instagram_username}>
                    <InstagramIcon />
                </IconButton>
                <IconButton edge="end" color="inherit" href={"mailto:" + data.site.siteMetadata.email}>
                    <EmailIcon />
                </IconButton>
                </Toolbar>
            </AppBar>
    );
}