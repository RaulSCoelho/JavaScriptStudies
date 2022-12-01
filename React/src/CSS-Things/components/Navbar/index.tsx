import React from 'react'
import { useNavigate } from 'react-router-dom'

import { CSSProperties } from 'styled-components'

import { NavbarStyle } from './styles'

export const Navbar: React.FC = () => {
  const pages = [
    { text: 'Gradient', path: 'css-things/gradient' },
    { text: 'Truncate', path: 'css-things/truncate' },
    { text: 'Resize', path: 'css-things/resize' },
    { text: 'Scrolling', path: 'css-things/scrolling' },
    { text: 'Image', path: 'css-things/image' },
    { text: 'WritingMode', path: 'css-things/writingMode' },
    { text: 'Positioning', path: 'css-things/positioning' },
    { text: 'ObjectFit', path: 'css-things' }
  ]

  return (
    <NavbarStyle>
      {pages.map(page => (
        <Page text={page.text} path={page.path} key={page.path} />
      ))}
    </NavbarStyle>
  )
}

const Page = ({ text, path }) => {
  const navigate = useNavigate()

  const style: CSSProperties = {
    fontSize: '15pt',
    padding: '5px',
    border: 0,
    borderRadius: '0.25rem',
    cursor: 'pointer',
    color: '#F5F5F5',
    backgroundColor: '#966EED',
    boxShadow: '4px 6px 5px 2px rgba(0, 0, 0, 0.2)'
  }

  return (
    <button style={style} onClick={() => navigate(path)}>
      {text}
    </button>
  )
}
