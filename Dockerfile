#base image
FROM node:18.15.0
#set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

#add ‘/usr/src/app/node_modules/.bin‘to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

#install and cache app dependencies 
COPY . /usr/src/app
EXPOSE 3000
COPY package.json /usr/src/app/package.json
RUN npm install


#start app
CMD ["npm", "run", "dev"]