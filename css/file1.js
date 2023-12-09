// const my=['item1',"item2","item3","item4"]
// my.splice(1,0,"item")
// console.log(my)
// const m=new Array(10).fill(-1)
// console.log(m)
// const arr=[1,2,3,4,5,6]
// arr.fill(-1,0,5)
// console.log(arr)
// const num=[2,36,8,7,57]
// const ans=num.some((num1)=>num1%2===0)
// console.log(ans)
// const users=[
//     {product:1,productName:"Mobile",price: 2000},
//     {product:2,productName:"CD",price: 4000},
//     {product:3,productName:"TV",price: 6000},
//     {product:4,productName:"MacBook",price: 8000},
//     {product:5,productName:"laptop",price: 9000},
// ]
// const ans=users.some((item)=>item.price>2221);
// console.log(ans)
//const num=[2,4,6,8,0,1]
// const ans=num.every((num1)=>num1%2==0)
// console.log(ans);
// function isEven(num)
// {
//     return (num%2===0)
// }
// var ans=num.every(isEven)
// console.log(ans)
const user=[
    {product:1,productName:'Mobile',price:2000},
    {product:2,productName:'laptop',price:4000},
    {product:3,productName:'TV',price:6000},
    {product:4,productName:'Mac',price:26000},
]
const ans=user.every((num1)=>num1.price>1000)
console.log(ans)