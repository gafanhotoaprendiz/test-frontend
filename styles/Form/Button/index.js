import styled from 'styled-components'

import { VariantStyles } from './Contained'

export const Button = styled.button`
	height: 40%;
	width: 25%;

	font-size: 130%;
	
	${(props) => VariantStyles(props)}

	border: 0;
	border-radius: 1em;

	&:hover {
		cursor: pointer;
	}
`