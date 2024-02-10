import { Stack } from "@chakra-ui/react";
import Layout from "./layouts/main";
import SectionItem from "./components/section-item";

const preguntas = [
  {
    pregunta: "Qué es React",
    respuesta:
      "React es una de las librerías más utilizada para construir interfaces de usuario interactivas en el desarrollo de aplicaciones web. React permite crear componentes reutilizables que representa bloques especificos de la interfaz de un usuario.",
  },
  {
    pregunta: "¿Qué es React y por qué es popular en el desarrollo web?",
    respuesta:
      "Es popular en el desarrollo web por su enfoque declarativo, su eficiente manejo de actualizaciones del DOM a través de la virtual DOM y la posibilidad de reutilizar componentes.",
  },
  {
    pregunta:
      "Explique la diferencia entre componentes de clase y componentes funcionales en React.",
    respuesta:
      "Los componentes de clase en React se definen utilizando la sintaxis de clases de JavaScript, mientras que los componentes funcionales son funciones de JavaScript que pueden aceptar propiedades como argumentos y devolver elementos React. Con la introducción de ganchos (hooks) en React, los componentes funcionales pueden ahora manejar el estado y otros aspectos previamente reservados para los componentes de clase.",
  },
  {
    pregunta: "¿Qué son los ganchos (hooks) en React y cuál es su propósito?",
    respuesta:
      "Los ganchos en React son funciones que permiten a los componentes funcionales tener estado y realizar efectos secundarios. Algunos ganchos comunes son useState para el estado y useEffect para manejar efectos secundarios. Los ganchos proporcionan una forma más limpia y reutilizable de lidiar con la lógica de los componentes en comparación con los componentes de clase.",
  },
  {
    pregunta: "¿Cómo se realiza el paso de datos entre componentes en React?",
    respuesta:
      "En React, los datos pueden pasarse entre componentes utilizando props. Los componentes padres pueden pasar datos a sus componentes hijos como props, que son propiedades que el componente hijo puede acceder y utilizar. Esto facilita la comunicación entre componentes en una jerarquía.",
  },
  {
    pregunta: "Explique el concepto de 'estado' en React.",
    respuesta:
      "El estado en React es un objeto que representa cómo debería renderizarse un componente y cómo evoluciona a lo largo del tiempo. Los componentes pueden tener estado propio que afecta su renderización. El estado se gestiona utilizando la función useState en componentes funcionales o a través de this.state en componentes de clase.",
  },
  {
    pregunta: "¿Qué es JSX en React y por qué se utiliza?",
    respuesta:
      "JSX es una extensión de JavaScript utilizada en React para describir la interfaz de usuario. JSX proporciona una sintaxis más legible y concisa para definir elementos React en comparación con la creación manual de elementos en JavaScript puro. JSX es transformado a llamadas a funciones React.createElement durante el proceso de compilación.",
  },
  {
    pregunta: "¿Cómo se manejan los eventos en React?",
    respuesta:
      "Los eventos en React se manejan utilizando la sintaxis camelCase y asignando funciones de controlador a propiedades de eventos. Por ejemplo, onClick para manejar eventos de clic. Los eventos en React son objetos sintéticos que envuelven los eventos nativos del navegador, proporcionando consistencia entre los diferentes navegadores.",
  },
  {
    pregunta: "Explique el ciclo de vida de un componente en React.",
    respuesta:
      "El ciclo de vida de un componente en React comprende tres fases: montaje, actualización y desmontaje. Durante el montaje, el componente se crea e inserta en el DOM. Durante la actualización, el componente se vuelve a renderizar debido a cambios en el estado o las props. Durante el desmontaje, el componente se elimina del DOM. Los métodos del ciclo de vida, como componentDidMount y componentDidUpdate, permiten realizar acciones en estas fases.",
  },
  {
    pregunta: "¿Qué es la virtual DOM y cómo mejora el rendimiento en React?",
    respuesta:
      "El Modelo de Objetos del Documento (DOM) presenta una página web en una estructura de árbol de datos. ReactJS almacena árboles DOM virtuales en la memoria. Al hacerlo, React puede aplicar actualizaciones a partes específicas del árbol de datos, lo que es más rápido que volver a renderizar la totalidad del árbol DOM. Cada vez que haya un cambio en los datos, ReactJS generará un nuevo árbol de DOM virtual y lo comparará con el anterior para encontrar la forma más rápida de implementar los cambios en el DOM real. Este proceso se conoce como diffing.",
  },
  {
    pregunta:
      "Explique la diferencia entre el uso de props y state en un componente de React.",
    respuesta:
      "Las props y el state son dos conceptos fundamentales en React. Las props (propiedades) son datos que se pasan de un componente padre a un componente hijo. Son inmutables y deben considerarse como argumentos de una función. El state, por otro lado, es la representación interna y mutable de los datos dentro de un componente. Se utiliza para gestionar la información que puede cambiar a lo largo del tiempo y afecta la representación del componente.",
  },
  {
    pregunta: "Qué son los componentes",
    respuesta:
      "Divide la interfaz de usuario en piezas aisladas y reutilizables de código. Funcionan de forma similar a las funciones de JavaScript, ya que aceptan entradas, o mejor dicho, propiedades o props. Los componentes permiten una arquitectura modular y facilitan el mantenimiento y la reutilización del código en aplicaciones React.",
  },
];

function App() {
  return (
    <Layout>
      <Stack spacing="10">
        {preguntas.map((item, index) => (
          <SectionItem index={index} item={item} />
        ))}
      </Stack>
    </Layout>
  );
}

export default App;
