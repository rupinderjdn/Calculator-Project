// const arr1 = [1,2,3,4,5]


// function makeItDoublexyz(xyz){
//     return "rohan"+"1"
// }
// const arr5 = arr1.map(x=>makeItDoublexyz(x))
// // const arr2 = arr1.map(makeItDoublexyz)

// // Both are same


// console.log(arr1)
// console.log(arr5)
/*
7
78
78.
exp = 78.4/35 
= => eval(exp)
C => display should get empty
<- => just remove last character
*/

let displayxyz = document.getElementById('display')

let buttonsxyz = Array.from(document.getElementsByClassName('btn'))

function clickxyz(btnxyz) {
    btnxyz.addEventListener("click", (xyz) => {
        switch (xyz.target.innerText) {
            case '=':
                try{
                    if (displayxyz.innerText != '') {
                        displayxyz.innerText = eval(displayxyz.innerText)
                    }
                }
                catch{
                    displayxyz.innerText = 'Error'
                }
                
                break;
            case 'C':
                displayxyz.innerText = ''
                break;
            case '←':
                displayxyz.innerText = displayxyz.innerText.slice(0, -1)
                break;
            default:
                if(displayxyz.innerText == "Error"){
                    displayxyz.innerText=''
                }
                displayxyz.innerText = displayxyz.innerText + xyz.target.innerText
                break;
        }
    })
}
buttonsxyz.map(abcxyz => clickxyz(abcxyz))
// buttonsxyz.map(clickxyz)
// Above two things are same