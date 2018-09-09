var x = 'I am a boy am wanst to chat with you I am ',
       myarr = [],
       ttlArr = [];

    for ( anoop = 0; anoop < x.length; anoop++ ){

      if( x[anoop] != ' '){
        myarr.push(x[anoop]);
      }
      else {
        ttlArr.push(myarr.join(''));
        myarr = [];
      }
    }

    ttlArr.sort();
    
    var current = null, count = 0;
      for (var i = 0; i < ttlArr.length; i++) {
          if (ttlArr[i] != current) {
              if (count > 0) {
                  document.write(current + ' comes --> ' + count + ' times<br>');
              }
              current = ttlArr[i];
              count = 1;
          } else {
              count++;
          }
      }

      if (count > 0) {
          document.write(current + ' comes --> ' + count + ' times');
      }