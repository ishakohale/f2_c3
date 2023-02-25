let tableData = [];

function addRow() {
  const tableBody = document.querySelector("#table tbody");
  const newRow = document.createElement("tr");
  const newRowData = {
    id: tableData.length + 1,
    student_name: "",
    student_roll: "",
    subject: "",
    marks: "",
    markedBy: "",
  };

  for (const key in newRowData) {
    const cell = document.createElement("td");

    if (key === "id") {
      cell.textContent = newRowData[key];
    } else {
      const input = document.createElement("input");

      if (key === "marks") {
        input.type = "number";
      }

      if (key === "markedBy") {
        input.type = "email";
      }

      input.value = newRowData[key];
      cell.appendChild(input);

      input.addEventListener("input", () => {
        newRowData[key] = input.value;
      });
    }

    newRow.appendChild(cell);
  }

  const saveCell = document.createElement("td");
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveCell.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    const isDataValid = Object.values(newRowData).every((value) => value !== "");
    const marks = Number(newRowData.marks);

    if (isDataValid && !isNaN(marks)) {
      tableData.push(newRowData);
      console.log(tableData);
      newRowData.save = saveButton;
    }
  });

  newRow.appendChild(saveCell);
  tableBody.appendChild(newRow);
}

const addRowButton = document.querySelector("#add-row");
addRowButton.addEventListener("click", addRow);
