import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <span>
            <span>Created by {data.site.siteMetadata.author}, © 2019</span>
            <span className={footerStyles.footerContent}>Made with &#10084; in India Chennai, Proudly hosted on Netlify </span>
            </span>
        </footer>
    )
}

export default Footer