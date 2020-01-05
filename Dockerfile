# these are what will be served by nginx
# use alias build to be easier to refer this container elsewhere
# e.g inside nginx container
FROM node:alpine as build

WORKDIR /app

COPY . /app

# since we are using local files and not copying them to docker
# add the container's node_modules folder to docker's $PATH
# so that it can find and watch it's dependencies
ENV PATH /app/node_modules/.bin:$PATH

RUN yarn && \
    yarn build

EXPOSE 3000

CMD ["yarn", "start"]
