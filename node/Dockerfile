# Set the base image to Ubuntu
FROM nodesource/node:4.2

# File Author / Maintainer
MAINTAINER Mathieu Gamache

# Install nodemon
RUN npm install -g nodemon

# Install modules
ADD ./src/package.json src/package.json
RUN cd src; npm install


# Define working directory
ADD . .

# Expose port
EXPOSE  3000

WORKDIR src

# Start the server
CMD ["npm", "start"]
