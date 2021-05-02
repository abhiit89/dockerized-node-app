COMMIT_ID=$(git rev-parse --verify HEAD)

docker build -t node-docker-dev -t node-docker-dev:${COMMIT_ID} -f ./Dockerfile.dev .