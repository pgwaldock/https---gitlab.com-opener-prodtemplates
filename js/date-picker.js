$(document).ready(function(){
/*initialisation des composants*/
shipDatePick();
});


availableDates = ['08-30-2016','09-10-2016','09-11-2016','09-12-2016','09-13-2016','09-30-2016','10-17-2016','10-18-2016','10-28-2016','11-20-2016', '11-28-2016','12-02-2016','12-20-2016','12-28-2016','01-27-2017','02-27-2017','03-27-2017','04-27-2017','05-27-2017','06-27-2017','07-27-2017','08-27-2017','09-27-2017','10-27-2017','11-27-2017','12-27-2017','01-27-2018' ];

/* Fonction d'initialisation des composants */
function shipDatePick(){

/* Date retrait */
$("#datepicker").datepicker({
	inline: true,
    dateFormat: 'dd-mm-yy',
    minDate: new Date(), 
    beforeShowDay: function(d) {
        var dmy = (d.getMonth()+1); 
        if(d.getMonth()<9) 
            dmy="0"+dmy; 
        dmy+= "-"; 
        
        if(d.getDate()<10) dmy+="0"; 
            dmy+=d.getDate() + "-" + d.getFullYear(); 
        
        console.log(dmy+' : '+($.inArray(dmy, availableDates)));
        
        if ($.inArray(dmy, availableDates) != -1) {
            return [true, "","Available"]; 
        } else{
             return [false,"","UnAvailable"]; 
        }
    }
    });
}