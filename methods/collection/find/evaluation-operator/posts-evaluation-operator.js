// mencari dokumen yang memiliki jumlah views lebih besar dari 90.000
db.posts.find({ $expr: { $gt: ["$views", 90000] } });

// mencari dokumen yang memiliki nilai "readingTime" lebih besar atau sama dengan 5
// db.posts.find({ $jsonSchema: { properties: { readingTime: { $gte: 5 } } } });
const jsonSchema = {
  $jsonSchema: {
    properties: {
      readingTime: {
        bsonType: "number",
        minimum: 5
      }
    }
  }
};
db.runCommand({
  find: "posts",
  filter: jsonSchema
});


//  mencari dokumen yang memiliki nilai "views" yang merupakan kelipatan dari 100
db.posts.find({ views: { $mod: [100, 0] } });

// mencari dokumen yang memiliki judul yang cocok dengan pola pencarian "write" secara case-insensitive
db.posts.find({ title: { $regex: /write/i } });

// mencari dokumen yang mengandung kata-kata "writing" dan "tips"
// db.posts.find({ $text: { $search: "writing tips" } });

// mencari dokumen yang memenuhi kondisi views lebih besar dari 50000
// db.posts.find({ $where: "this.views > 50000" });
