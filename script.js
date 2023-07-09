ampm=document.getElementById('ampm');
function clock()
{
    let time=new Date();
    let hr=time.getHours();
    console.log(hr);
    let min=padZero(time.getMinutes());
    let sec=padZero(time.getSeconds());
    if(hr>12)
    {
        ampm.innerHTML='PM';
        hr-=12;
    }
    hr=padZero(hr);
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('mins').innerHTML=min;
    document.getElementById('secs').innerHTML=sec;
}
function padZero(num)
{
    return num<10?'0'+num:num;
}
setInterval(clock,100);