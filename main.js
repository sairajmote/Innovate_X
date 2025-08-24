const studentDatabase = {
"SCOE2023001": {
id: "SCOE2023001",
name: "John Doe",
email: "john.doe@scoe.edu.in",
phone: "+91 9876543210",
department: "Computer Engineering",
semester: "4",
address: "Mumbai, Maharashtra",
dob: "2002-05-15",
admissionYear: "2020",
fatherName: "Robert Doe",
motherName: "Mary Doe",
attendance: "87%",
cgpa: "8.72",
completedCredits: "68/120",
courses: [
{ name: "Data Structures", code: "CS401", marks: "92/100", grade: "A+" },
{ name: "Database Management", code: "CS402", marks: "85/100", grade: "A" },
{ name: "Operating Systems", code: "CS403", marks: "78/100", grade: "B+" },
{ name: "Computer Networks", code: "CS404", marks: "88/100", grade: "A" },
{ name: "Web Technologies", code: "CS405", marks: "90/100", grade: "A+" }
],
attendanceRecords: [
{ date: "2023-04-01", status: "Present" },
{ date: "2023-04-02", status: "Present" },
{ date: "2023-04-03", status: "Absent" },
{ date: "2023-04-04", status: "Present" },
{ date: "2023-04-05", status: "Present" }
]
},
"SCOE2023002": {
id: "SCOE2023002",
name: "Jane Smith",
email: "jane.smith@scoe.edu.in",
phone: "+91 9876543211",
department: "Information Technology",
semester: "4",
address: "Pune, Maharashtra",
dob: "2002-08-22",
admissionYear: "2020",
fatherName: "William Smith",
motherName: "Elizabeth Smith",
attendance: "92%",
cgpa: "9.1",
completedCredits: "72/120",
courses: [
{ name: "Data Structures", code: "IT401", marks: "95/100", grade: "A+" },
{ name: "Database Management", code: "IT402", marks: "89/100", grade: "A+" },
{ name: "Operating Systems", code: "IT403", marks: "82/100", grade: "A" },
{ name: "Computer Networks", code: "IT404", marks: "91/100", grade: "A+" },
{ name: "Web Technologies", code: "IT405", marks: "93/100", grade: "A+" }
],
attendanceRecords: [
{ date: "2023-04-01", status: "Present" },
{ date: "2023-04-02", status: "Present" },
{ date: "2023-04-03", status: "Present" },
{ date: "2023-04-04", status: "Present" },
{ date: "2023-04-05", status: "Present" }
]
},
"SCOE2023003": {
id: "SCOE2023003",
name: "Robert Johnson",
email: "robert.johnson@scoe.edu.in",
phone: "+91 9876543212",
department: "Mechanical Engineering",
semester: "3",
address: "Nashik, Maharashtra",
dob: "2003-01-10",
admissionYear: "2021",
fatherName: "Michael Johnson",
motherName: "Sarah Johnson",
attendance: "75%",
cgpa: "7.2",
completedCredits: "52/120",
courses: [
{ name: "Thermodynamics", code: "ME301", marks: "68/100", grade: "B" },
{ name: "Fluid Mechanics", code: "ME302", marks: "72/100", grade: "B+" },
{ name: "Material Science", code: "ME303", marks: "65/100", grade: "B" },
{ name: "Engineering Drawing", code: "ME304", marks: "80/100", grade: "A" },
{ name: "Mathematics III", code: "ME305", marks: "70/100", grade: "B+" }
],
attendanceRecords: [
{ date: "2023-04-01", status: "Present" },
{ date: "2023-04-02", status: "Absent" },
{ date: "2023-04-03", status: "Absent" },
{ date: "2023-04-04", status: "Present" },
{ date: "2023-04-05", status: "Present" }
]
}
};
// Page Navigation Functions
function showPage(pageId) {
document.querySelectorAll('.page').forEach(page => {
page.classList.remove('active');
});
document.getElementById(pageId).classList.add('active');
window.scrollTo(0, 0);
}
function logout() {
localStorage.removeItem('isLoggedIn');
localStorage.removeItem('userType');
showPage('intro-page');
showToast('Logged out successfully');
}
function showToast(message, isError = false) {
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
toastMessage.textContent = message;
toast.classList.remove('error');
if (isError) {
toast.classList.add('error');
}
toast.classList.add('show');
setTimeout(() => {
toast.classList.remove('show');
}, 3000);
}
function downloadTemplate(type) {
showToast(`Downloading ${type} template...`);
// In a real application, this would download an actual template file
}
// Admin Module Navigation
function showAdminModule(moduleId) {
document.querySelectorAll('.admin-module').forEach(module => {
module.classList.remove('active');
});
document.getElementById(moduleId).classList.add('active');
document.querySelectorAll('.admin-nav').forEach(nav => {
nav.classList.remove('active');
});
document.querySelector(`.admin-nav[data-target="${moduleId}"]`).classList.add('active');
}
// View Student Details
function viewStudentDetails(studentId) {
const student = studentDatabase[studentId];
if (!student) {
showToast('Student data not found', true);
return;
}
const modalContent = document.getElementById('student-details-content');
// Generate HTML for student details
modalContent.innerHTML = `
<div class="student-details-grid">
<div class="student-detail-item">
<strong>Student ID</strong>
<span>${student.id}</span>
</div>
<div class="student-detail-item">
<strong>Full Name</strong>
<span>${student.name}</span>
</div>
<div class="student-detail-item">
<strong>Email</strong>
<span>${student.email}</span>
</div>
<div class="student-detail-item">
<strong>Phone</strong>
<span>${student.phone}</span>
</div>
<div class="student-detail-item">
<strong>Department</strong>
<span>${student.department}</span>
</div>
<div class="student-detail-item">
<strong>Semester</strong>
<span>${student.semester}</span>
</div>
<div class="student-detail-item">
<strong>Date of Birth</strong>
<span>${student.dob}</span>
</div>
<div class="student-detail-item">
<strong>Admission Year</strong>
<span>${student.admissionYear}</span>
</div>
<div class="student-detail-item">
<strong>Father's Name</strong>
<span>${student.fatherName}</span>
</div>
<div class="student-detail-item">
<strong>Mother's Name</strong>
<span>${student.motherName}</span>
</div>
<div class="student-detail-item">
<strong>Address</strong>
<span>${student.address}</span>
</div>
</div>
<div class="student-detail-card">
<h4>Academic Performance</h4>
<div class="student-details-grid">
<div class="student-detail-item">
<strong>CGPA</strong>
<span>${student.cgpa}/10</span>
</div>
<div class="student-detail-item">
<strong>Completed Credits</strong>
<span>${student.completedCredits}</span>
</div>
<div class="student-detail-item">
<strong>Attendance</strong>
<span>${student.attendance}</span>
</div>
</div>
</div>
<div class="student-detail-card">
<h4>Course Details</h4>
<table class="data-table">
<thead>
<tr>
<th>Course Code</th>
<th>Course Name</th>
<th>Marks</th>
<th>Grade</th>
</tr>
</thead>
<tbody>
${student.courses.map(course => `
<tr>
<td>${course.code}</td>
<td>${course.name}</td>
<td>${course.marks}</td>
<td>${course.grade}</td>
</tr>
`).join('')}
</tbody>
</table>
</div>
<div class="student-detail-card">
<h4>Recent Attendance</h4>
<table class="data-table">
<thead>
<tr>
<th>Date</th>
<th>Status</th>
</tr>
</thead>
<tbody>
${student.attendanceRecords.map(record => `
<tr>
<td>${record.date}</td>
<td>${record.status}</td>
</tr>
`).join('')}
</tbody>
</table>
</div>
`;
// Show the modal
document.getElementById('student-details-modal').classList.add('active');
}
// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', function() {
// Intro Page Buttons
document.getElementById('student-login-btn').addEventListener('click', function() {
showPage('student-login-page');
});
document.getElementById('admin-login-btn').addEventListener('click', function() {
showPage('admin-login-page');
});
// Login Form Submissions
document.getElementById('student-login-form').addEventListener('submit', function(e) {
e.preventDefault();
const studentId = document.getElementById('student-id').value;
const password = document.getElementById('student-password').value;
if (studentId && password) {
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('userType', 'student');
// Set student details
document.getElementById('student-name-display').textContent = "Student " +
studentId;
document.getElementById('profile-name').textContent = "Student " + studentId;
document.getElementById('profile-id').textContent = studentId;
document.getElementById('student-avatar').textContent = studentId.charAt(0);
document.getElementById('profile-avatar').textContent = studentId.charAt(0);
showPage('student-dashboard');
showToast('Login successful! Welcome to your dashboard.');
// Initialize chart
initPerformanceChart();
} else {
showToast('Please enter valid credentials', true);
}
});
document.getElementById('admin-login-form').addEventListener('submit', function(e) {
e.preventDefault();
const username = document.getElementById('admin-username').value;
const password = document.getElementById('admin-password').value;
if (username && password) {
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('userType', 'admin');
showPage('admin-dashboard');
showToast('Admin login successful!');
} else {
showToast('Please enter valid admin credentials', true);
}
});
// Forgot password forms
document.getElementById('student-forgot-form').addEventListener('submit', function(e) {
e.preventDefault();
showToast('Password reset instructions sent to your email.');
});
document.getElementById('admin-forgot-form').addEventListener('submit', function(e) {
e.preventDefault();
showToast('Admin password reset instructions sent to your email.');
});
// Login options toggle
document.querySelectorAll('.login-option').forEach(option => {
option.addEventListener('click', function() {
const formType = this.getAttribute('data-form');
// Toggle active class
document.querySelectorAll('.login-option').forEach(opt => {
opt.classList.remove('active');
});
this.classList.add('active');
// Show the corresponding form
if (formType === 'login') {
document.getElementById('student-login-form').classList.add('active');
document.getElementById('student-forgot-form').classList.remove('active');
} else if (formType === 'admin-login') {
document.getElementById('admin-login-form').classList.add('active');
document.getElementById('admin-forgot-form').classList.remove('active');
} else if (formType === 'admin-forgot') {
document.getElementById('admin-login-form').classList.remove('active');
document.getElementById('admin-forgot-form').classList.add('active');
} else {
document.getElementById('student-login-form').classList.remove('active');
document.getElementById('student-forgot-form').classList.add('active');
}
});
});
// Admin Navigation
document.querySelectorAll('.admin-nav').forEach(nav => {
nav.addEventListener('click', function() {
const targetModule = this.getAttribute('data-target');
showAdminModule(targetModule);
});
});
// View student buttons
document.querySelectorAll('.view-student-btn').forEach(button => {
button.addEventListener('click', function() {
const studentId = this.getAttribute('data-id');
viewStudentDetails(studentId);
});
});
// Close modal button
document.getElementById('close-student-details').addEventListener('click', function() {
document.getElementById('student-details-modal').classList.remove('active');
});
// Close modal when clicking outside
document.getElementById('student-details-modal').addEventListener('click', function(e) {
if (e.target === this) {
this.classList.remove('active');
}
});
// Check if user is already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
const userType = localStorage.getItem('userType');
if (userType === 'student') {
showPage('student-dashboard');
initPerformanceChart();
} else if (userType === 'admin') {
showPage('admin-dashboard');
}
}
// Add event listeners for buttons to show alerts
const actionButtons = [
'import-students-btn', 'import-marks-btn', 'run-rules-btn',
'generate-gazette-btn', 'generate-marksheet-btn', 'import-faculty-btn',
'import-attendance-btn'
];
actionButtons.forEach(buttonId => {
const button = document.getElementById(buttonId);
if (button) {
button.addEventListener('click', function() {
showToast(`Functionality for ${buttonId.replace('-btn', '')} would be implemented in
a full version.`);
});
}
});
// Form submission handlers
document.getElementById('add-student-form').addEventListener('submit', function(e) {
e.preventDefault();
showToast('Student would be added in a full version.');
});
document.getElementById('add-faculty-form').addEventListener('submit', function(e) {
e.preventDefault();
showToast('Faculty member would be added in a full version.');
});
});
// Initialize performance chart
function initPerformanceChart() {
  const ctx = document.getElementById('performance-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Math', 'Programming', 'Data Structures', 'Database', 'Networking', 'Web Tech'],
      datasets: [{
        label: 'Subject Scores',
        data: [72, 88, 92, 85, 78, 90],
        backgroundColor: [
          'rgba(52, 152, 219, 0.7)',
          'rgba(46, 204, 113, 0.7)',
          'rgba(46, 204, 113, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          'rgba(46, 204, 113, 0.7)'
        ],
        borderColor: [
          'rgba(52, 152, 219, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(46, 204, 113, 1)'
        ],
        borderWidth: 1
      }]
    }
  });
}

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Math', 'Programming', 'Data Structures', 'Database', 'Networking', 'Web Tech'],
    datasets: [{
      label: 'Subject Scores',
      data: [72, 88, 92, 85, 78, 90],
      backgroundColor: [
        'rgba(52, 152, 219, 0.7)',
        'rgba(46, 204, 113, 0.7)',
        'rgba(46, 204, 113, 0.7)',
        'rgba(52, 152, 219, 0.7)',
        'rgba(52, 152, 219, 0.7)',
        'rgba(46, 204, 113, 0.7)'
      ],
      borderColor: [
        'rgba(52, 152, 219, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(46, 204, 113, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + '%';
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});


// Initialize institutional chart
const instCtx = document.getElementById('institutional-chart').getContext('2d');
new Chart(instCtx, {
type: 'doughnut',
data: {
labels: ['First Class', 'Second Class', 'Pass Class', 'Fail'],
datasets: [{
data: [35, 45, 15, 5],
backgroundColor: [
'rgba(46, 204, 113, 0.7)',
'rgba(52, 152, 219, 0.7)',
'rgba(241, 196, 15, 0.7)',
'rgba(231, 76, 60, 0.7)'
],
borderColor: [
'rgba(46, 204, 113, 1)',
'rgba(52, 152, 219, 1)',
'rgba(241, 196, 15, 1)',
'rgba(231, 76, 60, 1)'
],
borderWidth: 1
}]
},
options: {
responsive: true,
maintainAspectRatio: false,
plugins: {
legend: {
position: 'bottom'
}
}
}
});
// Initialize department chart
const deptCtx = document.getElementById('department-chart').getContext('2d');
new Chart(deptCtx, {
type: 'bar',
data: {
labels: ['Computer', 'IT', 'Mechanical', 'Civil', 'ENTC', 'AI'],
datasets: [{
label: 'Average Percentage',
data: [85, 82, 78, 75, 80, 88],
backgroundColor: 'rgba(52, 152, 219, 0.7)',
borderColor: 'rgba(52, 152, 219, 1)',
borderWidth: 1
}]
},
options: {
responsive: true,
maintainAspectRatio: false,
scales: {
y: {
beginAtZero: true,
max: 100,
ticks: {
callback: function(value) {
return value + '%';
}
}
}
}
}
});
