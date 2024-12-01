FROM node:20-alpine

WORKDIR /back

COPY  package*.json ./

RUN yarn

COPY . .

EXPOSE 3080

ENV DATABASE_URL="postgres://postgres:hexagonal@db/db"
ENV DATABASE_SSL="false"
ENV LOG_LEVEL="warn"

CMD ["yarn", "start"]