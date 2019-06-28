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
        <footer>
            <div className={footerStyles.footer}>
            <span className={footerStyles.footerContent}>Created by {data.site.siteMetadata.author}, © 2019</span>
            <br />
            <span className={footerStyles.footerContent}>Made with &#10084; in India Chennai, Proudly hosted on Netlify </span>
            </div>
        </footer>
    )
}

export default Footer