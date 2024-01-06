
    $(window).on('load',()=>{
        // load時に「loadイベントが発生しました」
         console.log('loadイベントが発生しました');
          });

        $(function(){
        // 画面スクロール時に「scrollイベントが発生しました」   
        $(window).on('scroll',()=>{
        console.log('scrollイベントが発生しました');
     });
     });