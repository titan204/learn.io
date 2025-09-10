

addEventListener("load", function() {
            const canvas = document.getElementById('animatedBackground');
            const ctx = canvas.getContext('2d');
            let particles = [];
            let animationFrameId;

            function setCanvasSize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            function createParticles(num) {
                particles = [];
                for (let i = 0; i < num; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 0.5, 
                        vy: (Math.random() - 0.5) * 0.5,
                        size: Math.random() * 2 + 1 
                    });
                }
            }
            
            function drawParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height); 
                ctx.fillStyle = '#ff6d00ff'; 
                
                particles.forEach(p => {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            function drawLines() {
                const maxDistance = 100; 
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'; 
                
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dist = Math.sqrt(Math.pow(particles[i].x - particles[j].x, 2) + Math.pow(particles[i].y - particles[j].y, 2));
                        
                        if (dist < maxDistance) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            function updateParticles() {
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x > canvas.width || p.x < 0) p.vx *= -1;
                    if (p.y > canvas.height || p.y < 0) p.vy *= -1;
                });
            }

            function animate() {
                updateParticles();
                drawParticles();
                drawLines();
                animationFrameId = requestAnimationFrame(animate);
            }
            
            setCanvasSize();
            createParticles(Math.floor((canvas.width * canvas.height) / 10000)); 
            animate();

            window.addEventListener('resize', () => {
                cancelAnimationFrame(animationFrameId);
                setCanvasSize();
                createParticles(Math.floor((canvas.width * canvas.height) / 10000));
                animate();
            });

        }


    )