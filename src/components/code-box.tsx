import { Code } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

interface CodeBoxProps {
    code: string
}
const CodeBox = ({ code }: CodeBoxProps) => {
    const [html, setHtml] = useState("")

    const convertCodeToHTML = async (code: string) => {
        const html = await codeToHtml(code, {
            lang: 'python',
            theme: 'everforest-dark'
        })

        return html
    }

    useEffect(() => {
        const convert = async () => {
            const convertedCode = await convertCodeToHTML(code) 
            setHtml(convertedCode)
        }

        convert()
    }, [code])

console.log(html) 
    return <Code dangerouslySetInnerHTML={{__html: html}} size="md" overflow="auto" borderRadius="10px"></Code>
}

export default CodeBox