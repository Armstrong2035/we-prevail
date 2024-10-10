const colors = {
  primaryBackground: "#F1FAEE",
  secondaryBackground: "#457b9d",
  textColor: "#FDF0D5",
};

const textStyles = {
  cardHeading: {
    fontFamily: "neue-haas-grotesk-display",
    fontStyle: "normal",
    fontWeight: 700,
    color: "rgb(255, 255, 255)",
    fontSize: "32px",
    lineHeight: "40px",
  },
  cardBody: {
    fontFamily: "neue-haas-grotesk-display",
    fontStyle: "normal",
    fontWeight: 500,
    color: "rgb(255, 255, 255)",
    fontSize: "14px",
    lineHeight: "21px",
  },
  secondaryHeading: {
    fontFamily: '"DM Sans", sans-serif',
    fontStyle: "normal",
    fontWeight: 700,
    color: "rgb(0 0 0)",
    fontSize: "30px",
    lineHeight: "38px",
  },

  secondaryBody: {
    fontFamily: '"DM Sans", sans-serif',
    fontStyle: "normal",
    fontWeight: 700,
    color: "rgb(0 0 0)",
    fontSize: "24px",
    lineHeight: "30px",
  },
  tertiaryBody: {
    fontFamily: '"DM Sans", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    color: "rgb(118, 123, 136)",
    fontSize: "18px",
    lineHeight: "27px",
  },

  sermons: {
    title: {
      family: "Mulish",
      style: "normal",
      weight: 800,
      color: "rgb(0, 0, 0)",
      size: "16px",
      lineHeight: "24px",
    },
    body: {
      family: "Mulish Montserrat sans-serif",
      style: "normal",
      weight: 800,
      color: "rgb(107, 107, 112)",
      size: "12px",
      lineHeight: "18px",
    },
    heading: {
      family: "Mulish Montserrat sans-serif",
      style: "normal",
      weight: 800,
      color: "rgb(0, 0, 0)",
      size: "20px",
      lineHeight: "24px",
    },
  },
  tertiaryHeading: {
    fontFamily:
      'Mulish, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: "normal",
    fontWeight: 500,
    color: "rgb(0, 0, 0)",
    fontSize: "16px",
    lineHeight: "24px",
  },
};

const buttonStyles = {
  primaryButton: {
    backgroundColor: "#000000",
    color: "#F1FAEE",
    fontFamily: "Poppins, Lato, Helvetica, sans-serif",
    fontWeight: 600,
    fontSize: "10px",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, border-color 0.3s",
    hover: {
      backgroundColor: "#5C0000",
      borderColor: "#A63A3A",
    },
  },
  textButton: {
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    "&.MuiButton-text:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    color: "black",
  },
};

export { colors, textStyles, buttonStyles };
