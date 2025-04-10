# Install base requirement for the app.

FROM node:18
WORKDIR /taskApp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]