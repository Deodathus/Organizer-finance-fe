
.PHONY: rebuild
rebuild:
	docker-compose down
	docker-compose build
	docker-compose up -d

.PHONY: build
build:
	docker-compose build
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: up
up:
	docker-compose up -d

.PHONY: restart
restart:
	docker-compose down
	docker-compose up -d