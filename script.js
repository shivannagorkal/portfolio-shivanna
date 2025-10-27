
    // Intersection Observer reveal on scroll
    (function(){
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(e.isIntersecting) e.target.classList.add('visible');
        });
      }, {threshold:0.12});
      document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
    })();

    // Auto-scrolling language track
    (function(){
      const track = document.getElementById('langTrack');
      let speed = 0.6; // px per frame
      let offset = 0;
      // duplicate content already present; animate transform
      function tick(){
        offset += speed;
        if(offset >= track.scrollWidth / 2) offset = 0; // reset when half loop done
        track.style.transform = 'translateX(' + (-offset) + 'px)';
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      // slow down on hover
      track.parentElement.addEventListener('mouseenter', ()=> speed = 0.12);
      track.parentElement.addEventListener('mouseleave', ()=> speed = 0.6);
    })();

    // Simple contact form "send" simulation
    (function(){
      const btn = document.getElementById('submitBtn');
      const formMsg = document.getElementById('formMsg');
      btn.addEventListener('click', ()=>{
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('message').value.trim();
        if(!name || !email || !msg){ formMsg.style.display='block'; formMsg.textContent='Please fill all fields.'; return; }
        // simulate sending
        btn.disabled = true; btn.textContent = 'Sending...';
        setTimeout(()=> {
          btn.textContent = 'Send Message'; btn.disabled = false;
          formMsg.style.display='block'; formMsg.style.color = 'green';
          formMsg.textContent = 'Thanks! Your message was not actually sent (no backend). Copy the email and message to send from your email client.';
          // clear inputs
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
        }, 900);
      });
    })();

    // nav link active highlighting on scroll
    (function(){
      const sections = [...document.querySelectorAll('main section, header')];
      const navLinks = [...document.querySelectorAll('nav .nav-links a')];
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(e=>{
          if(e.isIntersecting){
            const id = e.target.id || 'home';
            navLinks.forEach(a=> a.classList.toggle('active', a.getAttribute('href') === '#'+id));
          }
        });
      }, {threshold:0.45});
      sections.forEach(s=>obs.observe(s));
    })();
