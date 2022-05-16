"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
    
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        }
    },
    rememberMyFilms: function () {

        for (let i = 1; i <= 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('succesfull');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {

        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы - среднестатистический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы - киноман!');
        } else {
            console.log('Обновите страницу и повторите запрос');
        }
    
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGanres: function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre !== null && genre !== '') {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            } 
        }
        personalMovieDB.genres.forEach(function(item, num) {
            console.log(`Любимый жанр ${num + 1} - это ${item}`);
        });
    }   
    
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGanres();

// // showMyDB(personalMovieDB.privat);


// // const options = {
// //     name: 'test',
// //     width: 1024,
// //     hight: 1024,
// //     colors: {
// //         border: 'black',
// //         bg: 'red'
// //     }
// // };

// // console.log(`Oбщее число ключей: ${Object.keys(options).length}`);

// // // console.log(options.name);

// // let counter = 0;

// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     } else{
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
// // };

// // console.log(`Oбщее число ключей: ${counter}`);

// // function learnJS(lang, callback) {
// //     console.log(`Я учу: ${lang}`);
// //     callback();
// // }

// // learnJS('Javascript', function() {
// //     console.log('Я прошел этот урок!');
// // });

// // const arr = [2, 3, 4, 5, 6, 7];

// // arr.forEach(function(item, i, arr) {
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });

// // let a = 5,
// //     b = a;

// // b = b + 5;

// // console.log(b, a)

// // const obj = {
// //     a: 5,
// //     b: 1
// // };

// // const copy = obj;

// // copy.a = 10;

// // console.log(copy, obj);

// // function copy(mainObj) {
// //     let objCopy = {};
    
// //     let key;
// //     for (key in mainObj) {
// //         objCopy[key] = mainObj[key];

// //     }
// //     return objCopy;
// // }

// // const numbers = {
// //     a: 5,
// //     b: 1,
// //     c: {
// //         x: 5,
// //         y: 9
// //     }
// // };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers)

