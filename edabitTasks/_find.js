export function myFind(pass, req) {
    let obj = pass;

    for (const elem of obj) {
        if (typeof req != "object" &&
                   Object.keys(elem).includes(req) &&
                   elem[req] != false) {
            // passed value equal to string
            return elem;
        }

        if(Object.entries(elem).flat().includes(req[0]) && Object.entries(elem).flat().includes(req[1])) {
            // passed value equal to array
            return elem;
        }

        if(Object.values(elem).includes(...Object.values(req))) {
            // passed value equal to object
            return elem;
        }
    }
}


var users = [
    { "user": "barney",  "age": 36, "active": true },
    { "user": "fred",    "age": 40, "active": false },
    { "user": "pebbles", "age": 1,  "active": true }
  ]

  // test for string
  myFind(users, "active");
  // test for array
  myFind(users, ["active", false]);
  // test for object
  myFind(users, { "age": 1, "active": true });
