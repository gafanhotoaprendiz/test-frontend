export const VariantStyles = (props) => {
	let bg = props.theme.background.form
	let fg = props.theme.colors.primary
	let hasShadow;
	let switchingVar = bg;

	switch (props.variant) {
		case "contained":
			bg = fg
			fg = switchingVar
			hasShadow = `var(--shadow-elevation-low)`
			break
	}

	const resultingStyles = `
		color: ${fg};
		background-color: ${bg};

		box-shadow: ${hasShadow};
	`

	return resultingStyles
}