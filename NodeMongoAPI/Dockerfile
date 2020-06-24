FROM node:12

# Create app directory
WORKDIR /usr/src/app

# copy package.json and package-lock.json to app dir
COPY package*.json ./

# Runs npm install while image creation 
RUN npm install

# Bundle app source
COPY . .

# Expose Port
EXPOSE 3000

# Command that runs when Container is started
CMD [ "npm", "start" ]