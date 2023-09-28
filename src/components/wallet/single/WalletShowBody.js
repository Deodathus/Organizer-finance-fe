import WalletItem from "./WalletItem";

export default function WalletShowBody(props) {
    const wallet = props.wallet;

    return <WalletItem wallet={wallet} />;
}
