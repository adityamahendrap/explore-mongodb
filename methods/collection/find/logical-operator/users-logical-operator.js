// Operator $and:
db.users.find({
  $and: [
    { "profile.location": "Virginia" },
    { "profile.username": "Kendall_Marks64" },
  ],
});

// Operator $or:
db.users.find({
  $or: [{ "profile.location": "Virginia" }, { "profile.location": "New York" }],
});

// Operator $nor:
db.users.find({
  $nor: [{ "profile.location": "California" }, { "profile.location": "Texas" }],
});

// Operator $not:
db.users.find({
  "profile.location": {
    $not: {
      $in: ["California", "Texas"],
    },
  },
});
