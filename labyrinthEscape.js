function solution(map) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const height = map.length;
    const width = map[0].length;

    function isValid(x, y) {
        return x >= 0 && x < width && y >= 0 && y < height;
    }

    function bfs() {
        const queue = [];
        const visited = new Array(height).fill().map(() => new Array(width).fill(false));
        queue.push([0, 0, 0]);
        visited[0][0] = true;

        while (queue.length > 0) {
            const [x, y, steps] = queue.shift();

            if (x === width - 1 && y === height - 1) {
                return steps + 1;
            }

            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                if (isValid(nx, ny) && !visited[ny][nx] && map[ny][nx] === 0) {
                    queue.push([nx, ny, steps + 1]);
                    visited[ny][nx] = true;
                }
            }
        }

        return -1;
    }

    let shortestPath = bfs();

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (map[y][x] === 1) {
                map[y][x] = 0; 
                const pathLength = bfs();
                if (pathLength !== -1 && (shortestPath === -1 || pathLength < shortestPath)) {
                    shortestPath = pathLength;
                }
                map[y][x] = 1;
            }
        }
    }

    return shortestPath;
}


console.log(solution([[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0]])); 
console.log(solution([[0, 1, 1, 0], [0, 0, 0, 1], [1, 1, 0, 0], [1, 1, 1, 0]])); 
