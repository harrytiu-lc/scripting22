const EventDateInSeconds = (new Date("04/25/2024").getTime()) / 1000;

function UpdateCountDown()
{
    const d = new Date();
    let seconds = d.getTime() / 1000;
    //console.log(seconds);
    let total = "";
    seconds = EventDateInSeconds - seconds;
    if (seconds <= 0)
    {
        total = "Today's the day!"
    }
    else
    {
        let weeks = Math.floor(seconds / 604800);
        seconds %= 604800;
        let days = Math.floor(seconds / 86400);
        seconds %= 86400;
        let hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        let minutes = Math.floor(seconds / 60);
        seconds %= 60;
        seconds = Math.floor(seconds);
        
    
        if (weeks >= 1)
        {
            total += DoSomeStuff(weeks, "Week", true);
        }
        if (days >= 1)
        {
            total += DoSomeStuff(days, "Day", true);
        }
        if (hours >= 1)
        {
            total += DoSomeStuff(hours, "Hour", true);
        }
        if (minutes >= 1)
        {
            total += DoSomeStuff(minutes, "Minute", true);
        }
        
        total += DoSomeStuff(seconds, "Second", false);
        total += "Left!";
    }
    
    $("#timeRemaining").html(total);
    
}

function DoSomeStuff(value, name, bIncludeComma)
{
    if (value !== 1)
        name += "s";
    return value + " " + name + (bIncludeComma ? ", " : " ");
}

setInterval(UpdateCountDown, 1000)
