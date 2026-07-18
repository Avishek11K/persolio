{/* <script> */}
    // ---- Typing effect: name + rotating roles ----
    const titleText = "Avishek Karki";
    const roles = ["Explorer", "Web Developer", "Singer", "Songwriter"];
    let i = 0;

    function typeTitle(){
      const el = document.getElementById("title");
      if(i < titleText.length){
        el.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 90);
      } else {
        setTimeout(startRoleRotation, 400);
      }
    }

    function startRoleRotation(){
      const roleEl = document.getElementById("role");
      let roleIndex = 0, charIndex = 0, deleting = false;
      const typeSpeed = 90, deleteSpeed = 45, pauseAfterType = 1200, pauseAfterDelete = 300;

      function tick(){
        const current = roles[roleIndex];
        if(!deleting){
          charIndex++;
          roleEl.textContent = current.substring(0, charIndex);
          if(charIndex === current.length){ deleting = true; setTimeout(tick, pauseAfterType); return; }
          setTimeout(tick, typeSpeed);
        } else {
          charIndex--;
          roleEl.textContent = current.substring(0, charIndex);
          if(charIndex === 0){ deleting = false; roleIndex = (roleIndex+1) % roles.length; setTimeout(tick, pauseAfterDelete); return; }
          setTimeout(tick, deleteSpeed);
        }
      }
      tick();
    }

    window.onload = typeTitle;

    // ---- Tab switcher for "What I Do" ----
    const tabBtns = document.querySelectorAll('.tab-btn');
    const underline = document.getElementById('tabUnderline');

    function moveUnderline(btn){
      underline.style.left = btn.offsetLeft + 'px';
      underline.style.width = btn.offsetWidth + 'px';
    }

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        moveUnderline(btn);

        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        document.getElementById('panel-' + btn.dataset.panel).classList.add('active');
      });
    });

    window.addEventListener('load', () => moveUnderline(document.querySelector('.tab-btn.active')));
    window.addEventListener('resize', () => moveUnderline(document.querySelector('.tab-btn.active')));
  {/* </script> */}