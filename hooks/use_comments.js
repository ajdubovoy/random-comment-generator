var faker = require('faker');

function useComments() {
  var comments = [];

  for (var i = 0; i < 20; i++) {
    var comment = {
      name: faker.name.findName(),
      content: faker.lorem.paragraph(),
      date: faker.date.past()
    };
    comments = [
      ...comments,
      comment
    ]
  }

  return comments;
};

module.exports = useComments;
