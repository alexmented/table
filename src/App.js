import React, {useState, useRef, useEffect, useCallback} from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import range from "lodash/range";

import {FixedSizeList as List} from "react-window";
import {FixedSizeGrid as Grid} from "react-window";

const cellHeight = 30;
const cellWidth = 120;
const height = 400;
const width = 630;

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
  },
  multigrid: {
    marginTop: 8,
    width,
    height,
    border: "1px solid red",
    position: "relative",
  },
  rowLabels: {
    // absolutely position the label and move it down `cellHeight`
    position: "absolute !important",
    top: cellHeight,
    borderTop: "1px solid black",
  },
  columnLabels: {
    // absolutely position the label and move it down `cellWidth`
    position: "absolute !important",
    borderLeft: "1px solid black",
  },
  grid: {
    // absolutely position the label and move it down `cellWidth` and `cellHeight`
    position: "absolute !important",
    top: cellHeight,
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
  },
  cell: {
    // set the `cellHeight`
    height: cellHeight,
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    fontFamily: "Arial",
    "&:hover": {color: "red"},
  },
});

// some `const`s for the fake data
const rows = 30;
const columns = 5;

// set up the fake data
const bunchOfData = range(rows)
  .reverse()
  .map((i) =>
    range(columns)
      .map((j) => String.fromCharCode(j + 65))
      .map((letter) => `${letter}${i}`)
  );

function ColumnLabel({data, index: columnIndex, style}) {
  const classes = useStyles();

  const column = String.fromCharCode(columnIndex + 65);
  return (
    <div className={classes.cell} style={style} onClick={() => data.func(columnIndex)}>
      {column}
    </div>
  );
}

// this is the render function for the grid labels
function GridCell({columnIndex, data, rowIndex, style}) {
  const classes = useStyles();
  const cell = data.otherData.length
    ? data["otherData"][rowIndex][columnIndex]
    : bunchOfData[rowIndex][columnIndex];

  return (
    <div className={classes.cell} style={style}>
      {cell}
    </div>
  );
}

function App() {
  const classes = useStyles();

  const [scrollY, setScrollY] = useState(0);
  const [value, setValue] = useState("");
  // const [filt, setFilt] = useState([]);

  const columnLabelRef = useRef(null);
  const gridRef = useRef(null);

  const handleGridScroll = useCallback((e) => {
    if (e.scrollUpdateWasRequested) return;

    setScrollY(e.scrollTop);
  }, []);

  useEffect(() => {
    gridRef.current.scrollTo({
      scrollTop: scrollY,
    });
  }, [scrollY]);

  const filtered = bunchOfData
    .map((v) => v)
    .map((val) => {
      if (val.indexOf(value) > -1) {
        return val;
      }
      return [];
    })
    .filter((v) => v.length > 1);

  const onSortClick = () => {
    // console.log(bunchOfData.sort((a, b) => a[num] > b[num]));
  };
  // console.log(filtered);
  return (
    <div className={classes.app}>
      <Typography variant="h4">Scroll-synced multi-grids demo</Typography>
      <Typography>
        Scroll on the grid, the row labels, or the column labels and see how all the grids
        are in sync!
      </Typography>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <div className={classes.multigrid}>
        <List
          className={classes.columnLabels}
          height={cellHeight}
          itemSize={cellWidth}
          width={width}
          layout="horizontal"
          itemCount={columns}
          ref={columnLabelRef}
          itemData={{func: onSortClick}}
        >
          {ColumnLabel}
        </List>

        <Grid
          className={classes.grid}
          columnCount={columns}
          columnWidth={cellWidth}
          height={height - cellHeight}
          width={width}
          rowCount={filtered.length || rows}
          rowHeight={cellHeight}
          onScroll={handleGridScroll}
          ref={gridRef}
          itemData={{otherData: filtered}}
        >
          {GridCell}
        </Grid>
      </div>
    </div>
  );
}

export default App;
