import Header from "../components/Header";
import {Box, Center, Container, Divider, Grid, GridItem, Heading, IconButton, SimpleGrid, Text} from "@chakra-ui/react";
import Footer from "../components/Footer";
import PageContent from "../components/PageContent";
import {FaArrowRightToBracket} from "react-icons/fa6";
import organizerAuthFe from "../utils/dictionaries/routes/api/organizer-auth-fe";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function PageNotFoundLayout(props) {
    const shouldRedirectToMain = props.shouldRedirectToMain;
    const generalData = props.generalData;
    const navigate = useNavigate();

    useEffect(() => {
        if (shouldRedirectToMain) {
            goBackToMain();
        }
    }, []);

    function goBackToMain() {
        navigate('/');
    }

    return (
        <>
            <Header version={generalData.version} />
            <Divider />
            <Container className={'content indexLayout'}>
                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                </SimpleGrid>
                <PageContent>
                    <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                        <Heading as='h6' size='md'>
                            Ooops, looks like this page does not exist
                        </Heading>
                        <Center css='margin-top: 15px'>
                            <IconButton onClick={goBackToMain} aria-label='Log In' icon={<FaArrowRightToBracket />} />
                        </Center>
                        <Center>
                            <Text fontSize='sm'>
                                Psss, click me to go back to main page
                            </Text>
                        </Center>
                    </Box>
                </PageContent>
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}
