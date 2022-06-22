/*3.Проверка, когда результирующий список < количество 
найденных записей
(в результате 20 записей, всего найдено 25)*/
function testSelectRecord() {
    let res = selectRecord(table1, name0, description1);
    let expected = “результирующий список:
id   name   description
id0  name0  description1
id1  name0  description1
id2  name0  description1
id3  name0  description1
id4  name0  description1
id5  name0  description1
id6  name0  description1
id7  name0  description1
id8  name0  description1
id9  name0  description1
id10 name0  description1
id11 name0  description1
id12 name0  description1
id13 name0  description1
id14 name0  description1
id15 name0  description1
id16 name0  description1
id17 name0  description1
id18 name0  description1
id19 name0  description1; 
количество найденных записей: 25”;
    console.assert(
        res === expected,
'The result ${ res } doesn’t match the expected value ${ expected }.');
}
