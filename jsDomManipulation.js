function simplifyPage() {
    document.querySelectorAll('img, video, iframe, link[rel="stylesheet"]').forEach(element => {
        element.remove();
    });

    const allElements = document.body.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.tagName.toLowerCase() !== 'script' && element.tagName.toLowerCase() !== 'style') {
            const div = document.createElement('div');
            div.style.width = '100vw';

            div.textContent = element.textContent;

            element.parentNode.replaceChild(div, element);
        }
    });

  
    const divs = document.querySelectorAll('div');
    divs.forEach((div, index) => {
        const banner = document.createElement('div');
        banner.style.width = '728px';
        banner.style.height = '90px'; 
        banner.style.background = 'gray'; 
        banner.style.marginBottom = '10px'; 
        banner.textContent = `Sample Banner ${index + 1} (728x90)`;
        div.insertAdjacentElement('afterend', banner);
    });
}

simplifyPage();
