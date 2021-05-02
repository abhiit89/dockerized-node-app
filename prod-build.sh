COMMIT_ID=$(git rev-parse --verify HEAD)

docker build -t node-docker -t node-docker:${COMMIT_ID} -f ./Dockerfile .