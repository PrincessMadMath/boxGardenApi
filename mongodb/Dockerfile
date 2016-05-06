FROM ubuntu
MAINTAINER Mathieu Gamache

# Install mongo
RUN \
   apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
   echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list && \
   apt-get update && \
   apt-get install -y mongodb-org

# Create volume to enable permanent storage of database
VOLUME ["/data/db"]
WORKDIR /data

EXPOSE 27017

CMD ["mongod"]