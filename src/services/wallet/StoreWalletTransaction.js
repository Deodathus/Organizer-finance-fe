import OrganizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function StoreWalletTransaction(
    walletId,
    transactionAmount,
    transactionCurrencyCode,
    transactionType
) {
    const api = OrganizerApi();

    return OrganizerApiClient.post(
        api.walletTransaction.store.one.replace('{walletId}', walletId),
        {
            transactionAmount,
            transactionCurrencyCode,
            transactionType
        }
    );
}
