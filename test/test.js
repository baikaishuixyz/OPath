const oPth = require('../OPath.js');

const object = {
  school: {
    class: {
      students: [{name: 'lisi', age: 20, course: ['English', 'Math']}, {name: 'zhangsan', age: 23, course: ['English', 'Chinese']}]
    }
  }
}

test('school.class', () => {
  expect(oPth(object, 'school.class')).toBe(object.school.class)
});

test('school.class.students[0].course[1]', () => {
  expect(oPth(object, 'school.class.students[0].course[1]')).toBe('Math')
});
