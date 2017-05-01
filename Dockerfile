# Dockerfile
# $ docker build -t juazugas/monothor .
FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app && chown node:node /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN chown -R node:node /usr/src/app

EXPOSE 8888

CMD [ "npm", "start" ]