
// document.getElementById('results').style.display = 'none';
//Create Loading div
// function LoadDiv() {
//     const LoadingDiv = document.createElement('div');
//     const img = document.createElement('img');
//     LoadingDiv.id = 'loading';
//     LoadingDiv.className = 'mt-2';
//     img.src = '5.gif';
//     LoadingDiv.appendChild(img);
//     LoadingDiv.style.display ='none';
// }


//Listen for submit
document.getElementById('interest-form').addEventListener('submit',calculateResults);

//Load Results
document.querySelector('.btn').addEventListener('click',LoadResults);

//Calculate Results
function calculateResults(e) {
    console.log('Calculating...');

    //UI vars
    const AmountMoney = document.getElementById('amount-money');
    const InterestAmount = document.getElementById('interest-amount');
    const InterestTime = document.getElementById('interest-time');
    const YearlyInput = document.getElementById('yearly-interest')
    const MonthlyInput = document.getElementById('monthly-interest')
    const DailyInput = document.getElementById('daily-interest')

    const capital = parseInt(AmountMoney.value);
    const IntAmount=parseInt(InterestAmount.value);
    const IntTime = parseInt(InterestTime.value);

    const YearlyInterestFormula = (capital * IntAmount * IntTime)/ 100;
    const MonthlyInterestFormula =(capital * IntAmount * IntTime)  / (100 * 12);
    const DailyInterestFormula =(capital * IntAmount * IntTime) / (100 * 12 * 30);

    if(isFinite(YearlyInterestFormula) && isFinite(MonthlyInterestFormula) && isFinite(DailyInterestFormula)){
        YearlyInput.value = YearlyInterestFormula.toFixed(2);
        MonthlyInput.value = MonthlyInterestFormula.toFixed(2);
        DailyInput.value = DailyInterestFormula.toFixed(2);

        successMessage('Calculation succeed!');
    }else{
        showError('Please check your numbers!')
        
    }
    
    e.preventDefault();
}

//Show success Message
function successMessage(message) {
    const errorDiv = document.createElement('div');
    
    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //Add class
    errorDiv.className = 'alert alert-success';

    //Create  text node and append to div
    errorDiv.appendChild(document.createTextNode(message));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear message 3 seconds
    setTimeout(clearMessage,3000);
}
//Clear success Message
function clearMessage() {
    document.querySelector('.alert').remove();
    
}
//Show error
function showError(error) {
    const errorDiv = document.createElement('div');
    
    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create  text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);
    HideResults();
    

    //Clear error 3 seconds
    setTimeout(clearError,3000);
    // setTimeout(()=>{
    //     LoadingDiv.style.display = 'none';
    // },3000)

}
//Clear error
function clearError() {
    document.querySelector('.alert').remove();
    
}
//Load Results
function LoadResults() {
    const card = document.querySelector('.card');
    const LoadingDiv = document.createElement('div');
    const img = document.createElement('img');
    LoadingDiv.id = 'loading';
    LoadingDiv.className = 'mt-2';
    img.src = '5.gif';
    LoadingDiv.appendChild(img);
    card.appendChild(LoadingDiv);
    card.insertBefore(LoadingDiv,document.getElementById('results'));
    setTimeout(ShowResults,2000);
    setTimeout(()=>{
        LoadingDiv.style.display = 'none'; 
    },2000)
    
}
//Hide Load Div
// function hideLoading() {
//     const LoadingDiv = document.createElement('div');
//     const img = document.createElement('img');
//     LoadingDiv.id = 'loading';
//     LoadingDiv.className = 'mt-2';
//     img.src = '5.gif';
//     LoadingDiv.appendChild(img);
//     LoadingDiv.style.display ='none';
// }  
//Show Results
function ShowResults() {
    document.getElementById('results').style.display = 'block';
}
//Hide Results
function HideResults() {
    document.getElementById('results').style.display = 'block';
}
//Remove Loading icon
// function RemoveLoadIcon() {
//     const LoadingDiv = document.createElement('div');
//     LoadingDiv.id = 'loading';
//     LoadingDiv.className = 'mt-2';
//     LoadingDiv.children.remove();
// }
