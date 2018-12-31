# FROM node:8

# # Create app directory (inside image)
# WORKDIR /usr/src/app

# # # Install app dependencies
# # COPY package*.json yarn.lock ./
# # # CMD ["npm", "rebuild", "node-sass"]
# # RUN yarn install
# # # Cached, so only runs if any of above files changed
# # # RUN yarn build

# # # Bundle app source in Docker image
# # COPY . .

# # EXPOSE 1234

# # # RUN yarn build
# # RUN yarn dev 
# # # CMD [ "node", "run dev" ]

# # RUN npm install -g parcel-bundler
# # CMD [ "parcel", "src/index.html/" ]
# # EXPOSE 1234

# # FROM node:6.11.4

# COPY package*.json yarn.lock ./
# RUN npm install -g parcel-bundler
# CMD [ "node", "src/index.html" ]
# EXPOSE 1234


FROM node:8

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn

# Bundle app source
COPY . /app
RUN yarn build

EXPOSE 1234
CMD [ "yarn", "dev" ]