FROM node:16.18.1

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]