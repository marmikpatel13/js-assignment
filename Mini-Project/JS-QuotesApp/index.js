var colors = [
    '#490A3D',
    '#BD1550',
    '#E97F02',
    '#F8CA00',
    '#8A9B0F',
    '#69D2E7',
    '#FA6900',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#77B1A9',
    '#73A857'
];

var quotes = [
    ["You only live once, but if you do it right, once is enough.", "Mae West"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
    ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "Albert Einstein"],
    ["It is our choices, Harry, that show what we truly are, far more than our abilities.", "J.K. Rowling, Harry Potter and the Chamber of Secrets"],
    ["All men who have turned out worth anything have had the chief hand in their own education.", "Walter Scott"],
    ["Trust yourself. You know more than you think you do.", "Benjamin Spock"],
    ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "H. Jackson Brown Jr."],
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
    ["One thing about music, when it hits you feel no pain", "Bob Marley"],
    ["Think Big And Don't Listen To People Who Tell You It Can't Be Done. Life's Too Short To Think Small.", "Tim Ferriss"],
    ["Preach the Gospel at all costs. And if you really have to, use words", "Francis of Assisi"],
    ["Beautiful is what we see. More beautiful is what we know. Most beautiful, by far, is what we don't.", "Nicolas Steno"],
    ["The problem with quotes from the internet is that you can never verify their authenticity.", "Abraham Lincoln"],
    ['Your primary ambition should be to have people look at you and say: "I want what you have. Please tell me how I can have it."', "Angus Buchan"],
    ["The effect you have on others is the most valuable currency there is", "Jim Carrey"],
    ["You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "Dr. Seuss"],
    ["You were born into genius, but have you resigned yourself to mediocrity?", "Robin Sharma"],
    ["Sometimes you just need to let go, and Let God...", "Shanice May"]
];

var currentQuote = "";
var currentAuthor = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
    randomquote = Math.floor(Math.random() * quotes.length);
    randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];

    document.body.style.backgroundColor = colors[randomcolor];
    document.querySelector('.card-body').style.color = colors[randomcolor];
    document.querySelector('.quote-text').innerHTML = currentQuote;
    document.querySelector('.author').innerHTML = `&#8213; ${currentAuthor}`;
}



