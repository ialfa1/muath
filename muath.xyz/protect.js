document.onmousedown=disableclick;
status ="😑 يمنع استخدام هذه الضغطة";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}
document.onkeydown = function(e) {
message ="لا تسوي فيها هكر ههههههههههه";
  if(event.keyCode == 123) {
     alert(message);
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      alert(message);
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     alert(message);
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     alert(message);
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      alert(message);
      return false;
  }
}    