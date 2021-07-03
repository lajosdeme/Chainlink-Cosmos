/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Quote } from "../linktest/quote";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "lajosdeme.linktest.linktest";

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

const baseQueryGetQuoteRequest: object = { id: 0 };

export const QueryGetQuoteRequest = {
  encode(
    message: QueryGetQuoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetQuoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetQuoteRequest } as QueryGetQuoteRequest;
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

  fromJSON(object: any): QueryGetQuoteRequest {
    const message = { ...baseQueryGetQuoteRequest } as QueryGetQuoteRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetQuoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetQuoteRequest>): QueryGetQuoteRequest {
    const message = { ...baseQueryGetQuoteRequest } as QueryGetQuoteRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetQuoteResponse: object = {};

export const QueryGetQuoteResponse = {
  encode(
    message: QueryGetQuoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Quote !== undefined) {
      Quote.encode(message.Quote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetQuoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetQuoteResponse } as QueryGetQuoteResponse;
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

  fromJSON(object: any): QueryGetQuoteResponse {
    const message = { ...baseQueryGetQuoteResponse } as QueryGetQuoteResponse;
    if (object.Quote !== undefined && object.Quote !== null) {
      message.Quote = Quote.fromJSON(object.Quote);
    } else {
      message.Quote = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetQuoteResponse): unknown {
    const obj: any = {};
    message.Quote !== undefined &&
      (obj.Quote = message.Quote ? Quote.toJSON(message.Quote) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetQuoteResponse>
  ): QueryGetQuoteResponse {
    const message = { ...baseQueryGetQuoteResponse } as QueryGetQuoteResponse;
    if (object.Quote !== undefined && object.Quote !== null) {
      message.Quote = Quote.fromPartial(object.Quote);
    } else {
      message.Quote = undefined;
    }
    return message;
  },
};

const baseQueryAllQuoteRequest: object = {};

export const QueryAllQuoteRequest = {
  encode(
    message: QueryAllQuoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllQuoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllQuoteRequest } as QueryAllQuoteRequest;
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

  fromJSON(object: any): QueryAllQuoteRequest {
    const message = { ...baseQueryAllQuoteRequest } as QueryAllQuoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllQuoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllQuoteRequest>): QueryAllQuoteRequest {
    const message = { ...baseQueryAllQuoteRequest } as QueryAllQuoteRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllQuoteResponse: object = {};

export const QueryAllQuoteResponse = {
  encode(
    message: QueryAllQuoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Quote) {
      Quote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllQuoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllQuoteResponse } as QueryAllQuoteResponse;
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

  fromJSON(object: any): QueryAllQuoteResponse {
    const message = { ...baseQueryAllQuoteResponse } as QueryAllQuoteResponse;
    message.Quote = [];
    if (object.Quote !== undefined && object.Quote !== null) {
      for (const e of object.Quote) {
        message.Quote.push(Quote.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllQuoteResponse): unknown {
    const obj: any = {};
    if (message.Quote) {
      obj.Quote = message.Quote.map((e) => (e ? Quote.toJSON(e) : undefined));
    } else {
      obj.Quote = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllQuoteResponse>
  ): QueryAllQuoteResponse {
    const message = { ...baseQueryAllQuoteResponse } as QueryAllQuoteResponse;
    message.Quote = [];
    if (object.Quote !== undefined && object.Quote !== null) {
      for (const e of object.Quote) {
        message.Quote.push(Quote.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Quote(request: QueryGetQuoteRequest): Promise<QueryGetQuoteResponse>;
  QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Quote(request: QueryGetQuoteRequest): Promise<QueryGetQuoteResponse> {
    const data = QueryGetQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lajosdeme.linktest.linktest.Query",
      "Quote",
      data
    );
    return promise.then((data) =>
      QueryGetQuoteResponse.decode(new Reader(data))
    );
  }

  QuoteAll(request: QueryAllQuoteRequest): Promise<QueryAllQuoteResponse> {
    const data = QueryAllQuoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lajosdeme.linktest.linktest.Query",
      "QuoteAll",
      data
    );
    return promise.then((data) =>
      QueryAllQuoteResponse.decode(new Reader(data))
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
