// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki email "kendall10@hotmail.com".
db.users.find({ createdAt: { $gt: ISODate("2019-01-01") } });

// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki updatedAt setelah atau pada tanggal 26 Agustus 2021 pukul 16:00:00 UTC.
db.users.find({ updatedAt: { $gte: ISODate("2021-08-26T16:00:00.000Z") } });

// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki createdAt sebelum tanggal 1 Januari 2022.
db.users.find({ createdAt: { $lt: ISODate("2022-01-01") } });

// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki updatedAt sebelum atau pada tanggal 1 Januari 2023 pukul 00:00:00 UTC.
db.users.find({ updatedAt: { $lte: ISODate("2023-01-01T00:00:00.000Z") } });

// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki location di field profile yang bernilai "Virginia" atau "New York".
db.users.find({ "profile.location": { $in: ["Virginia", "New York"] } });

// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki location di field profile yang tidak sama dengan "California" atau "Texas".
db.users.find({ "profile.location": { $nin: ["California", "Texas"] } });

// mencari dan mengembalikan dokumen dari koleksi "users" yang memiliki email yang berbeda dengan "kendall10@hotmail.com".
db.users.find({ email: { $ne: "kendall10@hotmail.com" } });
