function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function () {
  return `${this.firstName}${this.lastName}`;
};

Student.prototype.enroll = function (course) {
  this.courses.forEach((enrolledCourse) => {
    if (enrolledCourse.conflictsWith(course)) {
      throw `Can't enroll in ${course.name}`;
    }
  });
  this.courses.push(course);
};

Student.prototype.courseLoad = function() {
  let hash = {};
  this.courses.forEach((course) => {
    hash[course.department] = hash[course.department] || 0;
    hash[course.department] += course.credits;
  });
  return hash;
};

// ---------
//Constructor function
function Course(name, department, credits, timeblock, ...days) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.timeblock = timeblock;
  this.days = days;
}


Course.prototype.addStudent = function (student) {
  this.students.push(student);
  student.enroll(this);
};

Course.prototype.conflictsWith = function (secondCourse) {
  if (this.timeblock === secondCourse.timeblock) {
    this.days.forEach((day) => {
      if (secondCourse.days.includes(day)) {
        return true;
      }
    });
  }
  return false;
};

// ------
window.mike = new Student('mike', 'zhu');

window.python = new Course('python', 'Computer Science', 4);
window.ruby = new Course('ruby', 'Computer Science', 4);
window.paint = new Course('paint', 'Art', 5);
window.dance = new Course('dance', 'Art', 6);

window.mike.enroll(window.python);
window.mike.enroll(window.ruby);
window.mike.enroll(window.dance);
