SHELL := /bin/bash
.PHONY: dirs all proto clean rebuild build simple help
ERL := erl
ERLC := $(ERL)c
MAKE_DIR := ./deps/make

EBIN_DIR := ebin
OUT_EBIN_DIR := $(EBIN_DIR)/game
EMULATOR := beam
ERLC_FLAGS := -W -Iinclude -Iinclude/proto -DLAGER
ERLC_FLAGS_DEBUG := $(ERLC_FLAGS) +export_all +debug_info -pa $(MAKE_DIR)

vpath %.erl $(wildcard data/ src/ src/*/ src/*/*/)
vpath % $(OUT_EBIN_DIR)/

ERL_SOURCES := $(notdir $(wildcard data/*.erl src/proto/*.erl))
ERL_OBJECTS_DEBUG := $(ERL_SOURCES:%.erl=%.$(EMULATOR))

ERL_SOURCES := $(notdir $(wildcard src/*.erl src/*/*.erl src/*/*/*.erl))
ERL_OBJECTS := $(filter-out $(ERL_OBJECTS_DEBUG), $(ERL_SOURCES:%.erl=%.$(EMULATOR)))

build: dirs
	@echo "编译代码 ..."
	@$(ERL) -pa $(MAKE_DIR) -pa ./deps/make -pa ./ebin/deps/lager -noinput \
	  -eval "case mmake:all(8,[$(MAKE_OPTS)]) of up_to_date -> halt(0); error -> halt(1) end."

rebuild: dirs clean build

all: dirs clean proto build

dirs:
	mkdir  -p ebin/game


simple: $(ERL_OBJECTS_DEBUG) $(ERL_OBJECTS)

##使用通配符方式指定每个文件的编译规则
%.$(EMULATOR): %.erl
	$(ERLC) $(ERLC_FLAGS_DEBUG) -o $(OUT_EBIN_DIR) $<

$(ERL_OBJECTS_DEBUG): %.$(EMULATOR): %.erl
	$(ERLC) $(ERLC_FLAGS) +nowarn_unused_function -o $(OUT_EBIN_DIR) $<

# 生成协议
proto:
	chmod u+x gen_proto
	@echo "生成协议 ..."
	@cd .; \
    escript gen_proto ../_build/default/gpb/bin/protoc-erl -I./src/proto -o-erl src/auto_generated -o-hrl ./src/include/proto -v never -strbin
	pbjs -t static-module -w closure --no-verify --no-convert --no-delimited --no-beautify --no-create -o apps/mmo/proto/protocol.js apps/mmo/proto/mmo_pb.proto
	pbts -n P --no-comments -o apps/mmo/proto/protocol.d.ts apps/mmo/proto/protocol.js
	@cd ./scripts/unix; ./pp.py
	uglifyjs apps/mmo/proto/protocol.js -m > apps/mmo/proto/protocol.min.js

proto_push:
	git subtree push --prefix=apps/mmo/proto ssh://git@gitlab.1cent.xyz:10022/x-project/public/y-proto.git master

proto_pull:
	git subtree pull --prefix=apps/mmo/proto ssh://git@gitlab.1cent.xyz:10022/x-project/public/y-proto.git master


clean:
	@echo "清理 ..."
	rm -rf $(OUT_EBIN_DIR)/*.beam

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "TARGETS:"
	@echo "   all       忽略依赖检查编译(default)"
	@echo "   proto     生成协议文件"
	@echo "   build     使用emake编译"
	@echo "   rebuild"
	@echo "   clean"
