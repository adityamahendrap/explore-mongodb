// Menghapus database
db.dropDatabase();

// Mengambil nama database
db.getName();

// Mengambil informasi host tempat mongodb
db.hostInfo();

// Mengambil versi database
db.version();

// Mengambil statistik penggunaan database
db.stats();

//Mengambil semua nama collection
db.getCollectionNames();

//Membuat collection baru
db.createCollection(name);

//Mendapatkan object collection
db.getCollection(name);

//Mendapat informasi semua collection
db.getCollectionInfos();

// Membuat Collection comments
db.createCollection("comments");

// Membuat Collection follows
db.createCollection("follows");

// Membuat Collection likes
db.createCollection("likes");

// Membuat Collection post
db.createCollection("post");

// Membuat Collection users
db.createCollection("users");
