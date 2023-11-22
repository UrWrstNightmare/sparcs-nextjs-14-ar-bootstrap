"use client"

import React from "react"
import styled from "styled-components"

const ExampleComponentInner = styled.div`
  color: ${({ theme }) => theme.colors.RED};
`

const ExampleComponent: React.FC<React.PropsWithChildren> = (props) => {
  return <ExampleComponentInner>{props.children}</ExampleComponentInner>
}

export default ExampleComponent
