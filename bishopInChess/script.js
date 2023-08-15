const table = document.getElementById("chessboard");
// 8 x 8 chess board
const ROWS = 8;
const COLS = 8;
let white = false;
let chessBoardMap = {};

// building table
for (let i = 0; i < ROWS; i++) {
  let tr = document.createElement("tr");
  white = !white;
  for (let j = 0; j < COLS; j++) {
    let col = document.createElement("td");
    col.setAttribute("data-key", `${i}-${j}`);
    col.setAttribute("class", "cell");
    if (white) {
      col.classList.add("white");
      white = false;
    } else {
      col.classList.add("black");
      white = true;
    }
    tr.appendChild(col);
  }
  table.appendChild(tr);
}

function highlightTopRight(row, col) {
  let i = row;
  let j = col;
  while (i >= 0 && j <= COLS) {
    chessBoardMap[`${i}-${j}`] = true;
    i--;
    j++;
  }
  console.log("top-right", { ...chessBoardMap });
}

function highlightTopLeft(row, col) {
  let i = row;
  let j = col;
  while (i >= 0 && j >= 0) {
    chessBoardMap[`${i}-${j}`] = true;
    i--;
    j--;
  }
  console.log("top-left", { ...chessBoardMap });
}
function highlightBottomRight(row, col) {
  let i = row;
  let j = col;
  while (i <= ROWS && j <= COLS) {
    chessBoardMap[`${i}-${j}`] = true;
    i++;
    j++;
  }
  console.log("bottom-right", { ...chessBoardMap });
}

function highlightBottomLeft(row, col) {
  let i = row;
  let j = col;
  while (i <= ROWS && j >= 0) {
    chessBoardMap[`${i}-${j}`] = true;
    i++;
    j--;
  }
  console.log("bottom-left", { ...chessBoardMap });
}

const handleMouseExit = (e) => {
  const cells = document.querySelectorAll(".cell");
  chessBoardMap = {};
  cells.forEach((cell, i) => {
    cell.classList.remove("green");
  });
};

const handleHover = (e) => {
  const cells = document.querySelectorAll(".cell");
  chessBoardMap = {};
  cells.forEach((cell, i) => {
    cell.classList.remove("green");
  });
  console.log(e.target.dataset.key);
  const keyArr = e.target.dataset.key.split("-");
  const selectedRow = keyArr[0];
  const selectedCol = keyArr[1];
  highlightTopRight(selectedRow, selectedCol);
  highlightBottomRight(selectedRow, selectedCol);
  highlightTopLeft(selectedRow, selectedCol);
  highlightBottomLeft(selectedRow, selectedCol);
  //   console.log("map", chessBoardMap);

  //   const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    const key = cell.dataset.key;
    // console.log(chessBoardMap);
    if (chessBoardMap[key]) {
      cell.classList.add("green");
    }
  }
};

table.addEventListener("mouseover", handleHover);
table.addEventListener("mouseleave", handleMouseExit);
