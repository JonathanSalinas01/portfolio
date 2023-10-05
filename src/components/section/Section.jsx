import { Box, Heading, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';


const Section = () => {
    return (
        <Box display='flex' justifyContent='space-between' flexDirection='column' bg="black" h={300} color="white" pt={9}>
            <Box w='100%' display='flex' justifyContent='center'>
                <Heading as='h2' size='md' noOfLines={1} w='15%' border='1px' borderColor='gray.200' borderRadius='10px' textAlign='center'>
                    Tecnologías manejadas
                </Heading>
            </Box>

            <Box w='100%' display='flex' justifyContent='center' pb={5} pt={3}>
                <Text>Las habilidades, herramientas y tecnologías con las que estoy familiarizado y trabajo día a día</Text>
            </Box>

            <Box>
                <Box>
                    <Box border='1px' borderColor='gray.200' borderRadius='65px' w='7%'>
                    <Icon icon="logos:java" width="50" height="50" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export { Section }