/* REGISTRATION FORM */
window.post = function(url, data) {
    return fetch(url, {method: "POST",headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify(data)});
}

const submit = document.querySelector('#submitForm');
const citizen = document.querySelector('#citizen');
const age = document.querySelector('#age');
const firstName = document.querySelector('#firstName');
const fatherName = document.querySelector('#fatherName');
const grandFatherName = document.querySelector('#grandFatherName');
let gender = document.querySelector('input[name="Gender"]:checked');
const day = document.querySelector('#Birthday_Day');
const month = document.querySelector('#Birthday_Month');
const year = document.querySelector('#Birthday_Year');
let martialStatus = document.querySelector('input[name="Status"]:checked');
const mobileNumber = document.querySelector('#number');
const emailAddress = document.querySelector('#email');
const regionCity = document.querySelector('#City');
const subCity = document.querySelector('#subCity');
const wereda = document.querySelector('#wereda');
const idNumber = document.querySelector('#idNumber');

const reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
    firstName.value = '';
    fatherName.value = '';
    grandFatherName.value = '';
    gender = document.querySelector('input[name="Gender"]:checked');
    if(gender){
        gender.checked = false;
    }
    day.value = '';
    month.value = '';
    year.value = '';
    martialStatus = document.querySelector('input[name="Status"]:checked');
    if(martialStatus){
        martialStatus.checked = false;
    }
    mobileNumber.value = '';
    emailAddress.value = '';
    regionCity.options[regionCity.selectedIndex].value = '';
    subCity.value = '';
    wereda.value = '';
    idNumber.value = '';
});

submit.addEventListener('click',()=>{
    try {
        const citizenValue = citizen.value;
        const ageValue = age.value;
        if(citizenValue === 'on' && ageValue === 'on'){
            alert('You have to be a citizen and above 18 to register');
        }
        const firstNameValue = firstName.value;
        const fatherNameValue = fatherName.value;
        const grandFatherNameValue = grandFatherName.value;
        gender = document.querySelector('input[name="Gender"]:checked');
        const genderValue = gender.value;
        const dayValue = day.value;
        const monthValue = month.value;
        const yearValue = year.value;
        martialStatus = document.querySelector('input[name="Status"]:checked');
        const martialStatusValue = martialStatus.value;
        const mobileNumberValue = mobileNumber.value;
        const emailAddressValue = emailAddress.value;
        const region = regionCity.options[regionCity.selectedIndex].value;
        const subCityValue = subCity.value;
        const weredaValue = wereda.value;
        const idNumberValue = idNumber.value;

        const data = { 
            firstName:firstNameValue,
            fatherName:grandFatherNameValue,
            grandFatherName:grandFatherNameValue,
            gender:genderValue,
            dateOfBirth: `${dayValue}, ${monthValue}, ${yearValue}`,
            martialStatus: martialStatusValue,
            mobileNumber:mobileNumberValue,
            emailAddress:emailAddressValue,
            regionCity: region,
            subCity:subCityValue,
            wereda:weredaValue,
            idNumber:idNumberValue
        };


    console.log('data: ', data);
    post("/api/create", data).then((res)=>{
        return res.clone().text()
    }).then((val) => {
        console.log('val: ', val)
        document.querySelector('body').innerHTML = `
        <br><br>
		<span style="color:#dfc15e;font-size: 50;text-align: center;margin: 20px 540px 2px 540px;"> Successfully Submitted </span>
		<div style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s;text-align: center;margin: 25px 30% 25px 30%;background-color: #333333;">
			<br><br><br><br><br>
				<span style="font-size: 35;color: #dfc15e;margin: 2px 2px 2px 2px;font-family: Verdana,Geneva,sans-serif;
                ">ID: </span> <span style="color:#dfc15e">${val} </span>
		<br><br>
		 
			<span style="font-size: 35;color: #dfc15e;margin: 2px 2px 2px 2px;font-family: Verdana,Geneva,sans-serif;
            ">Status: </span> <span style="color:#dfc15e">AWAITING </span>
		<br><br>
			<span style="font-size: 35;color: #dfc15e;margin: 2px 2px 2px 2px;font-family: Verdana,Geneva,sans-serif;
            ">Poll: </span> <span style="color:#dfc15e">${region} at wereda ${weredaValue} </span>
		<br> <br> <br> <br><br><br><br><br>
			<span style="color: #dfc15e;margin: 2px 2px 2px 2px;font-family: Verdana,Geneva,sans-serif;
            ">If you are having trouble, you can go to any<br> nearby kebele and ask for information. </span> <br>
		 </div>
        `
    });

        
    } catch {
        alert('Please Fill the form correctly');
        reset.click();
    }
    

    
});