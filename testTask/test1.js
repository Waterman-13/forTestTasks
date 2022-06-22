//1.Проверка на пустой результат
function testSelectRecord()
{
let res = selectRecord(table2,name3,description4);
let expected = "результирующий список: ; количество найденных записей: 0";
console.assert(
res===expected,
'The result ${res} doesn’t match the expected value ${expected}.');
}
