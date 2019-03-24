function getClothesByWeather(temp){
    if (temp<8){
        return "jacket, trousers and sweater";
    }
    else if (temp<15){
        return "pants, shirts and sweater or normal jacket";
    }
    else if(temp<20){
        return "pants and shirts";
    }
  else{
    return "shorts and T-shirts";
  }
}
console.log(getClothesByWeather(19));
