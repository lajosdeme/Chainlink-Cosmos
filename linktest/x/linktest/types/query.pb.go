// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: linktest/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// this line is used by starport scaffolding # 3
type QueryGetQuoteRequest struct {
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (m *QueryGetQuoteRequest) Reset()         { *m = QueryGetQuoteRequest{} }
func (m *QueryGetQuoteRequest) String() string { return proto.CompactTextString(m) }
func (*QueryGetQuoteRequest) ProtoMessage()    {}
func (*QueryGetQuoteRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fd82591a74a52101, []int{0}
}
func (m *QueryGetQuoteRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetQuoteRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetQuoteRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetQuoteRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetQuoteRequest.Merge(m, src)
}
func (m *QueryGetQuoteRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetQuoteRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetQuoteRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetQuoteRequest proto.InternalMessageInfo

func (m *QueryGetQuoteRequest) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

type QueryGetQuoteResponse struct {
	Quote *Quote `protobuf:"bytes,1,opt,name=Quote,proto3" json:"Quote,omitempty"`
}

func (m *QueryGetQuoteResponse) Reset()         { *m = QueryGetQuoteResponse{} }
func (m *QueryGetQuoteResponse) String() string { return proto.CompactTextString(m) }
func (*QueryGetQuoteResponse) ProtoMessage()    {}
func (*QueryGetQuoteResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fd82591a74a52101, []int{1}
}
func (m *QueryGetQuoteResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryGetQuoteResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryGetQuoteResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryGetQuoteResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryGetQuoteResponse.Merge(m, src)
}
func (m *QueryGetQuoteResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryGetQuoteResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryGetQuoteResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryGetQuoteResponse proto.InternalMessageInfo

func (m *QueryGetQuoteResponse) GetQuote() *Quote {
	if m != nil {
		return m.Quote
	}
	return nil
}

type QueryAllQuoteRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllQuoteRequest) Reset()         { *m = QueryAllQuoteRequest{} }
func (m *QueryAllQuoteRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllQuoteRequest) ProtoMessage()    {}
func (*QueryAllQuoteRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fd82591a74a52101, []int{2}
}
func (m *QueryAllQuoteRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllQuoteRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllQuoteRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllQuoteRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllQuoteRequest.Merge(m, src)
}
func (m *QueryAllQuoteRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllQuoteRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllQuoteRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllQuoteRequest proto.InternalMessageInfo

func (m *QueryAllQuoteRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

type QueryAllQuoteResponse struct {
	Quote      []*Quote            `protobuf:"bytes,1,rep,name=Quote,proto3" json:"Quote,omitempty"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllQuoteResponse) Reset()         { *m = QueryAllQuoteResponse{} }
func (m *QueryAllQuoteResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllQuoteResponse) ProtoMessage()    {}
func (*QueryAllQuoteResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_fd82591a74a52101, []int{3}
}
func (m *QueryAllQuoteResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllQuoteResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllQuoteResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllQuoteResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllQuoteResponse.Merge(m, src)
}
func (m *QueryAllQuoteResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllQuoteResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllQuoteResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllQuoteResponse proto.InternalMessageInfo

func (m *QueryAllQuoteResponse) GetQuote() []*Quote {
	if m != nil {
		return m.Quote
	}
	return nil
}

func (m *QueryAllQuoteResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryGetQuoteRequest)(nil), "lajosdeme.linktest.linktest.QueryGetQuoteRequest")
	proto.RegisterType((*QueryGetQuoteResponse)(nil), "lajosdeme.linktest.linktest.QueryGetQuoteResponse")
	proto.RegisterType((*QueryAllQuoteRequest)(nil), "lajosdeme.linktest.linktest.QueryAllQuoteRequest")
	proto.RegisterType((*QueryAllQuoteResponse)(nil), "lajosdeme.linktest.linktest.QueryAllQuoteResponse")
}

func init() { proto.RegisterFile("linktest/query.proto", fileDescriptor_fd82591a74a52101) }

var fileDescriptor_fd82591a74a52101 = []byte{
	// 395 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0xcf, 0x4a, 0x2b, 0x31,
	0x14, 0xc6, 0x9b, 0xb9, 0x7f, 0xb8, 0xe4, 0x82, 0x8b, 0x50, 0x41, 0xaa, 0x0c, 0x12, 0xa4, 0xd5,
	0x2e, 0x12, 0x5a, 0x37, 0x6e, 0xeb, 0xc2, 0xba, 0xb4, 0x5d, 0xba, 0x10, 0x32, 0x9d, 0x30, 0x46,
	0xa7, 0x93, 0x69, 0x93, 0x8a, 0x45, 0xdc, 0xf8, 0x04, 0x82, 0x3b, 0x41, 0x7c, 0x1d, 0xdd, 0x15,
	0xdc, 0xb8, 0x94, 0xd6, 0x07, 0x91, 0x49, 0xa6, 0xff, 0xc5, 0xb6, 0xbb, 0x70, 0xe6, 0x7c, 0xe7,
	0xfb, 0x7d, 0x73, 0x12, 0x98, 0x0d, 0x45, 0x74, 0xa9, 0xb9, 0xd2, 0xb4, 0xd5, 0xe1, 0xed, 0x2e,
	0x89, 0xdb, 0x52, 0x4b, 0xb4, 0x19, 0xb2, 0x0b, 0xa9, 0x7c, 0xde, 0xe4, 0x64, 0xf8, 0x7d, 0x74,
	0xc8, 0x6d, 0x05, 0x52, 0x06, 0x21, 0xa7, 0x2c, 0x16, 0x94, 0x45, 0x91, 0xd4, 0x4c, 0x0b, 0x19,
	0x29, 0x2b, 0xcd, 0x15, 0x1b, 0x52, 0x35, 0xa5, 0xa2, 0x1e, 0x53, 0xdc, 0xce, 0xa4, 0x57, 0x25,
	0x8f, 0x6b, 0x56, 0xa2, 0x31, 0x0b, 0x44, 0x64, 0x9a, 0xd3, 0xde, 0x49, 0x73, 0xa9, 0xb9, 0xad,
	0xe2, 0x3c, 0xcc, 0xd6, 0x12, 0x5d, 0x95, 0xeb, 0x5a, 0x52, 0xae, 0xf3, 0x56, 0x87, 0x2b, 0x8d,
	0xd6, 0xa0, 0x23, 0xfc, 0x0d, 0xb0, 0x0d, 0x76, 0x7f, 0xd7, 0x1d, 0xe1, 0xe3, 0x1a, 0x5c, 0x9f,
	0xe9, 0x53, 0xb1, 0x8c, 0x14, 0x47, 0x07, 0xf0, 0x8f, 0x29, 0x98, 0xde, 0xff, 0x65, 0x4c, 0x7e,
	0x48, 0x43, 0xac, 0xd4, 0x0a, 0xf0, 0x59, 0x6a, 0x5d, 0x09, 0xc3, 0x29, 0xeb, 0x23, 0x08, 0xc7,
	0xf0, 0xe9, 0xd8, 0x3c, 0xb1, 0x49, 0x49, 0x92, 0x94, 0xd8, 0xbf, 0x97, 0x26, 0x25, 0x27, 0x2c,
	0x18, 0x6a, 0xeb, 0x13, 0x4a, 0xfc, 0x08, 0x52, 0xe6, 0xb1, 0xc1, 0x3c, 0xf3, 0xaf, 0x95, 0x98,
	0x51, 0x75, 0x8a, 0xcd, 0x31, 0x6c, 0x85, 0x85, 0x6c, 0xd6, 0x76, 0x12, 0xae, 0xfc, 0xea, 0x24,
	0x0c, 0xbc, 0xdd, 0x45, 0xcf, 0x20, 0xa5, 0x41, 0xa5, 0x05, 0x1c, 0xf3, 0x6b, 0xca, 0x95, 0x57,
	0x91, 0x58, 0x0c, 0x4c, 0xef, 0xde, 0x3e, 0x1f, 0x9c, 0x3d, 0x54, 0xa0, 0x23, 0x2d, 0x1d, 0xdd,
	0x8d, 0xe9, 0x4b, 0x42, 0x6f, 0x84, 0x7f, 0x8b, 0x9e, 0x00, 0xfc, 0x67, 0x46, 0x54, 0xc2, 0x70,
	0x19, 0xc8, 0x99, 0x85, 0x2e, 0x03, 0x39, 0xbb, 0x22, 0x5c, 0x34, 0x90, 0x3b, 0x08, 0x2f, 0x86,
	0x3c, 0x3c, 0x7e, 0xe9, 0xbb, 0xa0, 0xd7, 0x77, 0xc1, 0x47, 0xdf, 0x05, 0xf7, 0x03, 0x37, 0xd3,
	0x1b, 0xb8, 0x99, 0xf7, 0x81, 0x9b, 0x39, 0x25, 0x81, 0xd0, 0xe7, 0x1d, 0x8f, 0x34, 0x64, 0xf3,
	0xbb, 0x39, 0xd7, 0xe3, 0xa3, 0xee, 0xc6, 0x5c, 0x79, 0x7f, 0xcd, 0xa3, 0xd8, 0xff, 0x0a, 0x00,
	0x00, 0xff, 0xff, 0x8d, 0x39, 0xc0, 0xae, 0xa9, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// this line is used by starport scaffolding # 2
	Quote(ctx context.Context, in *QueryGetQuoteRequest, opts ...grpc.CallOption) (*QueryGetQuoteResponse, error)
	QuoteAll(ctx context.Context, in *QueryAllQuoteRequest, opts ...grpc.CallOption) (*QueryAllQuoteResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Quote(ctx context.Context, in *QueryGetQuoteRequest, opts ...grpc.CallOption) (*QueryGetQuoteResponse, error) {
	out := new(QueryGetQuoteResponse)
	err := c.cc.Invoke(ctx, "/lajosdeme.linktest.linktest.Query/Quote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) QuoteAll(ctx context.Context, in *QueryAllQuoteRequest, opts ...grpc.CallOption) (*QueryAllQuoteResponse, error) {
	out := new(QueryAllQuoteResponse)
	err := c.cc.Invoke(ctx, "/lajosdeme.linktest.linktest.Query/QuoteAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// this line is used by starport scaffolding # 2
	Quote(context.Context, *QueryGetQuoteRequest) (*QueryGetQuoteResponse, error)
	QuoteAll(context.Context, *QueryAllQuoteRequest) (*QueryAllQuoteResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Quote(ctx context.Context, req *QueryGetQuoteRequest) (*QueryGetQuoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Quote not implemented")
}
func (*UnimplementedQueryServer) QuoteAll(ctx context.Context, req *QueryAllQuoteRequest) (*QueryAllQuoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method QuoteAll not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Quote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryGetQuoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Quote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lajosdeme.linktest.linktest.Query/Quote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Quote(ctx, req.(*QueryGetQuoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_QuoteAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllQuoteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).QuoteAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lajosdeme.linktest.linktest.Query/QuoteAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).QuoteAll(ctx, req.(*QueryAllQuoteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "lajosdeme.linktest.linktest.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Quote",
			Handler:    _Query_Quote_Handler,
		},
		{
			MethodName: "QuoteAll",
			Handler:    _Query_QuoteAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "linktest/query.proto",
}

func (m *QueryGetQuoteRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetQuoteRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetQuoteRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Id != 0 {
		i = encodeVarintQuery(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *QueryGetQuoteResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryGetQuoteResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryGetQuoteResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Quote != nil {
		{
			size, err := m.Quote.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllQuoteRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllQuoteRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllQuoteRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllQuoteResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllQuoteResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllQuoteResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Quote) > 0 {
		for iNdEx := len(m.Quote) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Quote[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryGetQuoteRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovQuery(uint64(m.Id))
	}
	return n
}

func (m *QueryGetQuoteResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Quote != nil {
		l = m.Quote.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllQuoteRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllQuoteResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.Quote) > 0 {
		for _, e := range m.Quote {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryGetQuoteRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetQuoteRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetQuoteRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryGetQuoteResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryGetQuoteResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryGetQuoteResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Quote", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Quote == nil {
				m.Quote = &Quote{}
			}
			if err := m.Quote.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllQuoteRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllQuoteRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllQuoteRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAllQuoteResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAllQuoteResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllQuoteResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Quote", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Quote = append(m.Quote, &Quote{})
			if err := m.Quote[len(m.Quote)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
