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