var list;

function resetList() {
  list = [
    {
      text: "Her beautiful smile. (you know she's really smiling when her face scrunches up, like this:)",
      image: "images/smile.jpg",
      color: "#261a0c",
      color2: "#f8bc76",
      viewed: false
    },
    {
      text: "Her tiny cute nose.",
      color: "#261a0c",
      color2: "#f8bc76",
      viewed: false
    },
    {
      text: "Her round, pretty face.",
      image: "images/pretty.jpg",
      color: "#16687d",
      color2: "#fad8b2",
      viewed: false
    },
    {
      text: "She is soft and fluffy.",
      color: "#17998f",
      color2: "#494c81",
      viewed: false
    },
    {
      text: "Her endearing chuckle.",
      color: "#261a0c",
      color2: "#f8bc76",
      viewed: false
    },
    {
      text: "Her coughs that are actually sneezes.",
      color: "#261a0c",
      color2: "#f8bc76",
      viewed: false
    },
    {
      text: "We have similar aesthetic sensibilities.",
      color: "#228b22",
      color2: "#ff4500",
      viewed: false
    },
    {
      text: "We have similar tastes in clothes.",
      image: "images/clothes.jpg",
      color: "#554772",
      color2: "#e5c47e",
      viewed: false
    },
    {
      text: "We have similar tastes in food.",
      image: "images/food.jpg",
      color: "#e086ce",
      color2: "#997854",
      viewed: false
    },
    {
      text: "She is rarely annoying.",
      color: "#87ceeb",
      color2: "#0077be",
      viewed: false
    },
    {
      text: "She likes to cook with me.",
      image: "images/cooking3.jpg",
      color: "#367ab3",
      color2: "#f36161",
      viewed: false
    },
    {
      text: "We like to cook for each other.",
      image: "images/cooking1.jpg",
      image2: "images/cooking2.jpg",
      color: "#367ab3",
      color2: "#f36161",
      viewed: false
    },
    {
      text: "We make decisions together effectively.",
      color: "#367ab3",
      color2: "#f36161",
      viewed: false
    },
    {
      text: "We never fight.",
      image: "images/fight.jpg",
      color: "#515866",
      color2: "#499370",
      viewed: false
    },
    {
      text: "She puts up with my weirdness (burrito role-play, etc.).",
      image: "images/weirdness.jpg",
      color: "#e1b076",
      color2: "#7b7f7c",
      viewed: false
    },
    {
      text: "She always wants to hang out (but is never clingy).",
      color: "#367ab3",
      color2: "#f36161",
      viewed: false
    },
    {
      text: "She takes her work seriously.",
      image: "images/work.jpg",
      color: "#bf4d4d",
      color2: "#e69445",
      viewed: false
    },
    {
      text: "She goes the extra mile in everything she does.",
      color: "#bf4d4d",
      color2: "#e69445",
      viewed: false
    },
    {
      text: "She loves helping others.",
      color: "#add8e6",
      color2: "#dd0b2c",
      viewed: false
    },
    {
      text: "She has awesome friends.",
      image: "images/friends2.jpg",
      color: "#3a8356",
      color2: "#353170",
      viewed: false
    },
    {
      text: "She pretends to like my friends.",
      image: "images/friends1.jpg",
      color: "#fdcda5",
      color2: "#665e57",
      viewed: false
    },
    {
      text: "She puts up with Lil' Blizzard & friends.",
      image: "images/blizzard.jpg",
      color: "#e69657",
      color2: "#5d9b67",
      viewed: false
    },
    {
      text: "She loves animals the most (certain people are ok too).",
      image: "images/doggy.jpg",
      color: "#9aadab",
      color2: "#f77674",
      viewed: false
    },
    {
      text: "She is very organized.",
      color: "#fa8072",
      color2: "#007aa5",
      viewed: false
    },
    {
      text: "She's willing to try new things.",
      image: "images/newthings.jpg",
      color: "#385f8c",
      color2: "#8c383a",
      viewed: false
    },
    {
      text: "She puts other people's needs before her own.",
      color: "#add8e6",
      color2: "#dd0b2c",
      viewed: false
    },
    {
      text: "She can hold up her end of a conversation.",
      image: "images/conversation.jpg",
      color: "#d37fdd",
      color2: "#a57459",
      viewed: false
    },
    {
      text: "She can talk intelligently about science.",
      color: "#32cd32",
      color2: "#0073cf",
      viewed: false
    },
    {
      text: "She doesn't watch too much TV.",
      image: "images/tv.jpg",
      color: "#f79a5f",
      color2: "#41adc7",
      viewed: false
    },
    {
      text: "She always wants to know what I'm up to.",
      color: "#e06361",
      color2: "#67cbed",
      viewed: false
    },
    {
      text: "We're good traveling companions.",
      image: "images/travel.jpg",
      color: "#68d3e3",
      color2: "#ff757a",
      viewed: false
    },
    {
      text: "She seems to like my family (even though we're so white).",
      image: "images/differences.jpg",
      color: "#57da75",
      color2: "#fd706d",
      viewed: false
    },
    {
      text: "She willingly changes things about herself for me (and asks for nothing in return).",
      color: "#57da75",
      color2: "#fd706d",
      viewed: false
    },
    {
      text: "She values honesty.",
      color: "#a9a9a9",
      color2: "#404040",
      viewed: false
    },
    {
      text: "She values knowledge and learning.",
      color: "#ffbc37",
      color2: "#006aae",
      viewed: false
    },
    {
      text: "She values staying fit and healthy.",
      image: "images/exercise.jpg",
      color: "#ee9e94",
      color2: "#2e2a29",
      viewed: false
    },
    {
      text: "She understands when I need time alone.",
      image: "images/alone.jpg",
      color: "#ec813d",
      color2: "#406a91",
      viewed: false
    },
    {
      text: "She's frugal.",
      color: "#c6cc33",
      color2: "#394c09",
      viewed: false
    },
    {
      text: "She's not materialistic.",
      image: "images/materialistic.jpg",
      color: "#984f67",
      color2: "#8b4513",
      viewed: false
    },
    {
      text: "She keeps me on my toes by frequently threatening to leave. Bye!",
      color: "#0077be",
      color2: "#c2b280",
      viewed: false
    },
    {
      text: "She has high expectations for herself and others.",
      color: "#031990",
      color2: "#c3e9de",
      viewed: false
    },
    {
      text: "She plans date nights for the two of us.",
      image: "images/date.jpg",
      color: "#ee9577",
      color2: "#59483e",
      viewed: false
    },
    {
      text: "She's good at staying positive even when it's hard.",
      image: "images/consolation.jpg",
      color: "#74b2cc",
      color2: "#2f3a3f",
      viewed: false
    },
    {
      text: "She acts so cute without even trying.",
      image: "images/socue1.jpg",
      image2: "images/socue2.jpg",
      image3: "images/socue3.jpg",
      color: "#4c2639",
      color2: "#0f3199",
      viewed: false
    },
    {
      text: "She has a really creative and talented sister.",
      image: "images/chenya.jpg",
      color: "#142551",
      color2: "#41b989",
      viewed: false
    },
    {
      text: "She has a really unique and charismatic brother.",
      image: "images/michael.jpg",
      color: "#c6e6ac",
      color2: "#1f130c",
      viewed: false
    },
    {
      text: "She has parents who clearly want the best for her.",
      image: "images/mombest.jpg",
      color: "#fdc1b6",
      color2: "#0d0d17",
      viewed: false
    },
    {
      text: "She is always polite and considerate.",
      color: "#fa8072",
      color2: "#007aa5",
      viewed: false
    },
    {
      text: "She has the fourth-best cat of all time.",
      image: "images/cats1.jpg",
      image2: "images/cats2.jpg",
      color: "#538080",
      color2: "#a6673a",
      viewed: false
    },
    {
      text: "Her strong hands give great massages.",
      color: "#261a0c",
      color2: "#f8bc76",
      viewed: false
    },
    {
      text: "She is an excellent teaching assistant and would make a great professor.",
      image: "images/professorchang.jpg",
      color: "#2d64b3",
      color2: "#ba7b45",
      viewed: false
    },
    {
      text: "She plans fun events that bring people together.",
      color: "#3a8356",
      color2: "#353170",
      viewed: false
    },
    {
      text: "She is an awesome sous-chef.",
      image: "images/sous-chef.gif",
      color: "#dfa75b",
      color2: "#293d66",
      viewed: false
    },
    {
      text: "She lets me do dumb stuff with my dumb friends.",
      image: "images/friends1.jpg",
      color: "#fdcda5",
      color2: "#665e57",
      viewed: false
    },
    {
      text: "She is a great cuddle buddy.",
      image: "images/cuddling.jpg",
      color: "#517693",
      color2: "#4d806e",
      viewed: false
    },
    {
      text: "She's always game for impromptu afternoon cuddle sessions.",
      color: "#517693",
      color2: "#4d806e",
      viewed: false
    },
    {
      text: "She is a great big sister to her little brother.",
      color: "#c6e6ac",
      color2: "#1f130c",
      viewed: false
    },
    {
      text: "She hosts the best cooking parties.",
      color: "#3a8356",
      color2: "#353170",
      viewed: false
    },
    {
      text: "She takes an interest in my hobbies (or pretends really well).",
      image: "images/hobbies.jpg",
      color: "#7ab1cc",
      color2: "#f79a99",
      viewed: false
    },
    {
      text: "She has a heart of gold.",
      color: "#a41313",
      color2: "#daa520",
      viewed: false
    },
    {
      text: "She gives me a reason to work hard.",
      image: "images/inspiration.jpg",
      color: "#e69445",
      color2: "#bf4d4d",
      viewed: false
    },
    {
      text: "She inspires projects that help me become a better web developer.",
      image: "images/inspiration.jpg",
      color: "#e69445",
      color2: "#bf4d4d",
      viewed: false
    },
    {
      text: "I miss her more than she thinks I do.",
      image: "images/missyou.jpg",
      color: "#fe2a00",
      color2: "#6913bf",
      viewed: false
    },
    {
      text: "She likes to walk around the house with no pants on.",
      image: "images/nopants.jpg",
      color: "#f27979",
      color2: "#f8c8a1",
      viewed: false
    },
    {
      text: "She surprises me at the airport.",
      color: "#0815a6",
      color2: "#f87821",
      viewed: false
    },
    {
      text: "She makes even mundane things like shopping fun and exciting.",
      image: "images/shopping.jpg",
      color: "#99332e",
      color2: "#384e66",
      viewed: false
    },
    {
      text: "She loves her parents.",
      image: "images/lienshin.jpg",
      image2: "images/mom.jpg",
      color: "#593141",
      color2: "#3d5916",
      viewed: false
    },
    {
      text: "She's naturally curious and asks good questions.",
      image: "images/curious.jpg",
      color: "#664338",
      color2: "#bf6863",
      viewed: false
    },
    {
      text: "She likes to wear clothes I like on our date nights.",
      image: "images/dress1.jpg",
      image2: "images/dress2.jpg",
      color: "#000000",
      color2: "#a5000e",
      viewed: false
    },
    {
      text: "She puts up with me when I am grumpy from working too much.",
      image: "images/grumpy.jpg",
      color: "#406a91",
      color2: "#ec813d",
      viewed: false
    },
    {
      text: "She loves bravely and without restraint.",
      image: "images/love.jpg",
      color: "#f42a1e",
      color2: "#04a947",
      viewed: false
    },
    {
      text: "She doesn't hesitate to tell me how she's feeling.",
      image: "images/feelings.jpg",
      color: "#725249",
      color2: "#e6c4a1",
      viewed: false
    },
    {
      text: "She experiences moments of intense affection (and not just toward cats).",
      image: "images/affection.jpg",
      color: "#802f2d",
      color2: "#284865",
      viewed: false
    },
    {
      text: "She's willing to be my partner in crime, but she also knows when to talk me out of bad ideas.",
      color: "#a9a9a9",
      color2: "#404040",
      viewed: false
    },
    {
      text: "She brought catten into my life.",
      image: "images/catten1.jpg",
      image2: "images/catten2.jpg",
      color: "#53a6a6",
      color2: "#ffb640",
      viewed: false
    },
    {
      text: "She sends me good morning and good night texts.",
      image: "images/texts.jpg",
      color: "#335580",
      color2: "#77b0d9",
      viewed: false
    },
    {
      text: "She beat me in an easter egg hunt.",
      image: "images/easter.jpg",
      color: "#f2796d",
      color2: "#60a3bf",
      viewed: false
    },
    {
      text: "We're always thinking of the same things.",
      image: "images/mindreading1.jpg",
      image2: "images/mindreading2.jpg",
      color: "#384966",
      color2: "#d97977",
      viewed: false
    },
    {
      text: "She always knows when I need a hug.",
      image: "images/hug.jpg",
      color: "#654321",
      color2: "#deb887",
      viewed: false
    },
    {
      text: "She doesn't mind when I just want to look at her for a while.",
      image: "images/beautiful.jpg",
      color: "#367ab3",
      color2: "#f36161",
      viewed: false
    },
    {
      text: "She stays up with me when I'm working late at night.",
      image: "images/workinglate.jpg",
      color: "#4d6166",
      color2: "#bf7c72",
      viewed: false
    },
    {
      text: "Her main spirit animal is a hippo.",
      image: "images/hippo.jpg",
      color: "#000000",
      color2: "#a7bf30",
      viewed: false
    },
    {
      text: "Her other spirit animal is a saw-whet owl.",
      image: "images/owl.jpg",
      color: "#999916",
      color2: "#cc751e",
      viewed: false
    },
    {
      text: "She helps me with hard decisions.",
      image: "images/decisions.jpg",
      color: "#40807b",
      color2: "#537322",
      viewed: false
    },
    {
      text: "She brought me to Taiwan.",
      image: "images/taiwan1.jpg",
      image2: "images/taiwan2.jpg",
      image3: "images/taiwan3.jpg",
      color: "#2e4b73",
      color2: "#564d99",
      viewed: false
    },
    {
      text: "I can hang out with her for long periods of time without getting tired.",
      color: "#367ab3",
      color2: "#f36161",
      viewed: false
    },
    {
      text: "She doesn't mind making most of the plans.",
      image: "images/plans.jpg",
      color: "#a1c3e6",
      color2: "#338047",
      viewed: false
    },
    {
      text: "She knows how to cheer me up when I'm feeling down.",
      image: "images/cheer.jpg",
      color: "#664633",
      color2: "#b359a8",
      viewed: false
    },
    {
      text: "She has a happy food dance.",
      image: "images/dance.jpg",
      color: "#d9766c",
      color2: "#4d6199",
      viewed: false
    },
    {
      text: "She likes playing puzzle video games with me.",
      image: "images/games.jpg",
      image2: "images/witness.jpg",
      color: "#99cc00",
      color2: "#e66000",
      viewed: false
    },
    {
      text: "She's not easily offended.",
      image: "images/oops.jpg",
      color: "#4d352a",
      color2: "#4b7aa6",
      viewed: false
    },
    {
      text: "She supports my career goals and decisions.",
      color: "#40807b",
      color2: "#537322",
      viewed: false
    },
    {
      text: "She makes me want to do chores for her.",
      image: "images/dishes.jpg",
      color: "#d98a41",
      color2: "#42a651",
      viewed: false
    },
    {
      text: "She's fun to have around over the holidays.",
      image: "images/holidays1.jpg",
      color: "#262320",
      color2: "#e67a00",
      viewed: false
    },
    {
      text: "Movie nights with her are the best.",
      image: "images/movie1.jpg",
      image2: "images/movie2.jpg",
      color: "#33803f",
      color2: "#cc5452",
      viewed: false
    },
    {
      text: "She looks great in a swimsuit.",
      image: "images/swimsuit.jpg",
      color: "#338052",
      color2: "#006a8c",
      viewed: false
    },
    {
      text: "Being with her just feels right.",
      image: "images/us.jpg",
      color: "#59381b",
      color2: "#00732a",
      viewed: false
    }
  ];
}