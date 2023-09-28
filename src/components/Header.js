import {
    Badge,
    Box,
    Container,
    Flex,
    Heading,
    HStack,
    Spacer
} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function Header(props) {
    const titleCss = {
        color: '#FC8181'
    };
    const version = props.version;

    return (
        <>
            <Container maxW='full' maxH={150}>
                <Flex minWidth='max-content' gap='2'>
                    <Box m={2}>
                        <HStack>
                            <Heading as='h3' size='lg' style={titleCss}>
                                <Link to=''>Organizer Finance</Link> <Badge colorScheme='red'>v{version}</Badge>
                            </Heading>
                        </HStack>
                    </Box>
                    <Spacer />
                </Flex>
            </Container>
        </>
    );
}