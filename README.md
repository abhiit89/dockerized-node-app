#  Dockerised NodeJs Application

  

Simple NodeJs Express Application to Understand the deployment workflow of a node app via docker and kubernetes.

Code is written using Javascript but same flows can be extended to the typescript project as well.

  
  

#  Dev Setup

  

In the **Dev Setup**, we basically try to build the application by doing changes. We used nodemon for it. nodemon restarts the process every time a file is changed.

In order to run the process, we use

  

`npm run dev`

  

#  Post Changes

  

Post changes (code change and unit tests ) are done a new **docker image** is build containing only *Production Dependencies* and code changes. It has to be very light and small.

After that the said **docker image** is scanned for vulnerabilities.

After the successful scan the image is pushed to a Container Registry.

  

#  Deployment

  

After the Docker image is pushed to the registry the deployment workflow will kick in and deploy the application using that image in the designated Cluster.


#  Notes
In Order to run the nodejs app in production container, [**pm2**](https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/) is not really a requirement a simple
`node index.js`  will suffice as the container will be run by a Container Orchestration Framework, it will be ephemeral and new will be created once a container died.

Under the **optional_docker_setup** folder, there is an alternate way of writing the dockefile and docker-compose yml files is presented. A seperate set of files are defined for each dev and prod env.

At the **root** level, The dockerfile and docker-compose yml files are defined so that the dockerfile is shared and we have just different docker-compose files, **docker-compose.dev.yml for dev** and **docker-compose.prod.yml for prod** along with **docker-compose.yml** file which contains the shared configurations between dev and prod env.

One other significant change is in the **Dockerfile** where `npm install` command is executed based on the value of **ARGS** **NODE_ENV** which is been set in the docker-compose.ENV_NAME.yml for each env.

The approach defined at the **root level** to setup the dockerfile and docker-compose yml file is the **preferred** **approach**.

# Articles 

[Husky Git Hooks](https://github.com/typicode/husky)

[npm-gui](https://www.npmjs.com/package/npm-gui)

[dockerignore-1](https://medium.com/@LihauTan/took-me-hours-to-realise-why-docker-build-ignores-my-dockerignore-and-this-is-what-ive-learned-2f87c770ea9c)

[dockerignore](https://codefresh.io/docker-tutorial/not-ignore-dockerignore-2/)



