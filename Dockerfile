FROM nginx:1.17.8-alpine
RUN rm -rf /usr/share/nginx/html/* && \
    cp /usr/share/zoneinfo/America/Maceio /etc/localtime

COPY nginx.conf /etc/nginx/conf.d
COPY /dist/atendimento-ui /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]