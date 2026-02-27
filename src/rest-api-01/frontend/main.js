const name = document.getElementsByTagName('input')[0];
const description = document.getElementsByTagName('input')[1];
const ul = document.getElementById('joga-aqui');

document.querySelector('form').addEventListener('submit', e => {
     e.preventDefault();
     fetch('http://localhost:3000/', {
          method: 'POST',
          body: JSON.stringify({
               name: name.value,
               description: description.value
          }),
          headers: {
               "Content-type": "application/json; charset=utf-8"
          }
     })
          .then(res => res.json())
          .then(data => console.log(data))

     document.querySelector('form').focus();
})

// mostra os posts
document.querySelector('button').addEventListener('click', () => {
     fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(data => {
               data.map(el => {
                    const li = document.createElement('li');
                    li.innerHTML = `${el.name} - ${el.description}`;
                    ul.append(li);
               })
          })

})
