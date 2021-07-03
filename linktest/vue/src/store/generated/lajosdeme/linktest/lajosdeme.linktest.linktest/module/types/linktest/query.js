/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Quote } from "../linktest/quote";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "lajosdeme.linktest.linktest";
const baseQueryGetQuoteRequest = { id: 0 };
export const QueryGetQuoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetQuoteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetQuoteRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetQuoteRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetQuoteResponse = {};
export const QueryGetQuoteResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Quote !== undefined) {
            Quote.encode(message.Quote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetQuoteResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Quote = Quote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetQuoteResponse };
        if (object.Quote !== undefined && object.Quote !== null) {
            message.Quote = Quote.fromJSON(object.Quote);
        }
        else {
            message.Quote = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Quote !== undefined &&
            (obj.Quote = message.Quote ? Quote.toJSON(message.Quote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetQuoteResponse };
        if (object.Quote !== undefined && object.Quote !== null) {
            message.Quote = Quote.fromPartial(object.Quote);
        }
        else {
            message.Quote = undefined;
        }
        return message;
    },
};
const baseQueryAllQuoteRequest = {};
export const QueryAllQuoteRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllQuoteRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllQuoteRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllQuoteRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllQuoteResponse = {};
export const QueryAllQuoteResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Quote) {
            Quote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllQuoteResponse };
        message.Quote = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Quote.push(Quote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllQuoteResponse };
        message.Quote = [];
        if (object.Quote !== undefined && object.Quote !== null) {
            for (const e of object.Quote) {
                message.Quote.push(Quote.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Quote) {
            obj.Quote = message.Quote.map((e) => (e ? Quote.toJSON(e) : undefined));
        }
        else {
            obj.Quote = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllQuoteResponse };
        message.Quote = [];
        if (object.Quote !== undefined && object.Quote !== null) {
            for (const e of object.Quote) {
                message.Quote.push(Quote.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Quote(request) {
        const data = QueryGetQuoteRequest.encode(request).finish();
        const promise = this.rpc.request("lajosdeme.linktest.linktest.Query", "Quote", data);
        return promise.then((data) => QueryGetQuoteResponse.decode(new Reader(data)));
    }
    QuoteAll(request) {
        const data = QueryAllQuoteRequest.encode(request).finish();
        const promise = this.rpc.request("lajosdeme.linktest.linktest.Query", "QuoteAll", data);
        return promise.then((data) => QueryAllQuoteResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
