class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true;
        }
        return false
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => !vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => !vertex1)
            return true
        }
        return false
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;
        while(this.adjacencyList[vertex].length ) {
           let temp = this.adjacencyList[vertex].pop()
           this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex];
        return this;
    }

    breadthFirst(start) {
       const queue = [start]
       const result = []
       const visited = {}
       visited[start] = true
       while(queue.length){
          const currentVertex = queue.shift()
          result.push(currentVertex)
          this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]) {
                visited[neighbor] = true
                queue.push(neighbor)
            }
          })
       }

       return result;
    }

    depthFirstRecursive(start) {
        const result = []
        const visited = {}
        const traverse = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return traverse(neighbor)
                }
              })
        }
        traverse(start)
        return result;
     }

     depthFirstIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        visited [start] = true
        while(stack.length) {
            const currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result;
     }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
console.log(graph.depthFirstIterative('C'))

