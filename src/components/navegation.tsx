import { Box, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ThemeToggleButton } from "./theme-toggle-button";

const data = [
  {
    id: 0,
    url: "/",
    title: "Inicio",
  },
  {
    id: 1,
    url: "/use-state",
    title: "useState",
  },
  {
    id: 2,
    url: "/use-context",
    title: "useEffect",
  },
];

interface ItemNavegationProps {
  id?: number;
  url: string;
  title: string;
}

function ItemNavegation({ id, title, url }: ItemNavegationProps) {
  return (
    <Link to={url}>
      <Button key={id} colorScheme="gray" _hover={{ bg: "gray.400" }} w="full">
        {title}
      </Button>
    </Link>
  );
}

export default function Navegation() {
  return (
    <Box h="100vh" overflowY="auto" position="fixed">
      <ThemeToggleButton />
      <VStack p="4" width="200px" spacing="4" align="flex-start">
        {data.map(({ id, title, url }) => (
          <ItemNavegation key={id} title={title} url={url} />
        ))}
      </VStack>
    </Box>
  );
}

//position="fixed" top="0" bottom="0" left="0"
