import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';



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
                        />
                    </a>
                </GridListTile>
            );
        });

        return images;
    };

    return (
        <div >
            <GridList cellHeight='auto' cols={2} spacing={3} style={{ margin: '5px' }}>
                {renderImages()}
            </GridList>
        </div>
    );
};

export default ImageGrid;
