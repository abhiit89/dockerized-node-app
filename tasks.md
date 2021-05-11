# Pending Tasks After the [Course](https://www.youtube.com/watch?v=9zUHg7xjIqQ&list=PL2uo0RBZRY1D5RZfji5AUepbsjEF1VmzX&index=2) is completed

- [ ] Convert the code to typescript
- [ ] Add the relevant vscode debug configuration as well for both local/within container/deployed
- [ ] Add the https support to the express api
- [ ] Modify the dockerfile to use typescript
- [ ] Modify the docker-compose yml files to use ts-node in dev from src folder
- [ ] Modify the docker-compose yml files to use node in prod from dist folder
- [ ] Add the Unit Tests
- [ ] Add the Linting Support
- [ ] Add both Linting and Unit Test as the Pre Commit Hooks
- [ ] Add the relevant Deployment files for k8s Support
  - [ ] Maintain the deployment files in separate repo other than this repo **for example k8s-repo**
- [ ] Add the Skaffold support for local development in k8s
- [ ] Add the deployment files for mongo, kiali, jaeger, prometheus, grafana for OSS and istio for service mesh. 
  - [ ] Maintain the OSS and service mesh deployment files in separate repo, **k8s-repo**
- [ ] Create a disposable cluster using kind or mimikube and deploy this node app and OSS and service mesh and see the results in grafana.
- [ ] Publish the built image of the nodejs app in dockerhub.
- [ ] Convert this application(nodejs app + OSS + service mesh) into an helm chart and publish it.
- [ ] Add the github actions, argo, flux or any other CICD to automatic deploy the complete application to an hosted k8s cluster

