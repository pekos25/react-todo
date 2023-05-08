FROM node:20-alpine

ENV REACT_APP_URL https://react-http-e2d69-default-rtdb.firebaseio.com/new-tasks

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
