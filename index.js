const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get('/:code', (q, a) => {
    const search = q.params.code;

    fetch(`https://fefumap.com/api/search/${search}`)
        .then(d => d.json())
        .then(d => {
            if (d.response) {
                a.status(302).redirect(`https://fefumap.com/#${d.response}`);
            } else {
                a.status(302).redirect(`https://fefumap.com`);
            }
        })
        .catch(e => {
            a.status(302).redirect(`https://fefumap.com`);
        });
});

app.listen(4839, () => {
    console.log("Listening on 4839");
});