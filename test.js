const fs = require('fs').promises;

fs.readFile('proxy.txt', 'utf8')
    .then(data => data.split('\n').map(p => `http://${p.trim()}`).join('\n'))
    .then(data => fs.writeFile('proxy.txt', data))
    .then(() => console.log('proxy.txt đã được cập nhật thành công!'))
    .catch(err => console.error(err));

