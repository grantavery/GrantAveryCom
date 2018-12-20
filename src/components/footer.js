import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <div
    style={{
      background: 'rebeccapurple',
                color: 'white',
            textDecoration: 'none',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1.0875rem',
      }}
    >
      <div style={{ margin: 0 }}>
        <Link title="Grant Avery" rel="home"
          to="/"
          style={{
            color: 'white',
          }}
        >Grant Avery
        </Link>&nbsp;&middot; learnin&#039; stuff
      </div>
    </div>
  </div>
)

export default Footer
