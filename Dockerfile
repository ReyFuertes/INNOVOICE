FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g @angular/cli

RUN npm i

COPY . .

EXPOSE 4200
CMD [ "ng", "serve", "--host", "0.0.0.0", "--disable-host-check" ]