import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import WalletBody from "./WalletBody";
import WalletFetchReducer from "../../../stores/reducers/wallet/WalletFetchReducer";
import WalletFetchActionCreator from "../../../stores/actions/wallet/WalletFetchActionCreator";
import WalletSkeletonBody from "./WalletSkeletonBody";
import {useEffect} from "react";
import WalletTransactionFetchActionCreator
    from "../../../stores/actions/walletTransaction/WalletTransactionFetchActionCreator";
import WalletTransactionFetchReducer from "../../../stores/reducers/walletTransaction/WalletTransactionFetchReducer";

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

    useEffect(() => {
        dispatch(
            WalletTransactionFetchReducer.fetchAll(
                WalletTransactionFetchActionCreator.fetchAll(walletId)
            )
        );
    }, []);

    if (wallet == null) {
        dispatch(
            WalletFetchReducer.fetchOne(
                WalletFetchActionCreator.fetchOne(walletId)
            )
        );

        return <WalletSkeletonBody />;
    }

    return <WalletBody wallet={wallet} />;
}
