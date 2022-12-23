import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const H4 = ({children, align = 'left', mb = 0}) => {
  return (
    <H4Container
      align={align}
      mb={mb}
    >
      {children}
    </H4Container>
  )
}

const H4Container = styled.h4`
  font-weight: 700;
  font-size: ${rem(24)};
  line-height: 142%;
  color: ${props => props.theme.color.black};
  ${
    props => {
      if (props.align === 'center') {
        return `
          text-align: center;
        `
      }
    }
  }
  margin-bottom: ${props => `${props.mb}px`};
`

export default H4