<h2>Ecco alcuni screen del progetto per i report della sonda di Digimetrica. L'Applicativo è stato realizzato con VUE JS in composition API, il piccolo proxyServer con JS (express), store manager, router js , axios e char.js per i grafici. Non mi sono avvalso di nessuna libreria di css (come bootsrap o il comodissimo tailwind). </h2>

<h2>Link Diretto al Progetto hostato su una VPS : <a href="http://www.lorejs.it/">http://www.lorejs.it/</a> </h2>

<h3>PER RUNNARE IL PROGETTO UNA VOLTA SCARICATA LA REPO:
    <h4>npm i</h4>
    <h4>npm run dev</h4>
    <h4>npm start (altra console)</h4>
 </h3>

<h2>Per il deploy ed il link della repo ho pensato anche di mandare una email riepilogativa alla fine del progetto (max 72 hr)</h2>

<img src="https://i.imgur.com/7wibYGm.png">
<img src="https://i.imgur.com/LFb3anG.png">


<h3>COME HO CREATO L'IMMAGINE CON CUI HO CREATO UN UN DOCKER CONTAINER DOVE HOSTARE IL PROGETTO DA METTERE SULLA VPS </h3>


FROM node:alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
