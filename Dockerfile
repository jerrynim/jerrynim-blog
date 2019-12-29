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

CMD ["yarn", "start"]

# set up production environment
# the base image for this is an alpine based nginx image
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)

RUN ls /

COPY --from=build /app/.next /usr/share/nginx/html
# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY app/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
EXPOSE 80 
# start nginx 
CMD ["nginx", "-g", "daemon off;"]