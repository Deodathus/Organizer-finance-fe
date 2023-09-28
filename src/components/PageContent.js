import {Box, Center, Flex} from "@chakra-ui/react";

export default function PageContent(props) {
    return (
        <>
            <Flex width={"99vw"} height={"85vh"} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                        {props.children}
                    </Box>
                </Center>
            </Flex>
        </>
    );
}
