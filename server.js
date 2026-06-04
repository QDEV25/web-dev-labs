import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
    let content = fs.readFileSync('./res/template/template.html', 'utf8');

    switch(req.url) {
        case '/':
            content = content.replace('%data%', '<h1>Главная страница</h1> <p>И какой-то текст на главной странице</p>');
            res.end(content);
            break;
            
        case '/portfolio/':
            const items = JSON.parse(fs.readFileSync('./res/data.json', 'utf8'));
            
            let itemsHtml = '';
            for (let item of items) {
                itemsHtml += '<p>' + item.title + '<br><img width="320px" src="' + item.image + '" /></p>';
            }
            
            content = content.replace('%data%', '<h1>Портфолио</h1> <p>Наши работы:</p>' + itemsHtml);
            res.end(content);
            break;
            
        default:
            res.writeHead(404);
            res.end('Page not found');
            break;
    }
});

server.listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});