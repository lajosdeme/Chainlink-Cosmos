import { Reader, Writer } from "protobufjs/minimal";
import { Quote } from "../linktest/quote";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "lajosdeme.linktest.linktest";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetQuoteRequest {
    id: number;
}
export interface QueryGetQuoteResponse {
    Quote: Quote | undefined;
}
export interface QueryAllQuoteRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllQuoteResponse {
    Quote: Quote[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetQuoteRequest: {
    encode(message: QueryGetQuoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetQuoteRequest;
    fromJSON(object: any): QueryGetQuoteRequest;
    toJSON(message: QueryGetQuoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetQuoteRequest>): QueryGetQuoteRequest;
};
export declare const QueryGetQuoteResponse: {
    encode(message: QueryGetQuoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetQuoteResponse;
    fromJSON(object: any): QueryGetQuoteResponse;
    toJSON(message: QueryGetQuoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetQuoteResponse>): QueryGetQuoteResponse;
};
export declare const QueryAllQuoteRequest: {
    encode(message: QueryAllQuoteRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllQuoteRequest;
    fromJSON(object: any): QueryAllQuoteRequest;
    toJSON(message: QueryAllQuoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllQuoteRequest>): QueryAllQuoteRequest;
};
export declare const QueryAllQuoteResponse: {
    encode(message: QueryAllQuoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllQuoteResponse;
    fromJSON(object: any): QueryAllQuoteResponse;
    toJSON(message: QueryAllQuoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllQuoteResponse>): QueryAllQuoteResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Quote(request: QueryGetQuoteRequest): Promise<QueryGetQuoteResponse>;
    QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Quote(request: QueryGetQuoteRequest): Promise<QueryGetQuoteResponse>;
    QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
