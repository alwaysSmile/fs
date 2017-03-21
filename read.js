//*******
// //var fs = require('fs');
// //Пример #1 (преобразование буфера в строку) console.log(data.toString());
// //readFile - асинхронная Функция, которая принимает имя файла, в нашем случае
// //__filename - это путь к файлу модуля и получает callback(функция-обработчик)
// //1 аргумент err - ошибка
// //2 аргумент data - данные, содержимое файла
// fs.readFile(__filename, function (err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         // console.log(data);//Выведет буфер
//         console.log(data.toString());//Выведет строку, то, что мы написали здесь
//     }
// });
//*******


//*******
// //var fs = require('fs');
// //Пример #2 (преобразование буфера в строку происходит внутри функции readFile)
// fs.readFile(__filename, {encoding: 'utf-8'}, function (err, data) {//преобразование буфера в строку происходит внутри функции readFile
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });
//*******


//*******
// //var fs = require('fs');
// //Пример #3 (если где-то ошибка)
// //Считываю файл, которого не существует -> ENOENT
// fs.readFile("blablabla", {encoding: 'utf-8'}, function (err, data) {//преобразование буфера в строку происходит внутри функции readFile
//     if (err) {
//         if (err.code == 'ENOENT') {
//             console.error(err.message)
//         } else {
//             console.error(err);
//         }
//     } else {
//         console.log(data);
//     }
// });
//*******


//*******
// //Пример #4
// //Проверить на наличие файла
// var fs = require('fs');
//
// fs.stat(__filename, function (err, stats) {
//     console.log(stats.isFile()); //=>true
//     console.log(stats);
// })
//*******


//*******
//Пример #5
//Создание нового файла, в котором будет содержаться строка data
var fs = require('fs');

fs.writeFile("file.tmp", "data", function (err) {//Создаю новый файл
    if (err) throw err;//В каждом callback я проверяю ошибку и обрабатываю с помощью throw

    fs.rename("file.tmp", "new.tmp", function (err) {//Переименовываю файл
        if (err) throw err;//В каждом callback я проверяю ошибку и обрабатываю с помощью throw

        fs.unlink("new.tmp", function (err) {//Удаляю файл
            if (err) throw err;//В каждом callback я проверяю ошибку и обрабатываю с помощью throw
        });
    });
});
//*******