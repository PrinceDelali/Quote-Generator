const quoteElement = document.querySelector(".quote");
const btn = document.querySelector("#new-quote");
const personElement = document.querySelector(".person");

const quotes = [
    {
        quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        person: "Steve Jobs"
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them. It's kind of fun to do the impossible.",
        person: "Walt Disney"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "It does not do to dwell on dreams and forget to live, remember that.",
        person: "J.K. Rowling"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },
    {
        quote: "There is nothing either good or bad, but thinking makes it so.",
        person: "William Shakespeare"
    },
    {
        quote: "It is never too late to be what you might have been.",
        person: "George Eliot"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Change your thoughts and you change your world.",
        person: "Norman Vincent Peale"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        person: "Charles R. Swindoll"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        person: "Alan Kay"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        person: "Lao Tzu"
    },
    {
        quote: "It is our choices that show what we truly are, far more than our abilities.",
        person: "J.K. Rowling"
    },
    {
        quote: "There are no shortcuts to any place worth going.",
        person: "Beverly Sills"
    },
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        person: "Buddha"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "If you want to lift yourself up, lift up someone else.",
        person: "Booker T. Washington"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        person: "Charles Kingsleigh (Alice in Wonderland)"
    },
    {
        quote: "Never be afraid to trust an unknown future to a known God.",
        person: "Corrie Ten Boom"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        person: "Dalai Lama"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "dore Roosevelt"
    },
    {
        quote: "Nothing is impossible, the word itself says 'I'm possible'!",
        person: "Audrey Hepburn"
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        person: "George Bernard Shaw"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        person: "Vidal Sassoon"
    },
    {
        quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
        person: "William Arthur Ward"
    },
]

btn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update the quote text
    quoteElement.innerText = randomQuote.quote;
        
    // Update the person text
    personElement.innerText = randomQuote.person;
});
