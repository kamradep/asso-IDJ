document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('expandButton').addEventListener('click', function() {
        const content = document.getElementById('content');
        const footer = document.getElementById('footer');
        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            content.classList.add('expanded');
            footer.classList.add('footerhidden');
        } else {
            content.classList.remove('expanded');
            content.classList.add('collapsed');
            footer.classList.remove('footerhidden');
        }
    });
});