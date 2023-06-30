// mencari dokumen yang memiliki semua tag "Health" dan "Mental Health" dalam array tags
db.posts.find({ tags: { $all: ["Health", "Mental Health"] } });

// mencari dokumen yang memiliki setidaknya satu tag yang memenuhi kondisi regex, yaitu dimulai dengan "Corona" (case-insensitive)
db.posts.find({ tags: { $elemMatch: { $regex: /^Corona/i } } });

// mencari dokumen yang memiliki tepat 5 elemen dalam array tags
db.posts.find({ tags: { $size: 5 } });
