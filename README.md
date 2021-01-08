#### Estou praticando criação de biblioteca react adicionando apenas as coisas mais basicas

Webpack: tive um problema ao tentar rodar o webpack script {"start": "webpack-deve-server"}, fiz uma pesquisa e ai encontrei o problema

>NPM package.json scripts are a convenient and useful means to run locally installed binaries without having to be concerned about their full paths. Simply define a script as such:
>For webpack-cli 3.x: "scripts": { "start:dev": "webpack-dev-server" } 
>For webpack-cli 4.x: "scripts": { "start:dev": "webpack serve" }



Comandos yarn e NPM utilizados:
- yarn init = configura o json 
- yarn add -D react react-dom prop-types 
- yarn add -D @babel/core @babel/cli @babel/preset-env @babel preset-react 
- yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader 
- yarn start = roda o script do webpack server 
- yarn add -D cross-env
- npm i numero-por-extenso = a Lib do Lenon Bordini capaz de ler os números por - extenso, muito incrivel cheque o github dele :) https://github.com/LenonBordini/numero-por-extenso 
