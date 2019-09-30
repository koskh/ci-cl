FROM node

COPY package.json .
COPY build build
COPY server.js .

RUN npm install --production

CMD PORT=$PORT npm run start