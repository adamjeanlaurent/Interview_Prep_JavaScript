function bfs(start) {
    let queue = [];
    let seen = new Set();

    queue.push(start);

    while(queue.length != 0) {
        let cur = queue.shift();

        if(!seen.has(cur)) {
            seen.add(cur);
            console.log(cur);
        }
        cur.adjacents.forEach((adj) => { // if adjacents is an array of adjacent elements
            if(!seen.has(adjacent)) {
                queue.push(adjacent);
            }
        });
    }
}

function dfs(start) {
    let stack = [];
    let seen = new Set();

    stack.push(start);

    while(stack.length != 0) {
        let cur = stack.pop();
        if(!seen.has(cur)) {
            seen.add(cur);
            console.log(cur);
        }
        cur.adjacents.forEach((adj) => { // if adjacents is an array of adjacent elements
            if(!seen.has(adjacent)) {
                stack.push(adjacent);
            }
        });

    }
}