class GraphNode {
    constructor(value, adjacentNodes = []) {
        this.value = value;
        this.adjacentNodes = adjacentNodes;
    }
    dfs() {
        let traversal = '';
        let stack = [];
        stack.push(this);
        let seen = new Set();
        while(stack.length != 0) {
            let cur = stack.pop();
            if(!seen.has(cur)) {
                seen.add(cur);
                traversal += ' ' + cur.value;
            }
            for(let neigh of cur.adjacentNodes) {
                if(!seen.has(neigh)) {
                    stack.push(neigh);
                }
            }
        }
        console.log(traversal);
    }
    bfs() {
        let traversal = '';
        let q = [];
        let seen = new Set();
        q.push(this);
        while(q.length != 0) {
            let cur = q.shift();
            if(!seen.has(cur)) {
                traversal += ' ' + cur.value;
                seen.add(cur);
            }
            for(let neigh of cur.adjacentNodes) {
                if(!seen.has(neigh)) {
                    q.push(neigh);
                }
            }
        }
        console.log(traversal);
    }
    }
   

let E = new GraphNode('E');
let A = new GraphNode('A');
let B = new GraphNode('B');
let G = new GraphNode('G');
let F = new GraphNode('F');
let D = new GraphNode('D');
let C = new GraphNode('C');
let H = new GraphNode('G');

E.adjacentNodes.push(F);
E.adjacentNodes.push(A);
E.adjacentNodes.push(D);

F.adjacentNodes.push(E);
F.adjacentNodes.push(G);
F.adjacentNodes.push(H);

G.adjacentNodes.push(F);
G.adjacentNodes.push(B);

B.adjacentNodes.push(A);
B.adjacentNodes.push(G);
B.adjacentNodes.push(C);

C.adjacentNodes.push(A);
C.adjacentNodes.push(B);
C.adjacentNodes.push(D);

D.adjacentNodes.push(C);
D.adjacentNodes.push(H);
D.adjacentNodes.push(A);
D.adjacentNodes.push(E);

A.adjacentNodes.push(E);
A.adjacentNodes.push(B);
A.adjacentNodes.push(D);
A.adjacentNodes.push(C);

H.adjacentNodes.push(F);
H.adjacentNodes.push(D);

E.bfs();