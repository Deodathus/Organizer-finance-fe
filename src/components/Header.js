import {
    Badge,
    Box, Button,
    Container,
    Flex,
    Heading,
    HStack,
    Spacer
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import organizerAuthFe from "../utils/dictionaries/routes/api/organizer-auth-fe";
import UnsetUserSessionToken from "../services/user/UnsetUserSessionToken";

export default function Header(props) {
    const titleCss = {
        color: '#FC8181'
    };
    const version = props.version;

    const token = useSelector(state => state.user.me.token);

    let logoutButton = '';
    if (token !== null && token.length > 0) {
        logoutButton = (
            <>
                <Box m={'3.5'}>
                    <Button onClick={logOut}>
                        Log Out
                    </Button>
                </Box>
            </>
        );
    }

    function logOut() {
        UnsetUserSessionToken();

        window.location.href = organizerAuthFe().logout;
    }

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
                    {logoutButton}
                </Flex>
            </Container>
        </>
    );
}