const data = [
    {
        id: '1',
        question: "What are accordion components?",
        answer: "Accordion components are Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus consequatur, voluptatibus delectus harum mollitia rerum culpa non tempora provident corrupti minima incidunt in aut, perferendis magni eos? Totam sit rem aliquam! Necessitatibus, commodi."
    },
    {
        id: '2',
        question: "What are they used for?",
        answer: "Accordion components are Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus consequatur, voluptatibus delectus harum mollitia rerum culpa non tempora provident corrupti minima incidunt in aut, perferendis magni eos? Totam sit rem aliquam! Necessitatibus, commodi."
    },
    {
        id: '3',
        question: "Accordion as a musical instrument!",
        answer: "Accordion components are Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus consequatur, voluptatibus delectus harum mollitia rerum culpa non tempora provident corrupti minima incidunt in aut, perferendis magni eos? Totam sit rem aliquam! Necessitatibus, commodi."
    },
    {
        id: '4',
        question: "Can we use Bootstrap to create an accordion component?",
        answer: "Accordion components are Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus consequatur, voluptatibus delectus harum mollitia rerum culpa non tempora provident corrupti minima incidunt in aut, perferendis magni eos? Totam sit rem aliquam! Necessitatibus, commodi."
    },

];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
    accordionWrapper.innerHTML = data.map(dataItem => `
            <div class="accordion_item">
        <div class="accordion_title">
            <h3>${dataItem.question}</h3>
            <i class="fa-solid fa-arrow-down"></i>

        </div>

        <div class="accordion_content">
            <p>${dataItem.answer}</p>
            
        </div>
    </div>
    `).join(" ");
}


createAccordionData();

const getAccordionTitles = document.querySelectorAll('.accordion_title');

console.log(getAccordionTitles);


getAccordionTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if (currentItem.classList.contains('active')) {
            currentItem.classList.remove('active');
        } else {
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active');
            getAlreadyAddedActiveClasses.forEach(currentActiveItem => {
                currentActiveItem.classList.remove('active');

            })

            currentItem.classList.add('active');

        }


    })
})



