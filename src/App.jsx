import React, { useState, useEffect } from 'react';
import { Twitter, RefreshCw, Copy, Quote } from 'lucide-react';

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison"
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    text: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    text: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Unknown"
  },
  {
    text: "Don't stop when you're tired. Stop when you're done.",
    author: "Unknown"
  },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown"
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  },
  {
    text: "Little things make big days.",
    author: "Unknown"
  },
  {
    text: "It's going to be hard, but hard does not mean impossible.",
    author: "Unknown"
  },
  {
    text: "Don't wait for opportunity. Create it.",
    author: "Unknown"
  },
  {
    text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    author: "Unknown"
  },
  {
    text: "The key to success is to focus on goals, not obstacles.",
    author: "Unknown"
  },
  {
    text: "Dream it. Believe it. Build it.",
    author: "Unknown"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  },
  {
    text: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett"
  },
  {
    text: "Nothing is impossible. The word itself says 'I'm possible!'",
    author: "Audrey Hepburn"
  },
  {
    text: "There is nothing impossible to they who will try.",
    author: "Alexander the Great"
  },
  {
    text: "The bad news is time flies. The good news is you're the pilot.",
    author: "Michael Altshuler"
  },
  {
    text: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    author: "Nicole Kidman"
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "To live is the rarest thing in the world. Most people just exist.",
    author: "Oscar Wilde"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius"
  },
  {
    text: "May you live all the days of your life.",
    author: "Jonathan Swift"
  },
  {
    text: "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller"
  },
  {
    text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett"
  },
  {
    text: "What we think, we become.",
    author: "Buddha"
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts"
  },
  {
    text: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama"
  },
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The best revenge is massive success.",
    author: "Frank Sinatra"
  },
  {
    text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.",
    author: "Zig Ziglar"
  },
  {
    text: "We become what we think about most of the time, and that's the strangest secret.",
    author: "Earl Nightingale"
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: "Jordan Belfort"
  },
  {
    text: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    author: "Swami Vivekananda"
  },
  {
    text: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney"
  },
  {
    text: "Good things happen to those who hustle.",
    author: "Anais Nin"
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett"
  }
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgrounds = [
    'bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-600',
    'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600',
    'bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600',
    'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500',
    'bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-600',
    'bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600'
  ];

  const generateNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
      setIsAnimating(false);
    }, 150);
  };

  const shareOnTwitter = () => {
    const tweetText = `"${currentQuote.text}" - ${currentQuote.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank');
  };

  const copyQuote = async () => {
    const quoteText = `"${currentQuote.text}" - ${currentQuote.author}`;
    try {
      await navigator.clipboard.writeText(quoteText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy quote:', err);
    }
  };

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-1000 ease-in-out ${backgrounds[backgroundIndex]} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-yellow-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-32 right-20 w-48 h-48 bg-cyan-300/10 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Main Quote Card */}
          <div className={`backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'} hover:scale-105 hover:shadow-3xl`}>
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/30 backdrop-blur-sm shadow-lg border border-white/40">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-center mb-8">
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6 tracking-wide drop-shadow-lg">
                "{currentQuote.text}"
              </p>
              <footer className="text-white/90 text-lg font-medium drop-shadow-md">
                — {currentQuote.author}
              </footer>
            </blockquote>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={generateNewQuote}
                disabled={isAnimating}
                className="group flex items-center gap-3 px-6 py-3 bg-white/25 hover:bg-white/35 backdrop-blur-sm border border-white/40 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-5 h-5 transition-transform duration-300 ${isAnimating ? 'animate-spin' : 'group-hover:rotate-180'}`} />
                New Quote
              </button>

              <button
                onClick={shareOnTwitter}
                className="group flex items-center gap-3 px-6 py-3 bg-sky-400/30 hover:bg-sky-400/45 backdrop-blur-sm border border-sky-300/50 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/30"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Share on Twitter
              </button>

              <button
                onClick={copyQuote}
                className="group flex items-center gap-3 px-6 py-3 bg-emerald-400/25 hover:bg-emerald-400/35 backdrop-blur-sm border border-emerald-300/40 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-400/25"
              >
                <Copy className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* App Title */}
          <div className="text-center mt-12">
            <h1 className="text-white/90 text-2xl md:text-3xl font-light tracking-wider">
              Inspire<span className="font-semibold">Quote</span>
            </h1>
            <p className="text-white/70 text-sm mt-2 tracking-wide">
              Daily inspiration at your fingertips
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse shadow-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;