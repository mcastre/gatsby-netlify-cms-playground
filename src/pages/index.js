import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import { injectGlobal } from 'emotion';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    background: #f3f3f3;
    margin: 0;
  }
`;

const StyledContextWrapper = styled.main`
  padding: 1rem 2rem;
  position: relative;
  z-index: 1;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 1rem;
    padding: 1rem;
    h1 {
      text-align: center;
    }
  }
`;

const ContentWrapper = ({children}) => (
  <StyledContextWrapper>
    <h1>Latest Ideas</h1>
    {children}
  </StyledContextWrapper>
);

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <ContentWrapper>
          {posts
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2rem', borderRadius: '1rem' }}
                key={post.id}>
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                    </Link>
                </p>
              </div>
            ))}
        </ContentWrapper>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
