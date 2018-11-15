var db = new PouchDB('dbname');

db.put({
    "id_user": 1,
    "name": "Van Damne",
    "firstname": "J-C",
    "birth": "08/10/1960",
    "adress": "1 boulevard Aware",
    "phone": "0697452112",
    "email": "jcvd@gmail.com",
    "congRestants": 8,
    "dayHours": 8,
    "missingDays": 0
});

db.put({
    "id_user": 2,
    "name": "Portugues",
    "firstname": "Gladys",
    "birth": "30/09/1957",
    "adress": "1 boulevard Aware",
    "phone": "0697452110",
    "email": "femmedejcvd@gmail.com",
    "congRestants": 8,
    "dayHours": 8,
    "missingDays": 1
});

db.changes().on('change', function () {
    console.log('Ch-Ch-Changes');
});

db.replicate.to('http://example.com/mydb');

export default db;