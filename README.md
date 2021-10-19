# template-vue-vite-node

Proyecto de plantilla para proyecto usando Vue 3 con Vite (Typscript) y backend con Node, listo para ser desplegado en Heroku

##### Recursos

La plantilla está basada principalmente en:
* [Vitesse Lite ](https://github.com/antfu/vitesse-lite)
* [bucket-list-mevn](https://github.com/3stbn/bucket-list-mevn)

##### Estructura
```
| template-vue-vite-node
    |client ***Frontend***
        |src
            |components
            |pages
            ...
    ...
    |routes ***Endpoints del backend***
        |api 
    server.js ***Server con Express***
    config.js
    ... 
```
### Instalación

#### Clonando desde github
```
git clone https://github.com/garcia-santiago/template-vue-vite-node

//En template-vue-vite-node
npm install 

//En client
npm install

//En template-vue-vite-node
npm run dev
```

#### Descargando zip
```
//En template-vue-vite-node
npm install 

//En client
npm install

//En template-vue-vite-node
npm run dev
```
### Despligue
##### Desplegando en heroku
```
En variables del entorno
NPM_CONFIG_PRODUCTION = false
```
