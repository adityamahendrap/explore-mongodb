// mencari dokumen yang memiliki field "thumbnail" yang ada (tersedia)
db.posts.find({ thumbnail: { $exists: true } });

// mencari dokumen yang memiliki tipe data "number" pada field "readingTime"
db.posts.find({ readingTime: { $type: "number" } });
