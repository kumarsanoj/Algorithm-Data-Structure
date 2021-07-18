class Graph {
    constructor() {
        this.noOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        if (!this.adjacentList[node]) {
            this.adjacentList[node] = [];
            this.noOfNodes++;
        }
    }
    addEdge(node1, node2) {
        if (this.adjacentList[node1] || this.adjacentList[node2]) {
            if (this.adjacentList[node1]) {
                this.adjacentList[node1].push(node2);
            } else {
                this.adjacentList[node2].push(node1);
            }
        }
    }
    showAdjacentList() {
        if(Object.keys(this.adjacentList).length) {
            for(let node in this.adjacentList) {
                let str = node + '-->' + this.adjacentList[node].join(',');
                console.log(str);
            }
        }
    }
}