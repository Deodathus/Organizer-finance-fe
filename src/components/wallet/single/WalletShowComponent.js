import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import WalletShowBody from "./WalletShowBody";
import WalletFetchReducer from "../../../stores/reducers/wallet/WalletFetchReducer";
import WalletFetchActionCreator from "../../../stores/actions/wallet/WalletFetchActionCreator";
import WalletShowSkeletonBody from "./WalletShowSkeletonBody";

export default function WalletShowComponent(props) {
    const dispatch = useDispatch();

    const {walletId} = useParams();

    const wallet = useSelector(state => {
        return Object.values(state.wallet.elements).find((wallet) => {
            if (wallet.id === walletId) {
                return wallet;
            }
        });
    });

    if (wallet == null) {
        dispatch(
            WalletFetchReducer.fetchOne(
                WalletFetchActionCreator.fetchOne(walletId)
            )
        );

        return <WalletShowSkeletonBody />;
    }

    return <WalletShowBody wallet={wallet} />;
}
