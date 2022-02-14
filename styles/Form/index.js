import styled from 'styled-components'

export const Form = styled.form`
    height: ${props => props.height};
    width: ${props => props.width};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: ${props => props.gap};
    padding-top: 3%;
    padding-bottom: 3%;

    background-color: ${({ theme }) => theme.background.form};
    
    border-radius: 2em;
`