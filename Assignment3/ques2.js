//write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.[ Formula : c/5 = (f-32)/9 
//[ where c = temperature in Celsius and f =temperature in Fahrenheit ]Expected Output:60°C is 140 °F45°F is 7.222222222222222°C

const FahToCelsius = (tempinF)=>{

    const celsius = (tempinF - 32) * 5/9;
    console.log(tempinF+"degree Fahrenhiet temperature in celsius is : "+ celsius);
}
const CelsiusToFahrenheit = (tempinC)=>{

    const fahrenhiet = tempinC * 9/5 + 32 ;
    console.log(tempinC+"degree celsius temperature in Fahrenhiet is : "+ fahrenhiet );
}
const tempinF = 45;
const tempinC =60
FahToCelsius(tempinF);
CelsiusToFahrenheit(tempinC);