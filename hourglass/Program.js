n=7;

main();

function main(){
    try{
        if(n % 2 == 0)
            throw Error('The number ' + n + ' is even.');
        else
            console.log('當 width=' + n + ' printStar(' +  n + ')印出');

        let stringdot = '';
        let padding = 0;
        
        for(let index = n ; index > 0 ; index = index -2){
            stringdot = AppendRepeatWords(stringdot, ' ', padding);

            stringdot = AppendRepeatWords(stringdot, '*', index);

            stringdot += '\n';

            padding ++;
        }

        padding --;

        for(let index = 3 ; index <= n  ; index = index +2){
            stringdot = AppendRepeatWords(stringdot, ' ', padding -1);

            stringdot = AppendRepeatWords(stringdot, '*', index);

            stringdot += '\n';
            
            padding --;
        }

        console.log(stringdot);
    }
    catch(e){
        console.log(e.message);
    }
}

function AppendRepeatWords(message, substring, times){
    for(index = 0 ; index < times ; index ++){
        message += substring;
    }

    return message;
}