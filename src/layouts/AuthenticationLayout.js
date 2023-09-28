import Header from "../components/Header";
import {Box, Center, Container, Divider, Heading, IconButton, Text} from "@chakra-ui/react";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import {FaArrowRightToBracket} from "react-icons/fa6";
import organizerAuthFe from "../utils/dictionaries/routes/api/organizer-auth-fe";
import {useSearchParams} from "react-router-dom";
import SetupUserSessionToken from "../services/user/SetupUserSessionToken";
import AppUrl from "../utils/dictionaries/config/AppUrl";

export default function AuthenticationLayout(props) {
    const generalData = props.generalData;
    const [searchParams, setSearchParams] = useSearchParams();

    let token = searchParams.get('token');

    if (token !== null && token.length > 0) {
        SetupUserSessionToken(token);

        window.location.href = AppUrl();
    }

    function logIn() {
        window.location.href = organizerAuthFe().signin;
    }

    return (
        <>
            <Header version={generalData.version} />
            <Divider />
            <Container className={'content indexLayout'}>
                <PageContent>
                    <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                        <Heading as='h6' size='md'>
                            Welcome to Organizer Finance App
                        </Heading>
                        <Center>
                            <Text fontSize='xl'>
                                In order to use app please log in
                            </Text>
                        </Center>
                        <Center css='margin-top: 15px'>
                            <IconButton onClick={logIn} aria-label='Log In' icon={<FaArrowRightToBracket />} />
                        </Center>
                    </Box>
                </PageContent>
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}
