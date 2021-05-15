#  Dockerised NodeJs Application

  

Simple NodeJs Express Application to Understand the deployment workflow of a node app via docker and kubernetes.

Code is written using Javascript but same flows can be extended to the typescript project as well.

Purpose of this project is not to explore the javascript or typescript or express but it is to learn about using docker, docker-compose, kubernetes, kind, minkube, helm and skaffold to build the application. 

Also to understand the setup steps, for typescript, and adding the required auxilary things like commit hooks via husky, commit message via commitizen, linting via eslint or prettier and Unit Testing via Jest (should have 100% code coverage). 

This repo will serve as a template for future nodejs projects and those will build on top of this as this repo already contains the required configurations in terms of required node_modules or dockerfiles or docker-compose files or skaffold files(for k8s development).

Also learning about the OSS stacks(prometheus, grafana, jaeger, kiali, loki, fluentd) and service mesh (istio), around how to use them for monitoring and debugging. Set these up in local cluster using  kind or minikube.

Once the OSS is deployed, we will modify the nodejs app with required library and configuration changes to see the metrics, traces and logs in grafana.

Next step will be deploy all this, application and OSS, in cloud managed k8s cluster and see the results there.

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

[NodeJs and Docker Running UT and building application](https://docs.docker.com/language/nodejs/run-tests/)



