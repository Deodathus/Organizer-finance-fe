import OrganizerApi from "../../utils/dictionaries/routes/api/organizer-api";
import OrganizerApiClient from "../../utils/OrganizerApiClient";

export default function StoreWallet(name, balance, currencyCode) {
    const api = OrganizerApi();

    balance = String(balance);

    return OrganizerApiClient.post(api.wallet.store.one, {
        name,
        balance,
        currencyCode
    });
}
