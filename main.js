var incButton = document.querySelector('.increment');
var decButton = document.querySelector('.decrement');
var counter = document.querySelector('.counter_value');

function increment(){
    console.log('Increment');
    setCounterValue('Increment');
}

function decrement(){
    console.log('Decrement');
    setCounterValue('Decrement');
}

incButton.addEventListener('click',increment);
decButton.addEventListener('click',decrement);

function setCounterValue(type)
{
    var currentValue = Number(counter.textContent);
    if(type=='Increment')
    {
        currentValue = currentValue + 1;
    }
    else{
        currentValue = currentValue - 1;
    }

    counter.textContent = currentValue;
}

