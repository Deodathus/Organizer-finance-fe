import WalletItem from "./WalletItem";

export default function WalletBody(props) {
    const wallet = props.wallet;

    return <WalletItem wallet={wallet} />;
}
