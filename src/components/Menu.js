import MenuLink from "./MenuLink";
import {FaEnvelope, FaHome, FaWallet, FaSlidersH} from "react-icons/fa";
import {Box} from "@chakra-ui/react";

export default function Menu(props) {
    return (
        <>
            <Box className={'menu'}>
                <MenuLink name={'Home'} link={'/'} icon={FaHome} />
                <MenuLink name={'Wallets'} link={'/wallets'} icon={FaWallet} />
                <MenuLink name={'Transactions'} link={'/transactions'} icon={FaEnvelope} />
                <MenuLink name={'Setting'} link={'/settings'} icon={FaSlidersH} />
            </Box>
        </>
    );
}