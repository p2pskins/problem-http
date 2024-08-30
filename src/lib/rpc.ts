import http from 'http'

export function getXYZ() { 
    // just to reproduce the problem.
    http.get('xyz', (res) => {
        res.setEncoding('utf8');
        res.on('data', function (body) {
            console.log(body);
        });
    });
}
