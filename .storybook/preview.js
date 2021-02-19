import React from "react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withA11y } from "@storybook/addon-a11y";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a,b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset/>
    <Box p="4">{story()}</Box>
  </ThemeProvider>)
);

addDecorator((story, context) => withConsole()(story)(context));
addDecorator(withA11y);
