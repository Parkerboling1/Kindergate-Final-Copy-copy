const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.pictures-grid');
const mobilegrid = document.querySelector('.mobile-pictures-grid');
const initialSelected = document.querySelector('.selected');


let selectedCategory = initialSelected.innerText.toLowerCase(); // 'landscape'

// Pictures
const pictures = [
	{
		url:
			'assets/infants/infants3.jpg',
		category: 'infants'
	},
	{
		url:
			'assets/infants/infants2.jpg',
		category: 'infants'
	},
	{
		url:
			'assets/infants/infants.jpg',
		category: 'infants'
	},
	{
		url:
			'assets/toddlers/kids1.jpg',
		category: 'toddlers'
	},
	{
		url:
			'assets/toddlers/kids2.jpg',
		category: 'toddlers'
	},
	{
		url:
			'assets/toddlers/kids3.jpg',
		category: 'toddlers'
	},
    {
		url:
			'assets/toddlers/kids8.jpg',
		category: 'toddlers'
	},
    {
		url:
			'assets/toddlers/toddlers.jpg',
		category: 'toddlers'
	},
    {
		url:
			'assets/twos/kids1.jpg',
		category: 'twos'
	},
    {
		url:
			'assets/twos/kids2.jpg',
		category: 'twos'
	},
    {
		url:
			'assets/twos/kids3.jpg',
		category: 'twos'
	},
    {
		url:
			'assets/twos/kids4.jpg',
		category: 'twos'
	},
    {
		url:
			'assets/twos/kids5.jpg',
		category: 'twos'
	},
    {
		url:
			'assets/twos/twosclass.jpg',
		category: 'twos'
	},
    {
		url:
			'assets/threes/kids1.jpg',
		category: 'threes'
	},
    {
		url:
			'assets/threes/kids6.jpg',
		category: 'threes'
	},
    {
		url:
			'assets/threes/kids7.jpg',
		category: 'threes'
	},
    {
		url:
			'assets/threes/threeclass.jpg',
		category: 'threes'
	},
    {
		url:
			'assets/threes/kids2.jpg',
		category: 'threes'
	},
    {
		url:
			'assets/prek1b/kids1.jpg',
		category: 'prek-2'
	},
    {
		url:
			'assets/prek1b/kids2.jpeg',
		category: 'prek-2'
	},
    {
		url:
			'assets/prek1b/kids3.jpeg',
		category: 'prek-2'
	},
    {
		url:
			'assets/prek1/kids1.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids2.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids3.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids4.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids5.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids6.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids7.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids8.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids9.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1/kids10.jpg',
		category: 'prek-1'
	},
    {
		url:
			'assets/prek1b/kids4.jpeg',
		category: 'prek-2'
	}



];



width = window.innerWidth


const renderPictures = category => {
    pictures.forEach(picture => { 

        if (width>='1024'){
            if (picture.category === category) {
                const img = document.createElement('img');
                img.src = picture.url;
                img.srcset = picture.url;
                grid.appendChild(img);
            }
        }
        if (width<'1024'){
            if (picture.category === category) {
                const img = document.createElement('img');
                img.src = picture.url;
                img.srcset = picture.url;
                mobilegrid.appendChild(img);
            }
        }
    });
};

// Initial render
renderPictures(selectedCategory);

// Menu & Filter
categories.forEach(category => {
    category.addEventListener('click', () => {
        // Update selected category and add 'selected' class
        selectedCategory = category.innerText.toLowerCase();
        category.classList.add('selected');

        // Re-render pictures
        if (width>='1024'){
            grid.innerHTML = '';
            renderPictures(selectedCategory);
        }
        if(width<'1024'){
            mobilegrid.innerHTML='';
            renderPictures(selectedCategory)
        }

        // Remove 'selected' class from the others
        categories.forEach(categ => {
            if (categ.innerText.toLowerCase() !== selectedCategory) {
                categ.classList.remove('selected');
            }
        });
    });
});

