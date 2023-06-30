// menghitung jumlah dokumen yang memiliki tag "Health"
db.posts.countDocuments({ tags: "Health" });

// membatasi hasil pencarian hanya mengembalikan 5 dokumen pertama
db.posts.find().limit(5);

// melewati 10 dokumen pertama dan mengembalikan dokumen berikutnya setelahnya
db.posts.find().skip(10);

// mengurutkan dokumen berdasarkan field views secara menurun (descending order), sehingga dokumen dengan views tertinggi akan muncul terlebih dahulu
db.posts.find().sort({ views: -1 });
