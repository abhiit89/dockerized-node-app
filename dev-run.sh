docker run --name node-app-dev -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d node-docker-dev

# we defined a default value of PORT as 3000 in the Dockerfile.dev file but we can override via command line
# by passing a flag called -e or --env followed by ENV_VARIABLE_NAME=ENV_VARIABLE_VALUE
# docker run --name node-app-dev -v $(pwd):/app:ro -v /app/node_modules -e PORT=4000 -p 3000:4000 -d node-docker-dev