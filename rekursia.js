const object = {
    header: 'nav',
    main: {
        section: 'h1',
        address: {
            div: 'p'
        },
        main: {
            span: {
                div: 'h2',
                div: 'p'
            }
        },
        footer: 'h2'
    }
};

const stats ={
    texts: [],
    tags: []
}

function getStatus(root) {
    for (const tag in root) {
        if (root[tag] instanceof Object) {
            stats.tags.push(tag);
            getStatus(root[tag]);
        } else {
            stats.tags.push(tag);
            stats.texts.push(root[tag]);
        }
    }
}

getStatus(object);
console.log(stats);