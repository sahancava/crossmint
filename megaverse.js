var _whatToDo = {
    add: true // in case false, it will delete all the data
}

var whatToDo = _whatToDo.add;
var _candidateId = 'e6231761-0d32-493e-8a1f-6d73e5ce3f0c';

async function getRequest() {
    const response = await fetch('https://challenge.crossmint.io/api/map/' + _candidateId + '/goal',
    {
        method: 'GET'
    });
    return response.json();
}

async function postRequest(type, _data) {
    _method = whatToDo ? 'POST' : 'DELETE';
    _data.candidateId = _candidateId;
    const response = await fetch('https://challenge.crossmint.io/api/' + type, {
        method: _method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(_data)
    });
    return response.json();
}

setTimeout(async () => {
    var restResult = await getRequest();
    for (var i = 0; i < restResult.goal.length; i++) {
        for (let index = 0; index < restResult.goal[i].length; index++) {
            var content = restResult.goal[i][index];
            var _direction = content.indexOf('RIGHT') > -1 ? 'right' : content.indexOf('LEFT') > -1 ? 'left' : content.indexOf('UP_COMETH') > -1 ? 'up' : 'down';
            switch (content) {
                case 'UP_COMETH':
                    console.log('UP_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'DOWN_COMETH':
                    console.log('DOWN_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'RIGHT_COMETH':
                    console.log('RIGHT_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'LEFT_COMETH':
                    console.log('LEFT_COMETH...', i, ' : ', index);
                    await postRequest('comeths', { 'row': i, 'column': index, direction: _direction });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'SPACE':
                    null;
                    break;
                case 'POLYANET':
                    console.log('POLYANET...', i, ' : ', index);
                    await postRequest('polyanets', { 'row': i, 'column': index });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'WHITE_SOLOON':
                    console.log('WHITE_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'white' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'BLUE_SOLOON':
                    console.log('BLUE_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'blue' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'RED_SOLOON':
                    console.log('RED_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'red' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
                case 'PURPLE_SOLOON':
                    console.log('PURPLE_SOLOON...', i, ' : ', index);
                    await postRequest('soloons', { 'row': i, 'column': index, color: 'purple' });
                    await new Promise(r => setTimeout(r, 1000));
                    break;
            }
        }
    }
}, 50);