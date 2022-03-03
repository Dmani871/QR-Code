const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: 'xl',
    boxShadow: 'xl',
    height: '25%',
    width:'25%',
    mx:"auto",
    my:"25%"
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 2,
      borderRadius: 'xl',
      boxShadow: 'xl',
    }
  },
  // The default variant value
  defaultProps: {
    variant: 'rounded',
  },
}

export default Card;