/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
/* movieDB.movies[movieDB.movies.length] = prompt  */('vvedi film','');
const promo__adv = document.querySelector('.promo__adv');
promo__adv.remove();
const films_name = document.querySelectorAll('.promo__interactive-item');
const genre = document.querySelector('.promo__genre'),
      promo = document.querySelector('.promo__bg'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector ('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


addForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    let newFilm = addInput.value,
          favorite = checkbox.checked;
    if (newFilm){
        if (newFilm.length > 21 ){
            newFilm = `${newFilm.substring(0,20)}...`;
        }
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
        createMovieList(movieDB.movies,movieList);
    }
});
const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    }); 
};
genre.textContent = 'drama';
promo.style.backgroundImage = 'url("img/bg.jpg")';
function createMovieList (films, parent){
    parent.innerHTML = "";
    films.forEach((film,i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film} 
            <div class="delete"></div>
        </li>
        `;
    });
}




