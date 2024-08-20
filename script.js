document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        
        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent.toLowerCase();
            if (itemText.includes(query)) {
                items[i].style.display = '';
            } else {
                items[i].style.display = 'none';
            }
        }
    });
});
