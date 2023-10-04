import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import WalletBody from "./WalletBody";
import WalletFetchReducer from "../../../stores/reducers/wallet/WalletFetchReducer";
import WalletFetchActionCreator from "../../../stores/actions/wallet/WalletFetchActionCreator";
import WalletSkeletonBody from "./WalletSkeletonBody";
import {useEffect, useState} from "react";
import WalletTransactionFetchActionCreator
    from "../../../stores/actions/walletTransaction/WalletTransactionFetchActionCreator";
import WalletTransactionFetchReducer from "../../../stores/reducers/walletTransaction/WalletTransactionFetchReducer";
import {useSearchParams} from "react-router-dom";

export default function WalletShowComponent(props) {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [reload, setReload] = useState(0);

    let page = searchParams.get('page');
    if (page == null) {
        page = 1;
    }

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
                WalletTransactionFetchActionCreator.fetchAll(
                    walletId,
                    page
                )
            )
        );
    });

    function rerender() {
        setReload(reload + 1);

        dispatch(
            WalletFetchReducer.fetchOne(
                WalletFetchActionCreator.fetchOne(walletId)
            )
        );
    }

    if (wallet == null) {
        dispatch(
            WalletFetchReducer.fetchOne(
                WalletFetchActionCreator.fetchOne(walletId)
            )
        );

        return <WalletSkeletonBody />;
    }

    return <WalletBody
        wallet={wallet}
        rerenderFunction={rerender}
    />;
}
