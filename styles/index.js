import styled from 'styled-components'
import { Lock } from 'react-feather'

export const Main = styled.main`
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.background.primary};
`

export const ImageContainer = styled.div`
    position: relative;
    
    width: ${props => props.width};
    height: ${props => props.height};
`

export const LockIcon = styled(Lock)`
    padding-top: 0.5em;
    padding-bottom: 0.6em;

    width: 12%;
    height: 70%;

    color: ${({ theme }) => theme.colors.primary};   

    border-radius: 100px;
`