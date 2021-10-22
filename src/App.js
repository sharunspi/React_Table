
import ReusableTable from "./component/ReusableTable";

const tableHead = [
  "Column 1",
  "Column 2",
  "Column 3",
  "Column 4",
  "Column 5"
]

const tableBody = [
  [
    "Row 1",
    "Row 2",
    "Row 3",
    "Row 4",
    "Row 5"
  ],
  [
    "Row 1",
    "Row 2",
    "Row 3",
    "Row 4",
    "Row 5"
  ],
  [
    "Row 1",
    "Row 2",
    "Row 3",
    "Row 4",
    "Row 5"
  ]
]

function App() {
  return (
    <div className="App">
        <ReusableTable
          tableHead = {tableHead} 
          tableRow = {tableBody}
        />
    </div>
  );
}

export default App;
