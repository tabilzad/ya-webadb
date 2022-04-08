FROM timbru31/node-alpine-git

WORKDIR /usr/src/webadb
COPY . .
RUN yes | npm install -g @microsoft/rush
RUN rush install
RUN rush build
RUN cd apps/demo && npm install

EXPOSE 15555
EXPOSE 5555
EXPOSE 3000

RUN cd apps && git clone https://github.com/novnc/websockify-js.git
RUN cd apps/websockify-js/websockify && npm i


CMD ["/bin/sh", "entrypoint.sh"]
