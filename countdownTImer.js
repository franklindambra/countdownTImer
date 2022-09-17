<script>

/*jQuery( '#top' ).prepend( '<div id="popUp" style="background-color:#000;color:white;text-align:center;width:100%;padding:10px 0 10px 0;margin: 0px 0px 20px 0px;font-family:baskerville-urw"><div id="clockdiv"><span class="days" style="font-weight:700"></span> Days <span class="hours" style="font-weight:700"></span> Hours <span class="minutes" style="font-weight:700"></span> Minutes <span class="seconds" style="font-weight:700"></span> Seconds</div><h4 style="color:white;margin-bottom:0;">End of Summer Sale! $100 Off</h4><div id="closeIt" style="position: absolute;right: 5px;top: 5px;cursor: pointer;width:30px;">×</div></div>' );

jQuery("#closeIt").click(function () {
    jQuery("#popUp").css("display", "none");
jQuery("#header-space").css("height", "0");
});
*/
</script>

<script>

const deadline = new Date('2022-08-15T00:00:00');
	
function getTimeRemaining(endtime){
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
	
function initializeClock(id, endtime) {
const clock = document.getElementById(id);
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');
		
function updateClock(){
  const t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);
}
	
	initializeClock('clockdiv', deadline);
	
</script>