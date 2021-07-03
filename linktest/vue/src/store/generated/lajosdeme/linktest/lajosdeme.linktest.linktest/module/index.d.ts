import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateQuote } from "./types/linktest/tx";
import { MsgDeleteQuote } from "./types/linktest/tx";
import { MsgRequestQuote } from "./types/linktest/tx";
import { MsgCreateQuote } from "./types/linktest/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateQuote: (data: MsgUpdateQuote) => EncodeObject;
    msgDeleteQuote: (data: MsgDeleteQuote) => EncodeObject;
    msgRequestQuote: (data: MsgRequestQuote) => EncodeObject;
    msgCreateQuote: (data: MsgCreateQuote) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
