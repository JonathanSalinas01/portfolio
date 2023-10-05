import { Box, Heading, Text } from '@chakra-ui/react'
import './App.css'


function App() {


  return (
    <>
      <Box display='flex' justifyContent='space-between' flexDirection='column' bg="#242e47" h={300} color="white" pt={5}>
        <Box w='100%' display='flex' justifyContent='center'>
          <Heading as='h2' size='md' noOfLines={1} w='10%' border='1px' borderColor='gray.200' borderRadius='10px' textAlign='center'>
            Acerca de mi
          </Heading>
        </Box> 
        

        <Box w='100%' display='flex' justifyContent='center' pb={5} pt={3}>
          <Box w='70%'>
            <Text>
              Soy un desarrollador apasionado, que se especializa en desarrollo el Full-Stack (React.js y Node.js). Soy muy entusiasta cuando se trata de llevar los aspectos
              tecnicos y visuales de los productos digitales a la vida. Experiencia de usuarios, diseños pixelados y escribir codigo claro, legible y de alta performance
              es lo que apasiona.
              <br />
              <br />
              Comenzé mi viaje como desarrollador web en 2022, y desde entonces he continuado creciendo y evolucionando como desarrollador, tomando nuevos desafíos y aprendiendo
              las últimas tecnologías durante el viaje. Estoy construyendo aplicaciones web de últma generación usando tecnologías modernas como Node.js, TypeScrip, NestJs, Tailwindcss
              y muchas más.
              <br />
              <br />
              Soy un pensador avanzado y disfruto de trabajar en proyectos de principio a fin, desde idearlo hasta lanzarlo.
              <br />
              <br />
              Estoy disponible para trabajos freelance, asi que sientete libre de contactarme!
            </Text>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default App
