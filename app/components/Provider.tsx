'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


    const colors = {
        brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
        },
    }
    const font = {
     fonts: {
        body: "system-ui, sans-serif",
        heading: "obviously-narrow, helvetica, sans-serif",
        mono: "Menlo, monospace",
      },
    }
    const container = {
      container: {
         width: "100vw"
       },
     }



    export const theme = extendTheme({ colors, font, container })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}