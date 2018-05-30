FROM node:10.2.1-slim

RUN cd /opt/ && mkdir node-bootstrap
WORKDIR opt/node-bootstrap

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . /opt/node-bootstrap

EXPOSE 3000

CMD npm run start:prod
