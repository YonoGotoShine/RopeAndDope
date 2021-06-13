var l = [1,2,3,4,5];


for(var i = 0;i<5; i++)
{
    localStorage.setItem("tab"+ i, l[i]);
}

console.log(localStorage.getItem("tab" + 4))
