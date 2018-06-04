FROM node
ADD . /webbasic/
WORKDIR /webbasic
RUN npm install
RUN npm run build
CMD npm run start
