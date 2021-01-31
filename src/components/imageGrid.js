import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { GridList, GridListTile, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';



const nodeURL = 'https://www.instagram.com/p';


const ImageGrid = () => {
    const {
        allInstaNode: { edges },
    } = useStaticQuery(graphql`
        {
        allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 100) {
            edges {
                node {
                    id
                    caption
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
  `);

    // Dynamically determine if mobile
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });

    const renderImages = () => {
        const images = edges.map(({ node }) => {
            const {
                id,
                caption,
                localFile: { childImageSharp },
            } = node;

            return (
                <GridListTile key={id} style={{ alignSelf:'center' }}>
                    <a target="_blank" rel="noreferrer" href={`${nodeURL}/${id}`} >
                        <Img
                            loading="lazy"
                            alt={caption || ''}
                            fluid={childImageSharp.fluid}
                        />
                    </a>
                </GridListTile>
            );
        });

        return images;
    };

    return (
        <div >
            <GridList cellHeight='auto' cols={ isMobile ? 2 : 3 } spacing={isMobile ? 2 : 10 } style={{ margin: isMobile ? '2px' : '15px' }}>
                {renderImages()}
            </GridList>
        </div>
    );
};

export default ImageGrid;
