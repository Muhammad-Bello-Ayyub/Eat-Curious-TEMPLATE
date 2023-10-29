// 'use client'

// import { motion, isValidMotionProp } from 'framer-motion';
// import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';

// const ChakraBox = chakra(motion.div, {
//   /**
//    * Allow motion props and non-Chakra props to be forwarded.
//    */
//   shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
// });

// export default function App() {
//   return (
//     <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
//       <ChakraBox
//         animate={{
//           scale: [1, 2, 2, 1, 1],
//           rotate: [0, 0, 270, 270, 0],
//           borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//         }}
//         // @ts-ignore no problem in operation, although type error appears.
//         transition={{
//           duration: 3,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//         padding="2"
//         bgGradient="linear(to-l, #7928CA, #FF0080)"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         width="100px"
//         height="100px"
//       >
//         I&rsquo;m Dizzy!
//       </ChakraBox>
//     </Container>
//   )
// }
// import { Box, Text } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';

// const RotatingCircle = () => {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const newRotation = scrollTop / 5;
//       setRotation(newRotation);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <Box
//       position="fixed"
//       top="50%"
//       left={0}
//       transform={`translateY(-50%) rotate(${rotation}deg)`}
//       width="100px"
//       height="100px"
//       borderRadius="50%"
//       backgroundColor="blue.500"
//       transition="transform 0.3s ease"
//       zIndex={999}
//     >
//       <Text
//         color="white"
//         fontSize="16px"
//         fontWeight="bold"
//         textAlign="center"
//         transform={`rotate(${-rotation}deg)`}
//       >
//         Rotating Text
//       </Text>
//     </Box>
//   );
// };

// export default RotatingCircle;


//As a Prop

// import { Box, Container, keyframes } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const animationKeyframes = keyframes`
//   0% { transform: scale(1) rotate(0); border-radius: 20%; }
//   25% { transform: scale(2) rotate(0); border-radius: 20%; }
//   50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
//   75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
//   100% { transform: scale(1) rotate(0); border-radius: 20%; }
// `;

// const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  
// export default function App() {
//   return (
//     <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
//       <Box
//         as={motion.div}
//         animation={animation}
//         // not work: transition={{ ... }}
//         padding="2"
//         // @ts-ignore - "Does not exist" Type Error against Motion
//         bgGradient="linear(to-l, #7928CA, #FF0080)"
//         width="12"
//         height="12"
//         display="flex"
//       />
//     </Container>
//   )