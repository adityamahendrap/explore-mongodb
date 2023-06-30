db.users.insertOne({
  _id: {
    $oid: "648d3e3ce5ac8a40d2606651",
  },
  email: "geovanny.von@gmail.com",
  password: "wP37QETkVzwSkhl",
  profile: {
    username: "Geovanny62",
    displayName: "Geovanny Von",
    bio: "Believer in the value of mindfulness and living in the present moment. Finding peace in the here and now.",
    location: "Indiana",
    picture: "https://source.unsplash.com/collection/1803",
    links: [
      "https://crushing-hormone.com",
      "https://klutzy-unemployment.biz/",
      "https://snarling-bias.info/",
    ],
  },
  createdAt: {
    $date: "2017-10-21T00:00:00.000Z",
  },
  updatedAt: {
    $date: "2021-08-08T16:00:00.000Z",
  },
});
