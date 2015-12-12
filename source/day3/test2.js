var user1 = {name: "blue", age: 10, item: ['item1', 'item2']};
var user2 = {name: "jack", age: 20, item: ['item1', 'item3']};
var user3 = {name: "low", age: 30, item: ['item1', 'item2']};
var user4 = {name: "hyena", age: 40, item: ['item1', 'item2']};

var users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

//users.pop(); //뒤부터 삭제함
//users.splice(2,1);

for (var i=0; i<users.length; i++)
{
	if(users[i].name === 'blue')
	{
		console.log('이름은 '+users[i].name+"입니다");
		console.log('나이는'+users[i].age+"입니다");
		console.log('아이템은 '+users[i].item+"입니다");
		console.log('-----------------------------');
		break;
	}
}