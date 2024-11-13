'use client'
import CodeBox from "@/components/code-box";
import CONTENT from "@/content";
import { Box, Button, HStack, Stack, Flex, Heading, Badge, Tabs } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { RxExternalLink } from "react-icons/rx";

export default function DevPage() {
    const data = useRef(CONTENT)
    const [dataIndex, setDataIndex] = useState(0)
    const [terms, setTerms] = useState(data.current[dataIndex])

    useEffect(() => {
        setTerms(() => data.current[dataIndex])
    }, [dataIndex])

    return (
        <Flex flexDir="column" w="100%" maxW="1600px" justifyContent="center" alignItems="center" gap="50px" p={{base: "20px 20px", md: "20px 40px"}} m="0 auto">
            <Box display="flex" w="100%" justifyContent="space-between">
                <Button variant="surface"><IoArrowBackOutline /> Inicio</Button>
                <HStack>
                    <Button><FaGithub /></Button>
                    <Button>Contribuir <RxExternalLink /></Button>
                </HStack>
            </Box>
            <Flex flexDir="column" justifyContent="center" alignItems="center" w="100%" gap="40px">
                <Heading as="h1" size={{base: "4xl", md: "6xl"}} textAlign="center" textTransform="uppercase">{terms.name}</Heading>
                <Tabs.Root defaultValue="Español" variant="enclosed" w="100%" size="lg">
                    <Tabs.List>
                        <Tabs.Trigger value="Español">
                        🇪🇸 Español
                        </Tabs.Trigger>
                        <Tabs.Trigger value="English">
                        🇺🇸 English
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="Español" fontSize="2xl" opacity="0.7" textAlign="center">{terms.description.es}</Tabs.Content>
                    <Tabs.Content value="English" fontSize="2xl" opacity="0.7" textAlign="center">{terms.description.en}</Tabs.Content>
                </Tabs.Root>
            </Flex>
            <Flex flexDir={{base: "column", lg: "row"}} w="100%" justifyContent="space-between" alignItems={{base: "center", lg: "start"}} mb="40px" gap="20px">
                <Flex flexDir={{base: "column", sm: "row"}} gap="20px" alignItems={{base: "center", sm: "start"}}>
                    <Stack>
                        {
                            data.current.map((el, i) => (
                                <Button colorPalette="gray" variant={el.name == terms.name ? "solid" : "surface"} key={el.name} onClick={() => setDataIndex(i)}>{el.name}</Button>
                            ))
                        }
                    </Stack>
                    <Stack alignItems={{base: "center", sm: "start"}}>
                        {
                            terms.value.es.terms.map(el => (
                                <Flex key={el.value} flexDir={{base: "column", sm: "row"}} gap="15px" alignItems={{base: "center", sm: "start"}}>
                                    <Badge colorPalette="green" size="lg" textWrap="wrap" maxW="max-content">{el.value}</Badge>
                                    <Badge size="lg" variant="surface" textWrap="wrap" maxW="max-content">{el.translated}</Badge>
                                </Flex>
                            ))
                        }
                    </Stack>
                </Flex>
                <Box>
                    <CodeBox code={terms.value.es.code}/>
                </Box>
            </Flex>
        </Flex>
    )
}