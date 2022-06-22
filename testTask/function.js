function selectRecord(tableName, Name, Description) {
    connection.query("INSERT INTO table1(id, name, description)
VALUES
    (“id0”,”name0”,“description1”),
    (“id1”,”name0”,“description1”),
    (“id2”,”name0”,“description1”),
    (“id3”,”name0”,“description1”),
    (“id4”,”name0”,“description1”),
    (“id5”,”name0”,“description1”),
    (“id6”,”name0”,“description1”),
    (“id7”,”name0”,“description1”),
    (“id8”,”name0”,“description1”),
    (“id9”,”name0”,“description1”),
    (“id10”,”name0”,“description1”),
    (“id11”,”name0”,“description1”),
    (“id12”,”name0”,“description1”),
    (“id13”,”name0”,“description1”),
    (“id14”,”name0”,“description1”),
    (“id15”,”name0”,“description1”),
    (“id16”,”name0”,“description1”),
    (“id17”,”name0”,“description1”),
    (“id18”,”name0”,“description1”),
    (“id19”,”name0”,“description1”),
    (“id20”,”name0”,“description1”),
    (“id21”,”name0”,“description1”),
    (“id22”,”name0”,“description1”),
    (“id23”,”name0”,“description1”),
    (“id24”,”name0”,“description1”) , function(err, results) {
        if (err) { console.log(err); }
        else { console.log(“данные добавлены”); }
    });

    connection.query(INSERT INTO table2(id, name, description)
VALUES
    (“id0”,”name0”,“description1”),
    (“id1”,”name0”,“description1”),
    (“id2”,”name0”,“description1”),
    (“id3”,”name0”,“description1”),
    (“id4”,”name0”,“description1”),
    (“id5”,”name1”,“description2”),
    (“id6”,”name1”,“description2”),
    (“id7”,”name1”,“description2”),
    (“id8”,”name1”,“description2”),
    (“id9”,”name1”,“description2”),
    (“id10”,”name1”,“description2”),
    (“id11”,”name1”,“description2”),
    (“id12”,”name1”,“description2”),
    (“id13”,”name1”,“description2”),
    (“id14”,”name1”,“description2”),
    (“id15”,”name1”,“description2”),
    (“id16”,”name1”,“description2”),
    (“id17”,”name1”,“description2”),
    (“id18”,”name1”,“description2”),
    (“id19”,”name1”,“description2”),
    (“id20”,”name1”,“description2”),
    (“id21”,”name1”,“description2”) , function(err, results) {
        if (err) { console.log(err); }
        else { console.log(“данные добавлены”); }
    });

    connection.query(“SELECT * FROM ${ tableName } WHERE name = "${Name}" OR description = "${Description}" LIMIT 20 ORDER BY name”, function (err, result) {
        if (err) { console.log(err); }
        else { console.log(result); }
    });
    connection.query(“SELECT COUNT(*) FROM ${ tableName } WHERE name = "${Name}" OR description = "${Description}" ORDER BY name", function (err, result1) {
        if (err) { console.log(err); }
    else { console.log(result1); }
});
return {
    data: result,
    count: result1,
    displayInfo: function display() {
        document.write(
            "результирующий список: " + data + ";" + "количество найденных записей: " + count);
    }
}
}
