import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a": {
      boxShadow: `none`,
      color: "var(--text-color)"
    },
    "h2":{
      fontFamily: "inherit",
      fontSize: "...scale(1)"
    },
    "h3":{
      fontFamily: "inherit",
      fontSize: "...scale(1)"
    },
    "h4":{
      fontFamily: "inherit",
      fontSize: "...scale(1)"
    },
    "h5":{
      fontFamily: "inherit",
      fontSize: "...scale(1)"
    },
    "h6":{
      fontFamily: "inherit",
      fontSize: "...scale(1)"
    },
    "hr":{
      background: "#8080804d;"
    },
    "p":{
      color: "var(--text-color)"
    },
    "blockquote":{
      borderLeftColor: "var(--accent-color-opposite)"
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
