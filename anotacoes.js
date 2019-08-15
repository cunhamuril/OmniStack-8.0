* =================================================================================================================================================== *
*                                                    	SEMANA OMNISTACK 8 - ROCKETSEAT                                     			              *
* =================================================================================================================================================== *

PADRÃO MVC (MODEL, VIEW, CONTROLLER)

---------------------------------------------------------------------- BACKEND ------------------------------------------------------------------------

1. "Início"
> yarn init -y // iniciar projeto com package.json
> yarn add express // instalar express 
> yarn add nodemon -D // instalar nodemon (-D = devDependencies)
> yarn add cors // permite que a API seja acessada por qualquer app

2. "MongoDB"
// 1. new cluster mongoDB.Atlas

// 2. DATABASE ACCESS -> Add new user
	user: omnistack
	senha: omnistack
// 2.1. seleciona READ AND WRITE TO ANY DATABASE e confirm

// 3. NETWORK ACCESS -> Add ip address
// 3.1. seleciona ALLOW ACCESS TO ANYWHERE e confirm

// 4. Volta no CLUSTERS e clica em connect
// 4.1. CONNECT YOUR APPLICATION
// 4.2. copia URL e cola no server.js

> yarn add mongoose // instalar mongoose

// para acessar o BD no compass: 
// 5. CLUSTERS e clica em connect
// 5.1 clica em Connect with MongoDB Compass
// 5.2 ao abrir o compass, ele vai detectar que foi copiado a URL, daí clica em yes
// 5.3 coloca user e senha e clica em connect

3. "API GitHub"
meu perfil: "https://api.github.com/users/cunhamuril"

 > yarn add axios // intalar axios




-------------------------------------------------------------------- FRONTEND ----------------------------------------------------------------------

> yarn create react-app frontend // criar o projeto com nome de frontend

> yarn add react-router-dom 

> yarn add axios




--------------------------------------------------------------------- MOBILE -----------------------------------------------------------------------

--------------------- CONFIGURAR AMBIENTE  -----------------------

https://docs.rocketseat.dev/ambiente-react-native/

Genymotion login
user> cunhamuril
pass> *fyLa9@-xA@-C3k

$ react-native -h // help -> ver alguns comandos que podem ser executados 

https://docs.rocketseat.dev/ambiente-react-native/android/emulador

// configurado depuração USB para emular no celular
// Com isso configurado abra o terminal/prompt e execute o comando
$ adb devices
// Se estiver escrito device ao lado do ID do dispositivo significa que ele está pronto para rodar a aplicação. 
// Nesse ponto basta executar o comando abaixo e aguardar a aplicação ser instalada no seu dispositivo.
$ yarn react-native run-android

--------------------------------------------------------------------------------------------------------------

> npx react-native init tindev // iniciar o projeto com nome de tindev
> yarn react-native run-android // instalar e iniciar o projeto no emulador ou dispositivo
> yarn start // inicia o projeto, caso já tenha sido instalado uma vez

// para aparecer o menu de desenvolvimento no telefone, basta chacoalhar o dispositivo.
// coloca na opção live-reload para atualizar toda vez que for modificado o código.

// instalar estas dependências:
> yarn add react-navigation react-native-gesture-handler react-native-reanimated

// para android é necessário alguns imports no arquivo MainActivy.java
https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

// sempre que instalar dependências, é necessário reinstalar o app:
> yarn react-native run-android

// instalar o axios
> yarn add axios

> yarn add @react-native-community/async-storage