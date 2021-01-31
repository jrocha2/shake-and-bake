import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import ImageGrid from '../components/imageGrid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {

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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" target="_blank" href="http://www.instagram.com/john.rocha5">
            <InstagramIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {siteData.site.siteMetadata.title}
          </Typography>
          <IconButton edge="end" color="inherit" href="mailto:john.rocha5@gmail.com">
            <EmailIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ImageGrid />
    </div>
  );
}