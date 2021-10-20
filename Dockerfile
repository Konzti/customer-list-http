FROM nginx:latest
COPY /dist/customer-list-http /usr/share/nginx/html
EXPOSE 80