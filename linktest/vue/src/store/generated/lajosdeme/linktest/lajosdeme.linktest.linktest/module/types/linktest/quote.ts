/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "lajosdeme.linktest.linktest";

export interface Quote {
  creator: string;
  id: number;
  requester: string;
  oracle: string;
  text: string;
}

const baseQuote: object = {
  creator: "",
  id: 0,
  requester: "",
  oracle: "",
  text: "",
};

export const Quote = {
  encode(message: Quote, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Quote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuote } as Quote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): Quote {
    const message = { ...baseQuote } as Quote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = String(object.requester);
    } else {
      message.requester = "";
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = String(object.oracle);
    } else {
      message.oracle = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = String(object.text);
    } else {
      message.text = "";
    }
    return message;
  },

  toJSON(message: Quote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.requester !== undefined && (obj.requester = message.requester);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<Quote>): Quote {
    const message = { ...baseQuote } as Quote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester;
    } else {
      message.requester = "";
    }
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = object.oracle;
    } else {
      message.oracle = "";
    }
    if (object.text !== undefined && object.text !== null) {
      message.text = object.text;
    } else {
      message.text = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
