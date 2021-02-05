import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image/withIEPolyfill";
import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { excludeImages } from '../config/image-config';

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
                            style={{ 
                                objectFit: 'cover',
                                objectPosition: '50% 50%',
                                width: '100%',
                                height: '100%',
                                maxHeight: '25rem'
                            }}
                        />
                    </a>
                </GridListTile>
            );
        });

        // Filter out any in the exclude list (could probably do this better)
        return images.filter(gridListTile => !excludeImages.includes(gridListTile.key));
    };

    return (
        <div >
            <GridList cellHeight='auto' cols={3} spacing={3} style={{ margin: '5px' }}>
                {renderImages()}
            </GridList>
        </div>
    );
};

export default ImageGrid;
