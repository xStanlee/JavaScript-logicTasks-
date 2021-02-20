function myFind(pass, req) {
    let obj = pass;
    for (const elem of obj) {
        if(Object.values(elem).includes(...Object.values(req))){
            return elem;
        }
        /*
            for string passed, but cannot be like this, cuz of B(o) notation

            for(const prop in elem) {
            if(elem[prop] === Boolean(req)){
                return elem;
            };

        }*/
    }
}
