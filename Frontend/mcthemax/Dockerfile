FROM node:16-alpine as builder 

WORKDIR .

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV REACT_APP_SERVER_URL=http://mcthemax-server-alb-130935858.ap-northeast-2.elb.amazonaws.com

FROM nginx:1.19-alpine

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]