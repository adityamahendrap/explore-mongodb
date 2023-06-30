// mencari dokumen yang memenuhi kondisi updatedAt lebih besar dari createdAt
db.users.find({ $expr: { $gt: ["$updatedAt", "$createdAt"] } });

// mencari dokumen yang memenuhi skema JSON tertentu, dengan syarat bahwa nilai properti "email" harus cocok dengan pola regex ".+@hotmail\\.com"
// db.users.find({
//   $jsonSchema: { "properties.email": { $regex: ".+@hotmail\\.com" } },
// });

// mencari dokumen yang memenuhi syarat bahwa nilai properti "createdAt" adalah bilangan genap
// db.users.find({ createdAt: { $mod: [2, 0] } });

// mencari dokumen yang memenuhi syarat bahwa nilai properti "profile.username" diawali dengan "Kendall" (case-insensitive)
db.users.find({ "profile.username": { $regex: /^Kendall/i } });

// mencari dokumen yang memenuhi syarat bahwa teks pencarian "equality inclusion" ditemukan dalam salah satu dari beberapa field yang telah diindeks dengan teks.
// db.users.find({ $text: { $search: "equality inclusion" } });

// mencari dokumen yang memenuhi syarat bahwa panjang array profile.links lebih dari 5
// db.users.find({ $where: "this.profile.links.length > 5" });
