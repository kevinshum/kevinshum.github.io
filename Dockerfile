FROM node:8

# Create app directory (inside image)
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Cached, so only runs if any of above files changed
RUN yarn build
RUN npm install && apt-get update

# Bundle app source in Docker image
COPY . .

EXPOSE 1234

CMD [ "yarn", "run dev" ]