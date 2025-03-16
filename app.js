// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const names = []; 

        function agregarAmigo() {
            const amigo = document.getElementById('amigo');
            const name = amigo.value.trim();

            if (name === '') {
                alert('Por favor, ingresa un nombre.');
                return;
            }

            const resultDiv = document.getElementById('resultado');
            if (resultDiv.style.display === 'block') {
                resultDiv.style.display = 'none';
                resultDiv.textContent = '';
            }

            names.push(name);
            const listaAmigos = document.getElementById('listaAmigos');
            const listItem = document.createElement('li');
            listItem.textContent = name;
            listaAmigos.appendChild(listItem);
            amigo.value = '';
        }

        function sortearAmigo() {
            if (names.length === 0) {
                alert('La lista está vacía. Por favor, añade nombres antes de sortear.');
                return;
            }

            const randomIndex = Math.floor(Math.random() * names.length);
            const selectedName = names[randomIndex];
            const resultDiv = document.getElementById('resultado');
            resultDiv.textContent = `El amigo secreto sorteado es: ${selectedName}`;
            resultDiv.style.display = 'block';

            names.length = 0;
            document.getElementById('listaAmigos').innerHTML = '';
        }