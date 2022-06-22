//2.Проверка, когда результирующий список=количество найденных записей (в результате 5 записей, всего найдено 5)
function testSelectRecord() {
    let res = selectRecord(table2, name0, description1);
    let expected = “результирующий список:
 id   name   description
 id0  name0  description1
 id1  name0  description1
 id2  name0  description1
 id3  name0  description1
 id4  name0  description1; 
 количество найденных записей: 5 ”;
    console.assert(
        res === expected,
        'The result ${res} doesn t match the expected value ${expected}.');
}
