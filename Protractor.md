# Protractor

O Protractor é um framework desenvolvido em JavaScript em um ambiente de desenvolvimento Nodejs.

## Instalação

Instalar o NodeJs, usar o recomendado LTS
criar as pastas para o sistema a ser testado

no terminal digitar: npm init // inicializar

npm install protractor
npm install protractor --save-dev // instala o pacote nas dependencia de desenvolvimento, não leva para produção
npm install jasmine -- save-dev

npm install protractor -g // instala o protractor de forma global
npm webdriver-manager -g
webdriver-manager update // atualiza os drivers do chrome, firefox, etc..

## Error

Solução para o erro:
Foi dado o comando protractor conf.js // arquivo de configuração

`Error message: Could not find update-config.json. run 'webdriver-manager update'to download binares.`

1) arquivo de configuração do NPM (package.json)
em: "scripts":{
    "test": "protractor"
},
alterar para: "scripts":{
    "test": "protractor conf.js",
    "webdrive-manager": "webdriver-manager update"
},

*agora ao invés de rodar com o comando: **protractor conf.js**, rodar com **rpm test***

2) remover a pasta node-modules
rodar: npm install // instala todas as dependencias novamente
rodar: npm run webdrive-update // instala o webdrive dentro da pasta do projeto.



##  Specs
arquivos de testes/cenários

## Configuração

Criar o arquivo **conf.js** para configurar o protractor com os arquivos de testes/cenários
Ele deve conter:

exports.config =  {

    directConnect: true,
    framework: 'jasmine2',
    specs: ['test.js'], // especificações
    onPrepare: function(){
        browser.ignoreSynchronization = true;
    },
    capabilites: {
        'browserName': chrome'
    }

}


## Bibliografia

jasmine.github.io

