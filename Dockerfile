FROM ubuntu:latest

RUN apt-get update 
RUN apt-get install -y build-essential git python mongodb nodejs node-express 
RUN service mongod start

RUN mkdir -p /data/db

RUN npm install -g gulp

RUN git clone https://github.com/alexcandrews/readopenly.git
RUN cd ~/readopenly && npm install 

EXPOSE 80:80
EXPOSE 443:443
EXPOSE 3000:3000
