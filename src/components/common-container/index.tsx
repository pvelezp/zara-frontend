import React from "react"
import styled from "styled-components"

const Container = styled.div`
    padding: 1rem;
    box-shadow: rgba(149, 157, 165, 0.23) 0px 8px 24px;
    border-radius:6px;
`

export const CommonContainer = ({children,sx={}}:{children:React.ReactNode, sx?:React.CSSProperties}) => {
    return (
        <Container style={sx}>
            {children}
        </Container>
    )
}
