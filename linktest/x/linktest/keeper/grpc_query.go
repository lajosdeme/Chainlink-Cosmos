package keeper

import (
	"github.com/lajosdeme/linktest/x/linktest/types"
)

var _ types.QueryServer = Keeper{}
