function isTouching(movingRect,fixedRect){
    if (a.x - t.x < t.width/2 + a.width/2
      && t.x - a.x < t.width/2 + a.width/2
      && a.y - t.y < t.height/2 + a.height/2
      && t.y - a.y < t.height/2 + a.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }