import styled from 'styled-components'

export const Input = styled.input`
	height: 40%;
	width: 40%;

	padding: 0 1em;

	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 1em;

	&:focus {
		outline: ${({ theme }) => theme.colors.primary};
	}
`