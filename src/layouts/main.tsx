import { Box, Flex } from "@chakra-ui/react";
import Navegation from "../components/navegation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex>
      <Box w="15%" bg="#0d0d0d" color="white">
        <Navegation />
      </Box>
      <Box flex="1" p={4}>
        {children}
      </Box>
    </Flex>
  );
}
