var Links={
    SetColor:function(color){
    //   var alist=document.querySelectorAll('a');
    //   var i =0;
    //   while(i<alist.length)
    //   {
    //   alist[i].style.color=color;
    //   i+=1;
    //   }
    // }
    $('a').css('color',color); //jquery 사용한 것.
  }
}
var Body = {
    SetColor:function(color){
      //document.querySelector('body').style.color= color;
    $('body').css('color',color);

    },
    SetBackGruondColor:function(color){
      //document.querySelector('body').style.backgroundColor= color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){
    if(self.value==='night')
    {
      Body.SetBackGruondColor('black')
      Body.SetColor('white');
      self.value= 'day';

      Links.SetColor('powderblue');

    }else{
      Body.SetBackGruondColor('white')
      Body.SetColor('black');
      self.value= 'night';

      Links.SetColor('blue');
    }
  }
