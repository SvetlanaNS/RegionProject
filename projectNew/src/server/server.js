const express = require('express');
const http =require('http');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);

const PORT=3000;//порт в отдельной константе

//Используем path дабы избежать проблем с относительными путями до файлов. Делаем их абсолютными.

const catalogJSONPath = path.resolve(__dirname, './db/products.json');



const server= http.createServer((req,res)=>{//объект запроса req и res объект ответа
  console.log('Server request');
 console.log (req.url,req.method);//инфо-я о запрашиваемом пути и методе

res.write('hello world');//пишет в поток ответа некоторое содержимое
res.end();//сигнализирует серверу, что заголовки и тело ответа установлены, в итоге ответ отсылается клиента. Данный метод должен вызываться в каждом запросе.

});




server.listen(PORT,'localhost',(error)=>{
error ? console.log(error):console.log(`listening port ${PORT}`);//информация что слушаем порт
});

/*
app.get('/api/products', (req, res) => {
    fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({result: 0, text: err}));
            // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

*/