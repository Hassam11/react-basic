import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface SectionItemProps {
  index: number;
  item: {
    pregunta: string;
    respuesta?: string;
  };
}

export default function SectionItem({ index, item }: SectionItemProps) {
  const preguntaColor = useColorModeValue("#171717", "#efefef");
  const respuestaColor = useColorModeValue("#2d2d2d", "#cccccc");

  return (
    <Box
      key={index}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={5}
      bg={useColorModeValue("#ffffff", "#2a2a2a")}
    >
      <Text
        as="h2"
        fontSize="xl"
        fontWeight="semibold"
        mb={2}
        color={preguntaColor}
      >
        {item.pregunta}
      </Text>
      <Text as="p" fontSize="md" color={respuestaColor}>
        {item.respuesta ? item.respuesta : "¡Ups! No hay respuesta"}
      </Text>
    </Box>
  );
}
