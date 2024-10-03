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
    color: "rgb(255, 255, 255)",
    fontSize: "32px",
    lineHeight: "38px",
  },
  secondaryBody: {
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
    fontSize: "15px",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, border-color 0.3s",
    hover: {
      backgroundColor: "#5C0000",
      borderColor: "#A63A3A",
    },
  },
};

export { colors, textStyles, buttonStyles };
