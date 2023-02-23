// List of students (replace with actual student names)
const students = ["Student 1", "Student 2", "Student 3"];

// Function to create student list with checkboxes
function createStudentList() {
  const studentList = document.getElementById("students");
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `student-${i}`;
    checkbox.name = student;
    checkbox.value = student;
    checkbox.checked = false;
    const label = document.createElement("label");
    label.htmlFor = `student-${i}`;
    label.textContent = student;
    const div = document.createElement("div");
    div.classList.add("student");
    div.appendChild(checkbox);
    div.appendChild(label);
    studentList.appendChild(div);
  }
}

// Function to submit attendance and log date/time and checked students
function submitAttendance() {
  const checkedStudents = [];
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  checkboxes.forEach((checkbox) => {
    checkedStudents.push(checkbox.value);
  });
  const date = new Date();
  console.log(`Attendance taken on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}:`);
  console.log(checkedStudents);
}

// Call function to create student list when page loads
createStudentList();
