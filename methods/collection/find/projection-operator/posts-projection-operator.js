// mengambil hanya elemen pertama dari array authorId dalam setiap dokumen
db.posts.find({}, { "authorId.$": 1 });

// mengambil elemen pertama dari array tags yang cocok dengan kondisi regex, yaitu kata "Health" (case-insensitive)
db.posts.find({}, { tags: { $elemMatch: { $regex: /Health/i } } });

// menggunakan pencarian teks dengan operator $text untuk mencari dokumen yang cocok dengan kata kunci tertentu dalam bidang title. Kemudian, menggunakan operator $meta dalam proyeksi untuk mengambil skor relevansi pencarian teks
// db.posts.find({}, { title: 1, score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });

// mengambil dua elemen pertama dari array tags dalam setiap dokumen
db.posts.find({}, { tags: { $slice: 2 } })
