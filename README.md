# taggest
## **WIP this is a concept, not an active usable application** 

Taggest is a self-hosted video-archive tool. You will be able to upload videos and tag them for easy future use.
It's goal is to create a tool that is accessible through your local network, which will enable you to easily search and find local videos.
We do this through the use of tags which can ben whitelist and blacklisted during search, allowing for exact results within a big colleciton of videos.

## How to run.
prerequisites:
- [docker-compose](https://docs.docker.com/compose/install/)
- git

for installation instructions of docker-compose, please visit

clone the repository to the machine you intend to use as server:
```sh
git clone https://github.com/yowkah/taggest
```
go into the directory
```sh
cd taggest
```
then run docker-compose
```sh
docker-compose up -d
```
After everything shows ready, the tool can be accessed at the local host in the browser:`http://localhost`

## Contributions
Contributing at this point is discouraged. Untill we have a solid working proof of concept, it will not be very useful to contribute. Primarily because there is a lack of design.
