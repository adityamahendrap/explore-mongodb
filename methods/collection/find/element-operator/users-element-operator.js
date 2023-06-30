// mencari dokumen yang memiliki field "profile.picture" yang ada
db.users.find({ "profile.picture": { $exists: true } });

// mencari dokumen yang memiliki tipe data "createdAt" yang berupa tanggal
db.users.find({ createdAt: { $type: "date" } });
