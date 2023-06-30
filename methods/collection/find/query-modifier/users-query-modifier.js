// menghitung jumlah dokumen yang memiliki lokasi di "Virginia"
db.users.countDocuments({ location: "Virginia" });

// membatasi hasil pencarian hanya mengembalikan 10 dokumen pertama
db.users.find().limit(10);

// melewati 5 dokumen pertama dan mengembalikan dokumen berikutnya setelahnya
db.users.find().skip(5);

// mengurutkan dokumen berdasarkan field createdAt secara menurun (descending order), sehingga dokumen dengan tanggal pembuatan terbaru akan muncul terlebih dahulu
db.users.find().sort({ createdAt: -1 });
