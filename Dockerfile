FROM node:16-alpine

WORKDIR /usr/src/app

# Alpine version does not have usermod
RUN apk add --no-cache shadow

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN ls -alt

RUN chown -R nobody:nobody /usr/src/app \
    && usermod -d /usr/src/app nobody

USER nobody:nobody

EXPOSE 8080:8080

CMD [ "node", "out/index.js" ]
