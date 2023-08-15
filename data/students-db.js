const students = [
    { student: 'Smith, Will', status: 'graduated' },
    { student: 'Johansson, Scarlett', status: 'enrolled' },
    { student: 'DiCaprio, Leonardo', status: 'enrolled/probation' },
    { student: 'Roberts, Julia', status: 'graduated' },
    { student: 'Johnson, Dwayne', status: 'not enrolled' },
    { student: 'Gomez, Selena', status: 'enrolled' },
    { student: 'Hemsworth, Chris', status: 'graduated' },
    { student: 'Lawrence, Jennifer', status: 'graduated' },
    { student: 'Pitt, Brad', status: 'graduated' },
    { student: 'Watson, Emma', status: 'graduated' },
    { student: 'Clooney, George', status: 'graduated' },
    { student: 'Portman, Natalie', status: 'graduated' },
    { student: 'Cruise, Tom', status: 'transferred' },
    { student: 'Swift, Taylor', status: 'enrolled' },
    { student: 'Cooper, Bradley', status: 'enrolled' },
    { student: 'Jolie, Angelina', status: 'graduated' },
    { student: 'Reynolds, Ryan', status: 'enrolled' },
    { student: 'Gaga, Lady', status: 'graduated' },
    { student: 'Depp, Johnny', status: 'not enrolled' },
    { student: 'Stewart, Kristen', status: 'enrolled/probation' }
  ];

  module.exports = {
    getAll: function() {
      return students;
    }
  };