import theme from "./theme.js";

const primaryColor = theme.primary_color;
const primaryLightColor = theme.primaryLight_color;
const secondaryColor = theme.secondary_color;
const secondaryLightColor = theme.secondaryLight_color;
const secondaryDarkColor = theme.secondaryDark_color;
const dangerColor = theme.danger_color;
const dangerLightColor = theme.dangerLight_color;
const warningColor = theme.warning_color;
const warningLightColor = theme.warningLight_color;
const dirtGreyColor = theme.color.dl_dirtgrey;
const blackColor = theme.color.dl_black;
const whiteColor = theme.color.dl_white;
const slateColor = theme.color.dl_slate;

const focusShadow = "0px 3px 10px -1px rgba(0, 0, 0, .15)";

// design scales
const ms = theme.ms;
const font = theme.font;
const fontFamily = theme.typography.fontFamily;
const breakpoints = theme.breakpoints;
const scales = theme.ratio;
const pxToRem = theme.typography.pxToRem;

const customScrollBar = theme.scrollBar.sidebar;

// backgrounds
const primaryBackground = {
  "&, &:focus, &:hover, &:visited": {
    backgroundColor: primaryColor,
    color: whiteColor
  }
};

const secondaryBackground = {
  "&, &:focus, &:hover, &:visited": {
    backgroundColor: secondaryLightColor
  }
};

const dangerBackground = {
  "&, &:focus, &:hover, &:visited": {
    backgroundColor: dangerColor,
    color: whiteColor
  }
};

const warningBackground = {
  "&, &:focus, &:hover, &:visited": {
    backgroundColor: warningColor,
    color: whiteColor
  }
};

// Margin ratio
const marginRatio = {
  "&xs": {
    marginBottom: 12
  },

  "&sm": {
    marginBottom: "calc(" + scales.space.topBottom + " / 2)",

    [breakpoints.up("md")]: {
      marginBottom: scales.space.topBottom
    }
  },

  "&lg": {
    marginBottom: scales.space.topBottom,

    [breakpoints.up("md")]: {
      marginBottom: "calc(" + scales.space.topBottom + " * 2)"
    }
  },

  "&none": {
    margin: 0
  }
};

// Padding ratio
const paddingRatio = {
  "&xs": {
    padding: 8
  },

  "&sm": {
    padding: 12
  },

  "&lg": {
    paddingTop: "calc(" + scales.space.topBottom + " * 1.4)",
    paddingRight: "calc(" + scales.space.rightLeft + " * 1.4)",
    paddingBottom: "calc(" + scales.space.topBottom + " * 1.4)",
    paddingLeft: "calc(" + scales.space.rightLeft + " * 1.4)",

    [breakpoints.up("md")]: {
      paddingTop: "calc(" + scales.space.topBottom + " * 2)",
      paddingRight: "calc(" + scales.space.rightLeft + " * 2)",
      paddingBottom: "calc(" + scales.space.topBottom + " * 2)",
      paddingLeft: "calc(" + scales.space.rightLeft + " * 2)"
    }
  },

  "&none": {
    padding: 0
  }
};

// dte custom input underline
const customUnderline = {
  underline: {
    "&:before": {
      borderColor: secondaryColor
    },

    "&:before, &:after": {
      borderWidth: "1px !important"
    },

    "&.--active": {
      "&:before, &:after": {
        borderBottomColor: primaryColor + " !important"
      }
    },

    "&.--error": {
      "&:before, &:after": {
        borderBottomColor: dangerColor + " !important"
      }
    },

    "&.--hidden": {
      "&:before, &:after": {
        opacity: 0
      }
    },

    "&.--disabled": {
      "&:before": {
        borderBottomColor: "transparent !important"
      }
    }
  }
};

const activeItem = {
  borderTopRightRadius: "24px",
  borderBottomRightRadius: "24px",
  backgroundColor: primaryLightColor,
  fontWeight: 700
};

const dragAndDrop = isDragging => ({
  overflowX: isDragging ? "unset" : "auto",
  padding: isDragging && "1.30rem 1rem",
  border: isDragging && "1px solid #f2f2f0",
  backgroundColor: whiteColor,
  boxShadow:
    isDragging && ".3819820591rem .3819820591rem 1rem rgba(71, 71, 62, .1)"
});

const backDrop = {
  backgroundColor: "rgba(229, 229, 229, .8)"
};

export {
  primaryColor,
  primaryLightColor,
  secondaryColor,
  secondaryLightColor,
  secondaryDarkColor,
  dangerColor,
  dangerLightColor,
  warningColor,
  warningLightColor,
  dirtGreyColor,
  blackColor,
  whiteColor,
  slateColor,
  focusShadow,
  primaryBackground,
  secondaryBackground,
  dangerBackground,
  warningBackground,
  font,
  fontFamily,
  breakpoints,
  scales,
  pxToRem,
  customScrollBar,
  ms,
  marginRatio,
  paddingRatio,
  customUnderline,
  activeItem,
  dragAndDrop,
  backDrop
};
