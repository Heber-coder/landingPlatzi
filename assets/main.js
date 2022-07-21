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