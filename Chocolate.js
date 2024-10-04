var N = prompt("Enter a number")
const arr = []
for(let i=0;i<N;i++)
{
    arr[i] = Number(prompt("Enter the number"+(i+1)))
}
var index = 0
for(let i=0;i<N;i++)
{
    if(arr[i]!=0)
        arr[index++] = arr[i]
}
while(index<arr.length)
{
    arr[index++]=0;
}
console.log(arr)
