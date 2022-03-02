const Card = {
    // The styles all Cards have in common
    baseStyle: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'xl',
      boxShadow: 'xl'
    },
    // Two variants: rounded and smooth
    variants: {
      rounded: {
        padding: 8,
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