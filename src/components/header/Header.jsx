import { Box, Button, Heading, Highlight, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import imagen from "../../assets/foto_perfil.png";




const Header = () => {
    return (
        <Box bg="black" color="white" h={700} pt="2" display='flex'>
            <Box bg="black" w="50%" justifyContent='center' alignItems='center' pl='5' pt="8" mt="9%" >
                <Box display='flex' h="100px">
                    <Heading as='h1' size='3xl' noOfLines={1}>
                        
                        Hola, soy <Text as="span" color="purple">Jonathan Salinas</Text>
                    </Heading>

                    <Icon icon="emojione:waving-hand" width="64" height="64" />
                </Box>

                <Heading as='h2' size='lg'>
                    Desarrollador Front-End / Back-End
                </Heading>
                <Box w="52px" mb={4}>
                    <br />
                    <hr />
                </Box>

                <Box mb={20}>
                    <Text textAlign='left'>Soy una persona con un profundo interés en el campo del desarrollo. Considero que la creación de un diseño atractivo es un
                        aspecto esencial en el desarrollo de productos. Mi enfoque se centra en la composición y los detalles visuales para lograr un resultado profesional.
                        En este momento, estoy adquiriendo habilidades en la creación de aplicaciones dinámicas y desarrollo web.
                    </Text>
                </Box>
                <br />
                <br />

                <Box display='flex' justifyContent='space-evenly' pt={5}>
                    <Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com' bg="purple" color="white">
                        <Box display='flex' justifyContent='space-between' alignItems='center' >
                            <Icon icon="quill:paper" width="18" height="18" />
                            <Text pl='3'>Descargar CV</Text>
                        </Box>

                    </Button>
                    <Button as='a' target='_blank' variant='outline' href='https://chakra-ui.com' color="white">
                        Más
                    </Button>
                </Box>
            </Box>

            <Box bg="black" w="50%" display="flex" justifyContent='center' alignItems='center' mb={6} pt="8" mt={5} >
                <Stack direction='column'>
                    <Box pl={7} ml={4}>
                        <Image
                            boxSize='500px'
                            objectFit='cover'
                            src={imagen} />
                    </Box>
                    <Box>
                        <Box>

                        </Box>
                    </Box>
                    <Box mb={20}>
                        <Text fontSize='3xl' >"Programar es lo más cercano a un <Text as="span" color="purple">superpoder."</Text></Text>
                    </Box>
                </Stack>
            </Box>

        </Box>

    )
}

export { Header }