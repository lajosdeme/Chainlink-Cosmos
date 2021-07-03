/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "lajosdeme.linktest.linktest";

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

export interface MsgUpdateQuoteResponse {}

export interface MsgDeleteQuote {
  creator: string;
  id: number;
}

export interface MsgDeleteQuoteResponse {}

export interface MsgRequestQuote {
  creator: string;
  requester: string;
  oracle: string;
}

export interface MsgRequestQuoteResponse {}

const baseMsgCreateQuote: object = {
  creator: "",
  requester: "",
  oracle: "",
  text: "",
};

export const MsgCreateQuote = {
  encode(message: MsgCreateQuote, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateQuote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateQuote } as MsgCreateQuote;
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

  fromJSON(object: any): MsgCreateQuote {
    const message = { ...baseMsgCreateQuote } as MsgCreateQuote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateQuote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requester !== undefined && (obj.requester = message.requester);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateQuote>): MsgCreateQuote {
    const message = { ...baseMsgCreateQuote } as MsgCreateQuote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateQuoteResponse: object = { id: 0 };

export const MsgCreateQuoteResponse = {
  encode(
    message: MsgCreateQuoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateQuoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateQuoteResponse } as MsgCreateQuoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateQuoteResponse {
    const message = { ...baseMsgCreateQuoteResponse } as MsgCreateQuoteResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateQuoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateQuoteResponse>
  ): MsgCreateQuoteResponse {
    const message = { ...baseMsgCreateQuoteResponse } as MsgCreateQuoteResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateQuote: object = {
  creator: "",
  id: 0,
  requester: "",
  oracle: "",
  text: "",
};

export const MsgUpdateQuote = {
  encode(message: MsgUpdateQuote, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateQuote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateQuote } as MsgUpdateQuote;
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

  fromJSON(object: any): MsgUpdateQuote {
    const message = { ...baseMsgUpdateQuote } as MsgUpdateQuote;
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

  toJSON(message: MsgUpdateQuote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.requester !== undefined && (obj.requester = message.requester);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateQuote>): MsgUpdateQuote {
    const message = { ...baseMsgUpdateQuote } as MsgUpdateQuote;
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

const baseMsgUpdateQuoteResponse: object = {};

export const MsgUpdateQuoteResponse = {
  encode(_: MsgUpdateQuoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateQuoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateQuoteResponse } as MsgUpdateQuoteResponse;
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

  fromJSON(_: any): MsgUpdateQuoteResponse {
    const message = { ...baseMsgUpdateQuoteResponse } as MsgUpdateQuoteResponse;
    return message;
  },

  toJSON(_: MsgUpdateQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateQuoteResponse>): MsgUpdateQuoteResponse {
    const message = { ...baseMsgUpdateQuoteResponse } as MsgUpdateQuoteResponse;
    return message;
  },
};

const baseMsgDeleteQuote: object = { creator: "", id: 0 };

export const MsgDeleteQuote = {
  encode(message: MsgDeleteQuote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteQuote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteQuote } as MsgDeleteQuote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteQuote {
    const message = { ...baseMsgDeleteQuote } as MsgDeleteQuote;
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
    return message;
  },

  toJSON(message: MsgDeleteQuote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteQuote>): MsgDeleteQuote {
    const message = { ...baseMsgDeleteQuote } as MsgDeleteQuote;
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
    return message;
  },
};

const baseMsgDeleteQuoteResponse: object = {};

export const MsgDeleteQuoteResponse = {
  encode(_: MsgDeleteQuoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteQuoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteQuoteResponse } as MsgDeleteQuoteResponse;
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

  fromJSON(_: any): MsgDeleteQuoteResponse {
    const message = { ...baseMsgDeleteQuoteResponse } as MsgDeleteQuoteResponse;
    return message;
  },

  toJSON(_: MsgDeleteQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteQuoteResponse>): MsgDeleteQuoteResponse {
    const message = { ...baseMsgDeleteQuoteResponse } as MsgDeleteQuoteResponse;
    return message;
  },
};

const baseMsgRequestQuote: object = { creator: "", requester: "", oracle: "" };

export const MsgRequestQuote = {
  encode(message: MsgRequestQuote, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgRequestQuote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestQuote } as MsgRequestQuote;
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

  fromJSON(object: any): MsgRequestQuote {
    const message = { ...baseMsgRequestQuote } as MsgRequestQuote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgRequestQuote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.requester !== undefined && (obj.requester = message.requester);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRequestQuote>): MsgRequestQuote {
    const message = { ...baseMsgRequestQuote } as MsgRequestQuote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgRequestQuoteResponse: object = {};

export const MsgRequestQuoteResponse = {
  encode(_: MsgRequestQuoteResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestQuoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestQuoteResponse,
    } as MsgRequestQuoteResponse;
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

  fromJSON(_: any): MsgRequestQuoteResponse {
    const message = {
      ...baseMsgRequestQuoteResponse,
    } as MsgRequestQuoteResponse;
    return message;
  },

  toJSON(_: MsgRequestQuoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRequestQuoteResponse>
  ): MsgRequestQuoteResponse {
    const message = {
      ...baseMsgRequestQuoteResponse,
    } as MsgRequestQuoteResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse>;
  UpdateQuote(request: MsgUpdateQuote): Promise<MsgUpdateQuoteResponse>;
  DeleteQuote(request: MsgDeleteQuote): Promise<MsgDeleteQuoteResponse>;
  RequestQuote(request: MsgRequestQuote): Promise<MsgRequestQuoteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateQuote(request: MsgCreateQuote): Promise<MsgCreateQuoteResponse> {
    const data = MsgCreateQuote.encode(request).finish();
    const promise = this.rpc.request(
      "lajosdeme.linktest.linktest.Msg",
      "CreateQuote",
      data
    );
    return promise.then((data) =>
      MsgCreateQuoteResponse.decode(new Reader(data))
    );
  }

  UpdateQuote(request: MsgUpdateQuote): Promise<MsgUpdateQuoteResponse> {
    const data = MsgUpdateQuote.encode(request).finish();
    const promise = this.rpc.request(
      "lajosdeme.linktest.linktest.Msg",
      "UpdateQuote",
      data
    );
    return promise.then((data) =>
      MsgUpdateQuoteResponse.decode(new Reader(data))
    );
  }

  DeleteQuote(request: MsgDeleteQuote): Promise<MsgDeleteQuoteResponse> {
    const data = MsgDeleteQuote.encode(request).finish();
    const promise = this.rpc.request(
      "lajosdeme.linktest.linktest.Msg",
      "DeleteQuote",
      data
    );
    return promise.then((data) =>
      MsgDeleteQuoteResponse.decode(new Reader(data))
    );
  }

  RequestQuote(request: MsgRequestQuote): Promise<MsgRequestQuoteResponse> {
    const data = MsgRequestQuote.encode(request).finish();
    const promise = this.rpc.request(
      "lajosdeme.linktest.linktest.Msg",
      "RequestQuote",
      data
    );
    return promise.then((data) =>
      MsgRequestQuoteResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
