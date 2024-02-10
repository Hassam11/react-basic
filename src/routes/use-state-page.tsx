import { Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../layouts/main";
import { Link } from "react-router-dom";
import CodeHighlight from "../components/code-highlight";
import SectionItem from "../components/section-item";

const preguntas = [
  {
    pregunta: "¿Qué es useState en React y cuál es su propósito?",
  },
  {
    pregunta: "¿Para qué se usa?",
  },
  {
    pregunta: "¿Cuál es la sintaxis general para usar useState?",
  },
  {
    pregunta:
      "¿Qué valor devuelve useState y cómo se accede a la variable de estado y a la función para actualizarla?",
  },
  {
    pregunta:
      "¿Puedes tener múltiples estados en un solo componente funcional?",
  },
  {
    pregunta:
      "¿Cómo inicializarías un estado con un valor que depende del estado anterior?",
  },
  {
    pregunta:
      "¿Qué sucede si intentas llamar a useState en un ciclo o condición?",
  },
  {
    pregunta:
      "¿Cuándo es apropiado utilizar el useState en lugar de otros ganchos de React como useReducer o useContext?",
  },
  {
    pregunta:
      "¿Cómo puedes actualizar el estado basándote en su valor anterior?",
  },
  {
    pregunta: "¿Cómo gestionarías un estado que es un objeto o un array?",
  },
  {
    pregunta:
      "¿Cómo se puede manejar el estado en componentes hijos que necesitan compartir datos con el componente padre?",
  },
  {
    pregunta: "¿Cuándo usarías useState versus useReducer?",
  },
  {
    pregunta:
      "¿Cómo podrías optimizar el rendimiento al usar useState en un componente?",
  },
  {
    pregunta:
      "¿Cómo puedes compartir el estado entre componentes en diferentes partes de tu aplicación?",
  },
  {
    pregunta:
      "¿Qué es el patrón de 'lifting state up' y cómo se relaciona con useState?",
  },
];

export default function UseStatePage() {
  return (
    <Layout>
      <Heading>useState</Heading>

      <Text as="p">
        Su principal uso es agregar un{" "}
        <Text color="blue.500" as="span">
          <Link to="/state">estado</Link>
        </Text>{" "}
        al componente
      </Text>

      <CodeHighlight language="javascript" code="console.log('Hola ')" />
      <Stack spacing="10">
        {preguntas.map((item, index) => (
          <SectionItem index={index} item={item} />
        ))}
      </Stack>
    </Layout>
  );
}
