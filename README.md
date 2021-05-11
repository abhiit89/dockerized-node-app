#  Dockerised NodeJs Application

  

Simple NodeJs Express Application to Understand the deployment workflow of a node app via docker and kubernetes.

Code is written using Javascript but same flows can be extended to the typescript project as well.

  
  

#  Dev Setup

  

In the **Dev Setup**, we basically try to build the application by doing changes. We used nodemon for it. nodemon restarts the process every time a file is changed.

In order to run the process, we use

  

`npm run dev`

  

#  Post Changes

  

Post changes(code change and unit tests ) are done a new **docker image** is build containing only *Production Dependencies* and code changes. It has to be very light and small.

After that the said **docker image** is scanned for vulnerabilities.

After the successful scan the image is pushed to a Container Registry.

  

#  Deployment

  

After the Docker image is pushed to the registry the deployment workflow will kick in and deploy the application using that image in the designated Cluster.


#  Notes
In Order to run the nodejs app in production container, [**pm2**](https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/) is not really a requirement a simple
`node index.js`  will suffice as the container will be run by a Container Orchestration Framework, it will be ephemeral and new will be created once a container died.

# Articles 

[Husky Git Hooks](https://github.com/typicode/husky)

[npm-gui](https://www.npmjs.com/package/npm-gui)

