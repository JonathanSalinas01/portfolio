import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Menu = () => (
    <>
        <a href="">Inicio</a>
        <a href="">Acerca De</a>
        <a href="">Tecnologías </a>
        <a href="">Proyectos</a>
        <a href="">Contacto</a>
    </>
)

const Navbar = () => {
    return (
        <Box bg='black' color='white' p={4} borderBottom='1px' borderColor='white' display='flex' justifyContent='space-between' pt="0.5" h={10}>
            <Box display='flex' justifyContent='space-between' textAlign='center'>
                <Box w={60}><Text>/TecT0rel</Text></Box>
                <Box w={40} h="150%" ml={2} borderRight='1px' borderLeft='1px' borderColor='white' ><a href=''>/_Inicio</a></Box>
                <Box w={40} h="150%" ml={4} borderRight='1px'  borderColor='white' ><a href=''>/_Acerca De</a></Box>
                <Box w={40} h="150%" ml={4} borderRight='1px'  borderColor='white' ><a href=''>/_Proyectos</a></Box>
            </Box>
            <Box w={40} h="150%" ml={4} borderLeft='1px' borderColor='white' textAlign='center' ><a href=''>/_Contacto</a></Box>
        </Box>
    )
}

export { Navbar }