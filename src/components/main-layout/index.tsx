import styled from "styled-components"
import { Header } from "../header"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainContainer = styled.section``

const Content = styled.main`
    padding: 1.5rem;
    margin-top:50px;
`

export const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <MainContainer>
            <Header />
            <Content>
                {children}
            </Content>
        </MainContainer>
    )
}
