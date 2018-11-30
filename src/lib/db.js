import users from '../data/data.json'

var db = new PouchDB('gta');

users.forEach(element => {
    db.put({
        "id_user": element.id_user,
        "name": element.name,
        "firstname": element.firstname,
        "birth": element.birth,
        "adress": element.adress,
        "phone": element.phone,
        "email": element.email,
        "congRestants": element.congRestants,
        "dayHours": element.dayHours,
        "missingDays": element.missingDays
    });
});

db.changes().on('change', function () {
    console.log('Ch-Ch-Changes');
});

export {db};
