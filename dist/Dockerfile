FROM node

COPY package.json .
COPY dist dist
COPY server.js .

RUN npm install --production

CMD PORT=$PORT npm run start