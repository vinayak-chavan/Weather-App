const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event) => {
    event.preventDefault();
    let cityval=cityname.value;
    if(cityval === ""){
        city_name.innerText=`Please write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=553c79e31012b9cbad35a4534f168855`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real.innerText = arrData[0].main.temp;
            const tempmood = arrData[0].weather[0].main; 
            
            if(tempmood == "Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if(tempmood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            } else if(tempmood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
        }
        catch{
            city_name.innerText=`Please enter city name properly`;
            datahide.classList.add('data_hide');
        }    
    }
}
submitBtn.addEventListener('click',getInfo);