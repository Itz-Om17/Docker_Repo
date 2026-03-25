FROM node
ENV MONGO_DB_USERNAME=root \
    MONGO_DB_PWD=1234566

RUN mkdir -p node/app
COPY . /node/app

CMD ["node","/node/app/server.js"]