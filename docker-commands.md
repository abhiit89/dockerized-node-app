## Delete Container

`docker rm container_name_or_id -f`

## Delete Container with associated volume

`docker rm container_name_or_id -fv`

## Delete only one volume

`docker volume rm volume_id`

## Delete all docker volumes

`docker volume prune`

## List all docker volumes

`docker volume ls`

## Docker compoese up with Production Dockerfile

`docker-compose up`

## Docker compoese down with Production Dockerfile without deleting volumes

`docker-compose down`

## Docker compoese down with Production Dockerfile with deleting volumes

`docker-compose down -v`

## Docker compoese up with Development Dockerfile

`docker-compose -f docker-compose-dev.yml up`

## Docker compoese down with Development Dockerfile without deleting volumes

`docker-compose -f docker-compose-dev.yml down`

## Docker compoese down with Development Dockerfile with deleting volumes

`docker-compose -f docker-compose-dev.yml down -v`