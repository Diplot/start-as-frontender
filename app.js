class Countdown {
  constructor (shift) {
    this.shift = shift;
    this.startTime = Date.now();
    this.endTime = (new Date(this.startTime + shift * 3.6e6)).getTime();
    this.counter = document.getElementById('countdown');
    this.start();
  }
  
  start () {
    let range, hours, minutes, seconds, self = this;
    this.startTime += 1000;
   range = (this.endTime - this.startTime)/1000;
   hours = Math.floor((range/3600)%12);
   minutes = Math.floor((range/60)%60);
   seconds = Math.floor((range)%60);
   
    console.log( range, hours, minutes, seconds);
    if(range => 1){
    this.counter.innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(function () {
      self.start();
    }, 1000);}
        else{
           this.counter.innerText = `THE END`; 
        }
  }
}

window.onload = () => {
  const cd = new Countdown(12);
};