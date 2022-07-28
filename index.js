let array = ['suraj', 'gitesh','chaitanya','rahul','aditya']
console.log('Mian array', array)
//modifying the created array and reversing it

// by using reverse function
let reversedarray = array.reverse()
console.log('reverse array',reversedarray)
console.log('the new array',array)

// using the for loop reverse by
let reversedarray1 =[]
for(let i = array.length -1;i>=0;i--)
{
    reversedarray1.push(array[i])
}
console.log('REVERSE ARRAY', reversedarray1)