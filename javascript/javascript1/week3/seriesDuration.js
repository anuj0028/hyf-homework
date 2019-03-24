const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 6,
      hours: 20,
      minutes: 15,  
    },
    {
      title: 'Breaking Bad',
      days: 5,
      hours: 17,
      minutes: 45,
    },
    {
      title: 'Black Mirror',
      days: 4,
      hours: 11,
      minutes: 45,
    }
  ]
       let averageLifeSpan = 80 ;
       let averageLifeSpanInMinute = averageLifeSpan * 365 * 24 * 60 ;
       let totalSeriesDurations = 0;
       console.log(averageLifeSpanInMinute);
       for (let i = 0 ; i < seriesDurations.length; i++) {
        seriesDurations[i] = seriesDurations[i].days * 24 * 60 + seriesDurations[i].hours * 60 + seriesDurations[i].minutes;
        let seriesDurationsPercentage = (seriesDurations[i]/averageLifeSpanInMinute) * 100;
        switch (i) {
            case i = 0 :
            console.log("Game of thrones took " +seriesDurationsPercentage+ " % of my life");
            break;
            case i = 1 :
            console.log("Breaking Bad took " +seriesDurationsPercentage+ " % of my life.");
            break;
            case i = 2 :
            console.log("Black Mirror took "+seriesDurationsPercentage+" % of my life.");
            break;            
        }
        totalSeriesDurations += seriesDurations[i];
        console.log(totalSeriesDurations);
        let totalPercentage = totalSeriesDurations/averageLifeSpanInMinute * 100;
        console.log("In total that is "+totalPercentage+" % of my life.");
    }
  
