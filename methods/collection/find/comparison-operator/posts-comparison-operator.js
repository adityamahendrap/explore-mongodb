// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "readingTime" yang sama dengan 8.
db.posts.find({ readingTime: { $eq: 8 } });

// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "views" lebih besar dari 50000.
db.posts.find({ views: { $gt: 50000 } });

// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "createdAt" lebih besar dari atau sama dengan tanggal 1 Januari 2023.
db.posts.find({ createdAt: { $gte: ISODate("2023-01-01T00:00:00Z") } });

// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "readingTime" lebih kecil dari 10.
db.posts.find({ readingTime: { $lt: 10 } });

// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "updatedAt" lebih kecil dari atau sama dengan tanggal 31 Desember 2024.
db.posts.find({ updatedAt: { $lte: ISODate("2024-12-31T23:59:59Z") } });

// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "tags" yang termasuk dalam array ["Creativity", "Writing"].
db.posts.find({ tags: { $in: ["Creativity", "Writing"] } });

// mencari semua dokumen dalam koleksi "posts" yang tidak memiliki nilai "tags" yang termasuk dalam array ["Productivity", "Freelancing"].
db.posts.find({ tags: { $nin: ["Productivity", "Freelancing"] } });

// mencari semua dokumen dalam koleksi "posts" yang memiliki nilai "authorId" yang tidak sama dengan ObjectId("648d3e7297a0059630318e8c").
db.posts.find({ authorId: { $ne: ObjectId("648d3e7297a0059630318e8c") } });
