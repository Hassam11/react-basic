import { Button, useColorMode } from "@chakra-ui/react";

export function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button fontSize="xl" onClick={toggleColorMode} px="2">
      {colorMode === "light" ? " Moon" : "Sun"}
    </Button>
  );
}
