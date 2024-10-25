FROM node:20

# Backend Docker Startup
WORKDIR /usr/src/app/backend
COPY . .
RUN npm install
EXPOSE 4000
# RUN npm run build
CMD ["npm","run", "start"]

