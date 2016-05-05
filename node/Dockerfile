# Set the base image to Ubuntu
FROM nodesource/node:4.2

# File Author / Maintainer
MAINTAINER Mathieu Gamache

# Install nodemon
RUN npm install -g nodemon

# Install modules
ADD package.json package.json
RUN npm install


# Define working directory
ADD . .

# Expose port
EXPOSE  3000

# Start the server
CMD ["npm", "start"]