import WalletItem from "./WalletItem";
import WalletTransactionsList from "../../walletTransaction/WalletTransactionsList";

export default function WalletBody(props) {
    const wallet = props.wallet;

    return (
        <>
            <WalletItem wallet={wallet} />
            <WalletTransactionsList walletId={wallet.id} />
        </>
    );
}
