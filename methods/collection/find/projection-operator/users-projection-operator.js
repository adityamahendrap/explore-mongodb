// mengambil hanya elemen pertama dari array profile.username dalam setiap dokumen
db.users.find({}, { "profile.username.$": 1 });

// mengambil elemen pertama dari array links yang cocok dengan kondisi regex, yaitu kata yang mengandung "name" (case-insensitive)
db.users.find({}, { links: { $elemMatch: { $regex: /name/i } } });

// menggunakan pencarian teks dengan operator $text untuk mencari dokumen yang cocok dengan kata kunci tertentu dalam bidang email. Kemudian, menggunakan operator $meta dalam proyeksi untuk mengambil skor relevansi pencarian teks
// db.users.find({}, { email: 1, score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });

// mengambil tiga elemen pertama dari array links dalam setiap dokumen
db.users.find({}, { links: { $slice: 3 } });