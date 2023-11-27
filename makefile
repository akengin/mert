#!/usr/bin/env make -f

NAME := mert
ADDR := 0.0.0.0
PORT := 8000
DIR  := .


dev: websocketd fswatch
	$< \
		--staticdir=$(DIR) \
		--address=$(ADDR) \
		--port=$(PORT) \
		$(filter-out $<,$^) -1r $(DIR)

img: ./dockerfile
	docker build \
		--compress \
		-t $(NAME) \
		-f $^ \
		$(DIR)

run: img
	docker run --rm -itp $(PORT):80 $(NAME)

fswatch websocketd:
	which -s "$@" || brew install $@

indexes: pages/
	$(MAKE) -C $^

api/blog:
	curl -sd '{}' \
	"https://notion-gw-jtojjrmgya-ez.a.run.app/v1/search" \
	| jq '.results[] | { id, created_time, last_edited_time, archived, text: .properties.title.title[].plain_text }'
