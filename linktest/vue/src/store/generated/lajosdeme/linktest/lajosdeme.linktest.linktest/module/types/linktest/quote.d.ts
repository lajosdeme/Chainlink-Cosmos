import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "lajosdeme.linktest.linktest";
export interface Quote {
    creator: string;
    id: number;
    requester: string;
    oracle: string;
    text: string;
}
export declare const Quote: {
    encode(message: Quote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Quote;
    fromJSON(object: any): Quote;
    toJSON(message: Quote): unknown;
    fromPartial(object: DeepPartial<Quote>): Quote;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
