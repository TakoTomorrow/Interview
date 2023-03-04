var numberArray = [];
var n = 6;
var rowOfChessboard = '';

for(let i = 0 ; i < n ; i++)
    rowOfChessboard += '*';

main();

function main(){
    
    for(let i = 1 ; i <= n ; i ++){
        
        if(numberArray.includes(i))
            continue;

        numberArray.push(i);

        let length = numberArray.length;

        if(length == n){
            let flag = CheckNumberArray();

            if(flag){
                PrintNumberArray();
            }
        }
        else{
            main();
        }

        numberArray = numberArray.filter( f => f != i);
    }
}

function CheckNumberArray(){    
    try{
        for(let i= 0 ; i < n -1 ; i ++){
            for(let j = i + 1 ; j < n ; j++){
                let d_distance = j - i;
                let d_numb = numberArray[i] - numberArray[j];
                d_numb = d_numb > 0 ? d_numb : -d_numb;

                if(d_distance == d_numb)
                    throw new Error('Conflict!');
            }
        }

        return true;
    }
    catch(e){
        return false;
    }
}

function PrintNumberArray(){
    console.log(numberArray);
    numberArray.forEach( number=>{
        let row = rowOfChessboard.substring(0, number -1) + 'Q' + rowOfChessboard.substring(number);

        console.log(row);
    })

    console.log('\n\n');
}