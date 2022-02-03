const submit = document.querySelector('#submitButton');
const gradeBox = document.querySelector('#inputBoxGrade');
const creditBox = document.querySelector('#inputBoxCredit');


let objCntr = 0;
let creditSum = 0;
let totalSum = 0;


function showGPA(){
    console.log(creditSum);
    const GPA = document.querySelector('.GPA');
    if(creditSum>0){
        GPA.innerText = totalSum/creditSum;
    }else{
        GPA.innerText = 0;
    }
}

submit.addEventListener('click', (e) =>{
    e.preventDefault();
    const grade = parseFloat(gradeBox.value);
    const credit = parseFloat(creditBox.value);
    creditBox.value = '';
    gradeBox.value = '';
    objAdder(grade, credit);

});

function objAdder(grade, credit){
    const li = document.createElement('li');

    creditSum += credit;
    totalSum += credit*grade;

    const objId = `semID${objCntr}`;
    objCntr++;
    li.classList.add(objId);
    li.classList.add('gradeListItem');

    li.innerHTML = `
    <table class="gradeListText">
        <tr>
            <td class="grades">
                Grade: ${grade}
            </td> 
            <td>
                Credit: ${credit}
            </td>
        </tr>
    </table>
    `;

    const rem = document.createElement('button');
    rem.innerText = 'Remove';
    rem.classList.add('removeButton');
    rem.addEventListener('click', () => {
        const thisGrade = document.querySelector(`.${objId}`);
        thisGrade.remove();
        creditSum -= credit;
        totalSum -= (credit*grade);
        showGPA()
    });

    li.appendChild(rem);
    document.querySelector('.gradeList').appendChild(li);
    showGPA()
}