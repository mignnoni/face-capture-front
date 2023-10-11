import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            html: {
                scrollBehavior: 'smooth'
            },
            body: {
                a: {
                    cursor: 'pointer',
                }
            }
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Nunito'
    }
})