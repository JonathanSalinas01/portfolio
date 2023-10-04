import { Box, Button, Heading, Highlight, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import imagen from "../../assets/foto_perfil.png";




const Header = () => {
    return (
        <Box bg="black" color="white" h={700} pt="2" display='flex'>
            <Box bg="tomato" w="50%" justifyContent='flex-start' pl='5' pt="8" mt={5} >
                <Box display='flex' h="100px">
                    <br />
                    <br />
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

            <Box bg="yellow" w="50%" display="flex" justifyContent='center' alignItems='center' mb={6} pt="8" mt={5} >
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
            <Stack w='100%' h={10} position='absolute' bottom="10px">
                <Box display='flex' bg="blue" w='100%'>
                    <Box w={60}><Text>/Encuentrame en</Text></Box>
                    <Box w={40} h="100%" ml={2} borderRight='1px' borderLeft='1px' borderColor='white' ><a href=''><Icon icon="ri:twitter-fill" width="40" height="40" /></a></Box>
                    <Box w={40} h="100%" ml={4} borderRight='1px' borderColor='white' ><a href=''><Icon icon="basil:facebook-solid" width="40" height="40" /></a></Box>
                    <Box w={80} h="100%" ml={600} bg="tomato"  > 
                       
                        <a href='' ><Text>@JonathanSalinas01<Icon icon="codicon:github-inverted" width="30" height="30" /></Text></a>
                       
                    </Box>

                </Box>
                
            </Stack>
        </Box>

    )
}

export { Header }