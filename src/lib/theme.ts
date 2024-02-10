import { extendTheme } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("#efefef", "#171717")(props),
      transition: "background-color 2.7s lineal",
      // color: mode("#18181b", "whiteAlpha.900")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
};
const theme = extendTheme({ config, styles, components });

export default theme;
