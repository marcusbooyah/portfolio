import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`

const PageWrapper = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default PageWrapper
