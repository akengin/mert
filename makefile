#!/usr/bin/env make -f

OS_TYPE  := $(shell uname -s | tr A-Z a-z)
CPU_TYPE := $(shell uname -m)
NAME := mert
ADDR := 0.0.0.0
PORT := 8000
DIR  := .


ifeq ($(CPU_TYPE),x86_64)
	ARCH := amd64
endif

ifeq ($(CPU_TYPE),armv7l)
	ARCH := arm
endif

WEBSOCKETD_VERSION := 0.3.1
WEBSOCKETD_BASEURL := https://github.com/joewalnes/websocketd/releases
WEBSOCKETD_FULLURL := $(WEBSOCKETD_BASEURL)/download/v$(WEBSOCKETD_VERSION)/websocketd-$(WEBSOCKETD_VERSION)-$(OS_TYPE)_$(ARCH).zip

FSWATCH_VERSION := 1.14.0
FSWATCH_OS_NAME := sierra
FSWATCH_BASEURL := https://homebrew.bintray.com/bottles
FSWATCH_FULLURL := $(FSWATCH_BASEURL)/fswatch-$(FSWATCH_VERSION).$(FSWATCH_OS_NAME).bottle.tar.gz

dev: ./websocketd ./fswatch
	PATH+=":." $< \
		--staticdir=$(DIR) \
		--address=$(ADDR) \
		--port=$(PORT) \
		./$(filter-out $<,$^) -1r $(DIR)

img: ./dockerfile
	docker build \
		--compress \
		-t $(NAME) \
		-f $^ \
		$(DIR)

run: img
	docker run --rm -itp $(PORT):80 $(NAME)

./websocketd: ./websocketd.zip
	unzip -od . "$^" "$@"

./websocketd.zip:
	curl -#Lo "$@" "$(WEBSOCKETD_FULLURL)"

./fswatch ./libfswatch.%:
	curl -#L "$(FSWATCH_FULLURL)" \
	| tar --strip=3 -xvz \
		"$@/$(FSWATCH_VERSION)/bin/$@" \
		"$@/$(FSWATCH_VERSION)/lib/"   \
	;
	install_name_tool -add_rpath "@loader_path/."      "$@"
	install_name_tool -add_rpath "@executable_path/."  "$@"
	install_name_tool -change \
		"$$(otool -L "$@" | grep -oE '\S+' | grep HOMEBREW)" \
		"@rpath/libfswatch.dylib" "$@"
	otool -L "$@"


clean:
	rm -rf websocketd websocketd.zip fswatch libfswatch.{a,dylib,11.dylib}

indexes: pages/
	$(MAKE) -C $^

api/blog:
	curl -sd '{}' \
	"https://notion-gw-jtojjrmgya-ez.a.run.app/v1/search" \
	| jq '.results[] | { id, created_time, last_edited_time, archived, text: .properties.title.title[].plain_text }'
