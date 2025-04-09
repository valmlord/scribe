#!/bin/bash

COMPOSE_FILE="infra/docker/docker-compose.yml"

case "$1" in
  up)
	docker-compose -f $COMPOSE_FILE up -d
	;;
  down)
	docker-compose -f $COMPOSE_FILE down
	;;
  logs)
	docker-compose -f $COMPOSE_FILE logs -f
	;;
  restart)
	docker-compose -f $COMPOSE_FILE down
	docker-compose -f $COMPOSE_FILE up -d
	;;
  *)
	echo "Usage: $0 {up|down|logs}"
	exit 1
	;;
esac