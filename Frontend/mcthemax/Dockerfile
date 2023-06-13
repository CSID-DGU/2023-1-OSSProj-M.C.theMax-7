FROM node:16-alpine as builder 

WORKDIR .

ARG REACT_APP_SERVER_URL

ENV REACT_APP_SERVER_URL=http://localhost:8080

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19-alpine

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]