db.posts.find({
  $and: [{ tags: "Writing" }, { views: { $gte: 10000 } }],
});

db.posts.find({
  $or: [{ tags: "Creativity" }, { tags: "Productivity" }],
});

db.posts.find({
  $nor: [{ tags: "Mental Health" }, { views: { $gte: 50000 } }],
});

db.posts.find({
  tags: {
    $not: {
      $in: ["Freelancing"],
    },
  },
});
