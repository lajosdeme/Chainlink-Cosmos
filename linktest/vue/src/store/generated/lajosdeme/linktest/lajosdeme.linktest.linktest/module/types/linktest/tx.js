/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "lajosdeme.linktest.linktest";
const baseMsgCreateQuote = {
    creator: "",
    requester: "",
    oracle: "",
    text: "",
};
export const MsgCreateQuote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.requester !== "") {
            writer.uint32(18).string(message.requester);
        }
        if (message.oracle !== "") {
            writer.uint32(26).string(message.oracle);
        }
        if (message.text !== "") {
            writer.uint32(34).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateQuote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.requester = reader.string();
                    break;
                case 3:
                    message.oracle = reader.string();
                    break;
                case 4:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = String(object.requester);
        }
        else {
            message.requester = "";
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = String(object.oracle);
        }
        else {
            message.oracle = "";
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.requester !== undefined && (obj.requester = message.requester);
        message.oracle !== undefined && (obj.oracle = message.oracle);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = object.requester;
        }
        else {
            message.requester = "";
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = object.oracle;
        }
        else {
            message.oracle = "";
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = "";
        }
        return message;
    },
};
const baseMsgCreateQuoteResponse = { id: 0 };
export const MsgCreateQuoteResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateQuoteResponse };
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
        const message = { ...baseMsgCreateQuoteResponse };
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
        const message = { ...baseMsgCreateQuoteResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateQuote = {
    creator: "",
    id: 0,
    requester: "",
    oracle: "",
    text: "",
};
export const MsgUpdateQuote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.requester !== "") {
            writer.uint32(26).string(message.requester);
        }
        if (message.oracle !== "") {
            writer.uint32(34).string(message.oracle);
        }
        if (message.text !== "") {
            writer.uint32(42).string(message.text);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateQuote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.requester = reader.string();
                    break;
                case 4:
                    message.oracle = reader.string();
                    break;
                case 5:
                    message.text = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = String(object.requester);
        }
        else {
            message.requester = "";
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = String(object.oracle);
        }
        else {
            message.oracle = "";
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.requester !== undefined && (obj.requester = message.requester);
        message.oracle !== undefined && (obj.oracle = message.oracle);
        message.text !== undefined && (obj.text = message.text);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = object.requester;
        }
        else {
            message.requester = "";
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = object.oracle;
        }
        else {
            message.oracle = "";
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = "";
        }
        return message;
    },
};
const baseMsgUpdateQuoteResponse = {};
export const MsgUpdateQuoteResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateQuoteResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateQuoteResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateQuoteResponse };
        return message;
    },
};
const baseMsgDeleteQuote = { creator: "", id: 0 };
export const MsgDeleteQuote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteQuote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteQuoteResponse = {};
export const MsgDeleteQuoteResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteQuoteResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteQuoteResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteQuoteResponse };
        return message;
    },
};
const baseMsgRequestQuote = { creator: "", requester: "", oracle: "" };
export const MsgRequestQuote = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.requester !== "") {
            writer.uint32(18).string(message.requester);
        }
        if (message.oracle !== "") {
            writer.uint32(26).string(message.oracle);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestQuote };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.requester = reader.string();
                    break;
                case 3:
                    message.oracle = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRequestQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = String(object.requester);
        }
        else {
            message.requester = "";
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = String(object.oracle);
        }
        else {
            message.oracle = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.requester !== undefined && (obj.requester = message.requester);
        message.oracle !== undefined && (obj.oracle = message.oracle);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRequestQuote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.requester !== undefined && object.requester !== null) {
            message.requester = object.requester;
        }
        else {
            message.requester = "";
        }
        if (object.oracle !== undefined && object.oracle !== null) {
            message.oracle = object.oracle;
        }
        else {
            message.oracle = "";
        }
        return message;
    },
};
const baseMsgRequestQuoteResponse = {};
export const MsgRequestQuoteResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestQuoteResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgRequestQuoteResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRequestQuoteResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateQuote(request) {
        const data = MsgCreateQuote.encode(request).finish();
        const promise = this.rpc.request("lajosdeme.linktest.linktest.Msg", "CreateQuote", data);
        return promise.then((data) => MsgCreateQuoteResponse.decode(new Reader(data)));
    }
    UpdateQuote(request) {
        const data = MsgUpdateQuote.encode(request).finish();
        const promise = this.rpc.request("lajosdeme.linktest.linktest.Msg", "UpdateQuote", data);
        return promise.then((data) => MsgUpdateQuoteResponse.decode(new Reader(data)));
    }
    DeleteQuote(request) {
        const data = MsgDeleteQuote.encode(request).finish();
        const promise = this.rpc.request("lajosdeme.linktest.linktest.Msg", "DeleteQuote", data);
        return promise.then((data) => MsgDeleteQuoteResponse.decode(new Reader(data)));
    }
    RequestQuote(request) {
        const data = MsgRequestQuote.encode(request).finish();
        const promise = this.rpc.request("lajosdeme.linktest.linktest.Msg", "RequestQuote", data);
        return promise.then((data) => MsgRequestQuoteResponse.decode(new Reader(data)));
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
