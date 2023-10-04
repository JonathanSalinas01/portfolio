import { Box, Button, Highlight, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import  imagen  from "../../assets/foto_perfil.png";




const Header = () => {
    return (
        <Box bg="black" color="white" h={500} pt="1" display='flex'>
            <Box bg="tomato" w="50%" justifyContent='flex-start' pl='5' pt="8">
                <Box display='flex'>
                    <Text fontSize='3em'>Hola, soy <Text as="span" color="purple">Jonathan Salinas</Text></Text>

                    <Icon icon="emojione:waving-hand" width="64" height="64" />
                </Box>

                <Text fontSize='1.5em' textAlign='left' mb={2}> >>Desarrollador Front-End / Back-End</Text>
                <Box w="52px" mb={4}>
                    <hr />
                </Box>

                <Box mb={20}>
                    <Text textAlign='left'>Soy una persona con un profundo interés en el campo del desarrollo. Considero que la creación de un diseño atractivo es un
                        aspecto esencial en el desarrollo de productos. Mi enfoque se centra en la composición y los detalles visuales para lograr un resultado profesional.
                        En este momento, estoy adquiriendo habilidades en la creación de aplicaciones dinámicas y desarrollo web.
                    </Text>
                </Box>

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
            <Box bg="yellow" w="50%" display="flex" rowGap="row" justifyContent='center' alignContent='center'>
                <Box>
                    <Image src={imagen}/>
                </Box>
                <Box>
                    <Text>"Programar es lo más cercano a un <Text as="span" color="purple">superpoder."</Text></Text>
                </Box>
            </Box>
        </Box>
    )
}

export { Header }