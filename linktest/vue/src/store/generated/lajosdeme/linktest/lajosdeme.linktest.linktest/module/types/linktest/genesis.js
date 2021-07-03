/* eslint-disable */
import { Quote } from "../linktest/quote";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "lajosdeme.linktest.linktest";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.quoteList) {
            Quote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.quoteList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quoteList.push(Quote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.quoteList = [];
        if (object.quoteList !== undefined && object.quoteList !== null) {
            for (const e of object.quoteList) {
                message.quoteList.push(Quote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.quoteList) {
            obj.quoteList = message.quoteList.map((e) => e ? Quote.toJSON(e) : undefined);
        }
        else {
            obj.quoteList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.quoteList = [];
        if (object.quoteList !== undefined && object.quoteList !== null) {
            for (const e of object.quoteList) {
                message.quoteList.push(Quote.fromPartial(e));
            }
        }
        return message;
    },
};
