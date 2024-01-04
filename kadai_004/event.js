$(function(){
    $(window).on({
        // load時に「loadイベントが発生しました」
          'load':()=>{
         console.log('loadイベントが発生しました');
          },
        // 画面スクロール時に「scrollイベントが発生しました」   
       'scroll':()=>{
        console.log('scrollイベントが発生しました');
       }
     });
     });