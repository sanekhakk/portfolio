function expand(element) {
    const targetId = element.getAttribute('data-target');
    const content = document.getElementById(targetId);
    const arrow = element.querySelector('span:last-child');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (window.innerWidth >= 768) {
            if(content.classList.contains('md:hidden')){
                content.classList.remove('md:hidden');
                content.classList.add('flex', 'flex-cols','flex-wrap','justify-center');
            }
            else{
            content.classList.add('flex', 'flex-cols');
            }
        } else {
            content.classList.add('block');
        }
        arrow.textContent = '▲';
    } else {
        content.classList.add('hidden');
        content.classList.remove('flex', 'flex-cols', 'block');
        arrow.textContent = '▼';
    }
}

// Optional: Responsive fix on resize for open sections
window.addEventListener('resize', () => {
    document.querySelectorAll('[data-target]').forEach(header => {
        const targetId = header.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (!content.classList.contains('hidden')) {
            if (window.innerWidth >= 768) {
                content.classList.remove('block');
                content.classList.add('flex', 'flex-cols');
            } else {
                content.classList.remove('flex', 'flex-cols');
                content.classList.add('block');
            }
        }
    });
});