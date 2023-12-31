'use client'

import ServicesCard from "./ServicesCard"
import MoreServices from "./MoreServices"
import ServicesOptions from "./ServicesOptions"
import { Container, Flex, Heading } from "@chakra-ui/react"

function Services() {
    return (
        <Container p='0' m='0' maxW='100vw'>
            <Flex py={10} gap={5} px={{ base:'1rem', md:'6rem' }} bg={'#042f1a'} w='100%' flexDir='column'>
                <Heading
                    color='white'
                    textAlign='center'
                    fontWeight={'1000'}
                    letterSpacing={'tighter'}
                    textTransform={'uppercase'}
                    textDecorationStyle={'wavy'}
                    fontSize={{ base:'3rem', md:'5rem' }}
                >drooling yet?</Heading>
                <ServicesCard />
                <ServicesOptions />
                <MoreServices />
            </Flex>
        </Container>
    )
}

export default Services