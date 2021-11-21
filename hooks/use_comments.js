var faker = require('faker');
var uuid = require('uuid');

function useComments() {
  var comments = [];

  for (var i = 0; i < 20; i++) {
    var comment = {
      name: faker.name.findName(),
      content: faker.lorem.paragraph(),
      date: faker.date.past(),
      token: uuid.v4()
    };
    comments = [
      ...comments,
      comment
    ]
  }

  return comments;
};

module.exports = useComments;
