FROM node:20

# Frontend Docker startup
WORKDIR /usr/src/app/frontend
COPY . .
RUN npm install
EXPOSE 5173
# RUN npm run build
CMD ["npm","run", "dev"]
