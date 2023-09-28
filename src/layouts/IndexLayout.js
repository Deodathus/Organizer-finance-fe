import Header from "../components/Header";
import {Box, Container, Divider, Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import Menu from "../components/Menu";

export default function IndexLayout(props) {
    const generalData = props.generalData;
    const user = useSelector(state => state.user.me);

    return (
        <>
            <Header version={generalData.version} />
            <Divider />
            <Container className={'content indexLayout'}>
                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                    <Menu />
                </SimpleGrid>
                <Grid
                    h='max-content'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1}>

                    </GridItem>
                    <GridItem colSpan={4} rowSpan={2}>
                        <Box>
                            <Outlet />
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}