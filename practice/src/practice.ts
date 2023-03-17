const numArray4:number[] = [4,7,3,8,9,10]
const numArray5:string[] = ["Thi", "Hong", "Anh", "Nga"]


function bubbleSort<T>(arr: T[], callback: (item:T) => T): T[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ( (arr[j] > arr[j + 1]) ) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];          
            }
        }
    } 

    return arr;
}

const result = bubbleSort(numArray4, (item) => {
   return item
})

console.log(result);


const result2 = bubbleSort(numArray5, (item) => {
    return item
 })
 
 console.log(result2);