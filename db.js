


const getName = function (data) {
    return new Promise((resolve, reject) => {
        const query = data || {'name':'abebe'};
        Name.find(query, (err, name) => {
            if (err) {
                return resp.send(err);
            }
            return resp.json(name);
        });
    });
};

const add = function (data) {
    return new Promise(() => {})
}