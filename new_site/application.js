$( document ).ready(function() {

  $(function() {
      /**
      * Smooth scrolling to page anchor on click
      **/
      $("a[href*='#']:not([href='#'])").click(function(e) {
          e.preventDefault();
          if (
              location.hostname == this.hostname
              && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
          ) {
              var anchor = $(this.hash);
              anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
              if ( anchor.length ) {
                  $("html, body").animate( { scrollTop: anchor.offset().top - 150 }, 1100);
              }
          }
      });

  });
  // slide menu

  (function () {

    const burgerButton = document.getElementById("burgerButton");
    const container = document.getElementById("main-site");
    const slideCloser = document.getElementById("slideCloser");
    const menu = document.getElementById("menu");


    // switch the slide menu from close to open and reverse

    function toggleSlide() {
      burgerButton.classList.toggle("open");
      container.classList.toggle("open");
      slideCloser.classList.toggle("open");
      menu.classList.toggle("open");
    }

    slideCloser.addEventListener("click", function () {
      toggleSlide()
    });

    // button burger

    burgerButton.addEventListener("click", function () {
      toggleSlide()
    })
      
      $("ul li a").click(function(e) {
          toggleSlide()
      });
  })();

  var camera,scene,renderer,json,FPS_RATE=45,events={mousemove:[],update:[]},scriptWrapParams="player,renderer,scene,camera",scriptWrapResultObj={},dom=document.getElementById("section-3D");function init(e){loadJson("app.json",function(){return camera.aspect=((window.innerWidth * 0.8) / (window.innerHeight * 0.8)),camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8),renderer.setClearColor(16777215,0),document.body.appendChild(dom),window.addEventListener("resize",onWindowResize,!1),window.addEventListener("mousemove",onDocumentMouseMove),e()})}function animate(){setTimeout(function(){requestAnimationFrame(animate)},1e3/FPS_RATE),render()}function onDocumentMouseMove(e){dispatch(events.mousemove,e)}function render(){camera.lookAt(scene.position),dispatch(events.update,null),renderer.autoClear=!1,renderer.clear(),renderer.render(scene,camera)}function onWindowResize(){camera.aspect=(window.innerWidth * 0.8)/(window.innerHeight * 0.8),camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)}function loadJson(e,n){console.log("outside"),(new THREE.FileLoader).load(e,function(e){console.log("inside"),json=JSON.parse(e),(renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0})).gammaOutput=!0,renderer.setClearColor(16777215,0),renderer.setPixelRatio(window.devicePixelRatio);json.project;renderer.shadowMap.enabled=!0,dom.appendChild(renderer.domElement);let r=new THREE.ObjectLoader;for(var i in scene=r.parse(json.scene),(camera=scene.getObjectByProperty("uuid","2FDE2EBA-CE75-439D-A63B-3994988532C5",!0)).aspect=(window.innerWidth * 0.8) / (window.innerHeight * 0.8),camera.updateProjectionMatrix(),events)scriptWrapParams+=","+i,scriptWrapResultObj[i]=i;var t=JSON.stringify(scriptWrapResultObj).replace(/\"/g,"");for(var o in json.scripts){var a=scene.getObjectByProperty("uuid",o,!0);if(void 0!==a)for(var d=json.scripts[o],s=0;s<d.length;s++){var c=d[s],u=new Function(scriptWrapParams,c.source+"\nreturn "+t+";").bind(a)(this,renderer,scene,camera);for(var p in u)void 0!==u[p]&&void 0!==events[p]&&events[p].push(u[p].bind(a))}else console.warn("APP.Player: Script without object.",o)}return n()})}function dispatch(e,n){for(var r=0,i=e.length;r<i;r++)e[r](n)}init(function(){animate()});
});
