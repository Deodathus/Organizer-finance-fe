import {Box, Heading, Tooltip} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Icon} from "@chakra-ui/icons";

export default function MenuLink(props) {
    return (
        <>
            <Box className={'menuLink'}>
                <Heading as={'h5'} size={'xl'} marginLeft={2} >
                    <Tooltip label={props.name} aria-label='A tooltip'>
                        <Link to={props.link}>
                            <Icon as={props.icon} />
                        </Link>
                    </Tooltip>
                </Heading>
            </Box>
        </>
    );
}