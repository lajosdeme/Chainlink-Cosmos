import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "lajosdeme.linktest.linktest";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateQuote {
    creator: string;
    requester: string;
    oracle: string;
    text: string;
}
export interface MsgCreateQuoteResponse {
    id: number;
}
export interface MsgUpdateQuote {
    creator: string;
    id: number;
    requester: string;
    oracle: string;
    text: string;
}
export interface MsgUpdateQuoteResponse {
}
export interface MsgDeleteQuote {
    creator: string;
    id: number;
}
export interface MsgDeleteQuoteResponse {
}
export interface MsgRequestQuote {
    creator: string;
    requester: string;
    oracle: string;
}
export interface MsgRequestQuoteResponse {
}
export declare const MsgCreateQuote: {
    encode(message: MsgCreateQuote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateQuote;
    fromJSON(object: any): MsgCreateQuote;
    toJSON(message: MsgCreateQuote): unknown;
    fromPartial(object: DeepPartial<MsgCreateQuote>): MsgCreateQuote;
};
export declare const MsgCreateQuoteResponse: {
    encode(message: MsgCreateQuoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateQuoteResponse;
    fromJSON(object: any): MsgCreateQuoteResponse;
    toJSON(message: MsgCreateQuoteResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateQuoteResponse>): MsgCreateQuoteResponse;
};
export declare const MsgUpdateQuote: {
    encode(message: MsgUpdateQuote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateQuote;
    fromJSON(object: any): MsgUpdateQuote;
    toJSON(message: MsgUpdateQuote): unknown;
    fromPartial(object: DeepPartial<MsgUpdateQuote>): MsgUpdateQuote;
};
export declare const MsgUpdateQuoteResponse: {
    encode(_: MsgUpdateQuoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateQuoteResponse;
    fromJSON(_: any): MsgUpdateQuoteResponse;
    toJSON(_: MsgUpdateQuoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateQuoteResponse>): MsgUpdateQuoteResponse;
};
export declare const MsgDeleteQuote: {
    encode(message: MsgDeleteQuote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteQuote;
    fromJSON(object: any): MsgDeleteQuote;
    toJSON(message: MsgDeleteQuote): unknown;
    fromPartial(object: DeepPartial<MsgDeleteQuote>): MsgDeleteQuote;
};
export declare const MsgDeleteQuoteResponse: {
    encode(_: MsgDeleteQuoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteQuoteResponse;
    fromJSON(_: any): MsgDeleteQuoteResponse;
    toJSON(_: MsgDeleteQuoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteQuoteResponse>): MsgDeleteQuoteResponse;
};
export declare const MsgRequestQuote: {
    encode(message: MsgRequestQuote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestQuote;
    fromJSON(object: any): MsgRequestQuote;
    toJSON(message: MsgRequestQuote): unknown;
    fromPartial(object: DeepPartial<MsgRequestQuote>): MsgRequestQuote;
};
export declare const MsgRequestQuoteResponse: {
    encode(_: MsgRequestQuoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestQuoteResponse;
    fromJSON(_: any): MsgRequestQuoteResponse;
    toJSON(_: MsgRequestQuoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgRequestQuoteResponse>): MsgRequestQuoteResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse>;
    UpdateQuote(request: MsgUpdateQuote): Promise<MsgUpdateQuoteResponse>;
    DeleteQuote(request: MsgDeleteQuote): Promise<MsgDeleteQuoteResponse>;
    RequestQuote(request: MsgRequestQuote): Promise<MsgRequestQuoteResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse>;
    UpdateQuote(request: MsgUpdateQuote): Promise<MsgUpdateQuoteResponse>;
    DeleteQuote(request: MsgDeleteQuote): Promise<MsgDeleteQuoteResponse>;
    RequestQuote(request: MsgRequestQuote): Promise<MsgRequestQuoteResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
