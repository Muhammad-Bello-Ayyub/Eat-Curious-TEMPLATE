'use client'

import { useEffect, useRef, useMemo } from 'react';
import { useAnimate, usePresence } from 'framer-motion';
import { Box, Image, Flex, Heading, VStack, Text, Card } from '@chakra-ui/react';

function Features() {
  const featureData = useMemo(
    () => [
      {
        title: 'PLANT BASED',
        text: 'Plant-protein yumminess, suitable for vegans (and everyone else.)',
        imageSrc: '/featureicon.png',
      },
      {
        title: 'REAL INGREDIENTS',
        text: "If we don't know exactly what an ingredient is, we don't include it.",
        imageSrc: '/featureicon2.png',
      },
      {
        title: 'UNREAL TEXTURE',
        text: "It's not meat. No really, it's not!",
        imageSrc: '/featureicon3.png',
      },
      {
        title: 'BLAND IS BANNED',
        text: 'Foodies unite, because here flavor rules.',
        imageSrc: '/featureicon4.png',
      },
    ],
    []
  );

//   const [scope, animate] = useAnimate();
//   const [isPresent, safeToRemove] = usePresence();
//   const ref = useRef();

//   useEffect(() => {
//     if (isPresent && scope.current) {
//       const enterAnimation = async () => {
//         await Promise.all(
//           featureData.map((_, index) =>
//             animate(scope.current.children[index], { opacity: [0, 1] }, { duration: 0.5, delay: 0.3 * index })
//           )
//         );
//       };
//       if (ref.current) {
//         enterAnimation();
//       }
//     } else if (scope.current) {
    //     if (safeToRemove) {
    //         await animate(scope.current, { opacity: [0, 1] }, { duration: 0.5, delay: 0.3 });
    //         safeToRemove();
    //     }
    //     };
    //     exitAnimation();
    // }
    // }, [featureData, isPresent, animate, scope, safeToRemove]);

  return (
    <Box display="flex" flexDir="column" alignItems="center" py={10} px={{ base: `${5}`, md: `${20}` }} bg="#fff6f6" w="100vw">
      <Heading fontSize={{ base: '2em', md: '3em' }} lineHeight="0.82em" fontWeight="800" textAlign="center" p="0.2em" w="100%" color="#042f1a">
        FEATURES &<br/> BENEFITS
      </Heading>

        <Flex flexDir={{ base: 'column', md: 'row' }} gap={6} py={35} alignItems="center" justify="space-around">
            {featureData.map((feature, index) => (
                <Card 
                    boxShadow="none"
                    border="none" 
                    bg="#fff6f6" 
                    key={index} 
                    w={{ base: '15rem', md: '14rem' }} 
                    minH="22rem" 
                >
                    <VStack spacing={4}>
                        <Image alt="" boxSize="10em" src={feature.imageSrc} />
                        <Heading fontWeight="600" fontSize="1rem" color="#042f1a">
                            {feature.title}
                        </Heading>
                        <Text textAlign="center" color="#042f1a">
                            {feature.text}
                        </Text>
                    </VStack>
                </Card>
            ))}
        </Flex>
    </Box>
  );
}

export default Features;