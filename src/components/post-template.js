import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

export default function Post({data}) {

    console.log(data)

    const { markdownRemark: post } = data;

    return (
        <section className="post-template">

            <Helmet title={`YeastyBoys | ${post.frontmatter.title}`}/>

            <article className="post-template__container">
                <h1 className="post-template__title text-serif">{post.frontmatter.title}</h1>
                <p className="post-template__subtitle">
                    <span className="post-template__subtitle-author">
                        {post.frontmatter.author}
                    </span>
                    <span className="post-template__subtitle-date">
                        {post.frontmatter.date}
                    </span>
                </p>
                <div className="post-template__content" 
                    dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>

        </section>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            id
            frontmatter {
                path
                date(formatString: "MMMM DD, YYYY")
                title
                author
            }
        }
    }
`
;