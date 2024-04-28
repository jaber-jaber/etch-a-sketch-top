function generateMatrix(gridSize, rows, columns) {

    const integerGridSize = parseInt(gridSize)
    // create the squares ("pixels") row by row and append each row to parent container
    const rowSize = integerGridSize / 2
    
    for (let i = 0; i <= rowSize; i++) {
        const row = document.createElement('div');
        row.className = 'row-squares';

        const column = document.createElement('div');
        column.className = 'column-squares';

        rows.appendChild(row);
        columns.appendChild(column);
    }

}

const gridSize = 32;
const container = document.querySelector('.container');
const rows = document.createElement('div');
const columns = document.createElement('div');

rows.className = 'rows';
columns.className = 'columns';

container.append(rows, columns);

generateMatrix(gridSize, rows, columns)