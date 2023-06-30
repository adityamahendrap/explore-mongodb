// mencari dokumen yang memiliki semua link yang ada dalam array profile.links
db.users.find({
  "profile.links": {
    $all: ["https://novel-establishment.name/", "https://shy-guy.name/"],
  },
});

// mencari dokumen yang memiliki setidaknya satu link yang memenuhi kondisi regex, yaitu mengandung kata "novel" (case-insensitive).
db.users.find({ "profile.links": { $elemMatch: { $regex: /novel/i } } });

// mencari dokumen yang memiliki tepat 7 elemen dalam array profile.links
db.users.find({ "profile.links": { $size: 7 } });
