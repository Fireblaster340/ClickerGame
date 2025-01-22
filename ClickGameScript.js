let clicks = 0;
let clickPower = 1;
let clickPowerCost = 10;
function Click(){
    clicks=clicks+clickPower;
    document.getElementById("ClickDisp").innerHTML = "Clicks: "+clicks
}
currDate = new Date()
if (document.cookie.includes("Clicks") == false){
  document.cookie = "Clicks=0; expires="+currDate.toUTCString()+"; path=/"
}
if (document.cookie.includes("CPw") == false){
  document.cookie = "CPw=1; expires="+currDate.toUTCString()+"; path=/"
}
function FindCookie(Name,Cookie){
  SplitCookie = Cookie.split()
  for (let i of SplitCookie){
    if i.includes(Name){
      return i.match(/\d+/)
    }
  }
}
function ShowCookieVal(Name){
  alert(FindCookie(Name,document.cookie))
}
function AttemptUpgrade(){
    if (clicks >= clickPowerCost){
        clicks=clicks-clickPowerCost
        clickPowerCost=clickPowerCost*2
        clickPower+=1
        document.getElementById("Boost").innerHTML = "Click Power +1 ("+clickPowerCost+" Clicks)"
        document.getElementById("ClickDisp").innerHTML = "Clicks: "+clicks
    } else {
        document.getElementById("Boost").innerHTML = "You don't have enough! Cost: "+clickPowerCost
    }
}
