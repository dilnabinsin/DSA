function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        // Boundary checks + skip water or already visited
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') return;

        // Mark current cell as visited
        grid[r][c] = '0';

        // Explore neighbors (4 directions)
        dfs(r + 1, c); // down
        dfs(r - 1, c); // up
        dfs(r, c + 1); // right
        dfs(r, c - 1); // left
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c); // visit all land in this island
            }
        }
    }

    return count;
}
let grid =[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(numIslands(grid))