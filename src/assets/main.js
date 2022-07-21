/*
-id obtenido de algun canal de youtube. utilizando rapidapi.com-->youtube v3
- el id es: UCw05fUBPwmpu-ehXFMqfdMw
*/
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

//se crea la referencia donde queremos llamar los datos
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c419ad328mshec185ab2b3357e1p176d2ajsn1cf969c7322f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi) {
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;
}

(async () => {
try {
	const videos = await fetchData(API);
	let view =`
	${videos.items.map(video => `
		<div class="group relative">
			<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
					<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
				</h3>
			</div>
		</div>
	`).slice(0,8).join('')}
	`;
	content.innerHTML = view;
} catch (error) {
	content.innerHTML = 'El servidor no esta disponible '+ error;
}
})();

/*
Para el deploy se hace la implementación de Github pages (mostrar nuestro código html dentro del repositorio).

Vamos a consola para instalar el paquete con: npm install gh-pages --save-dev-

Agregar en el archivo package.json el script (editar el apartado “test”):

"scripts": {
"deploy": "gh-pages -d src"
},

Se crea una nueva rama en el repositorio y se habilita para su publicación. Para ello primero se debe actualizar los cambios al repositorio antes del deploy, en consola para conocer el estado del se proyecto: git status

Para confirmar y comentar que hay nuevos archivos y cambios se coloca: git commit -m “[ADD] files”
Por último se hace el deploy con el comando: npm run deploy que ejecuta un comando de gh-pages para la subida de una rama y que luego se pueda mostrar como una página web.
-Para obtener la dirección que arroja en Github con gh-pages, hay que entrar en la pestaña de Settings, en el panel izquierdo entrar a Pages, automáticamente nos muestra la url para ver nuestra landing y compartirla a otros.
*/

/*
-git status
git commit -m "[ADD] files"
-commit
*/

/*
EXAMEN DEL CURSO
¿El método then() retorna?
Promesa
2.
¿Para qué nos sirve la clase XMLHttpRequest?
Nos permite realizar solicitudes HTTP de una forma muy fácil.
3.
¿Cuál es el método recomendado por la comunidad para manejar asincronismo en JavaScript?
Async/await
4.
Palabra que nos permite definir una función así­ncrona. Selecciona la opción correcta:
async
5.
¿Cuáles son los argumentos que recibe una promesa?
resolve, reject
6.
¿Para qué nos sirve el método "catch()"?
Registra la razón del rechazo.
7.
¿Para qué utilizamos JSON.parse(xhttp.responseText)?
Convertir una respuesta de texto en un Objecto iterable.
8.
¿Cuál es la forma correcta de retornar un Error en reject?
reject (new Error(Error))

9.
¿Nos permite ejecutar una serie de promesas secuencialmente?
Promise.all()

10.
¿Para qué nos sirve xhttp.status === 200?
Verificamos que el estatus de la petición HTTP resuelva el estado 200.
11.
¿Cuál es la expresión que pausa la ejecución de la función así­ncrona y espera la resolución de la promise?
await
12.
Es el problema de anidamiento de callbacks, que las promesas resuelven. Selecciona la respuesta correcta.

callback hell
13.
¿Cómo aseguramos manejar los errores asincrónicos correctamente?
try { ...código } catch (error) { ...código }

14.
Una función callback es:

Una función que se pasa a otra función como un argumento, invocada dentro de la función externa.



*/