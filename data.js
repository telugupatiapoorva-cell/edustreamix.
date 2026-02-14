const commonLanguages = [

{
name:"English",
channels:[
{name:"Part A - English by Nisa",links:[
"https://www.youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D"
]},
{name:"Part B - English by Nisa",links:[
"https://www.youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8"
]},
{name:"Whole Subject - Sara’s Learning Point",links:[
"https://www.youtube.com/playlist?list=PLjNdhMBtsxpwAyVG7o59hqSCUYKKHvz-Y"
]},
{name:"Whole Subject - Dandu Venkatramulu",links:[
"https://www.youtube.com/playlist?list=PLyjVm5GfnmY6rkPqkpH7psUaOBb44ShwS"
]},
{name:"Whole Subject - Educare",links:[
"https://www.youtube.com/playlist?list=PLbBCm7TkLCKJtzjewd_X4NrbTBd4eCy_M"
]},
{name:"Whole Subject - PCV English",links:[
"https://www.youtube.com/playlist?list=PLldWy7gu4R757w2-mkgFz7HDzDVhp-GkT"
]}
]
},

{
name:"Telugu",
channels:[
{name:"Dandu Venkatramulu",links:[
"https://www.youtube.com/playlist?list=PLyjVm5GfnmY6UUa5iLn-GQNPkW7y1CeMh"
]},
{name:"Matrubhasha",links:[
"https://www.youtube.com/playlist?list=PL7noKDJp4ZRKVkWtOlT6edyqABvC-zjNI"
]}
]
},

{
name:"Hindi",
channels:[
{name:"Disha Hindi Classes",links:[
"https://www.youtube.com/playlist?list=PLsTBUOfP6EhdnT2rEau2eaprGMdw6BZra"
]}
]
},

{
name:"Sanskrit",
channels:[
{name:"Dandu Venkatramulu",links:[
"https://www.youtube.com/playlist?list=PLyjVm5GfnmY7ynZnZ0neH3LcGAi1oBzHh"
]},
{name:"My Teaching Talkies",links:[
"https://www.youtube.com/playlist?list=PLc1Q__0qOGAoAuv-LLipyNqpatmyE_7KJ"
]},
{name:"Dr. Pusapati Ravikantha Reddy",links:[
"https://www.youtube.com/playlist?list=PLiOV0508aWZti2c9x-V-WxJCmGLW2EN3e"
]}
]
}

];

const commerceCore = [

{
name:"Cost Control and Management Accounting",
channels:[
{name:"Hasham Ali Khan - Part 1",links:[
"https://www.youtube.com/playlist?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v"
]},
{name:"Hasham Ali Khan - Part 2",links:[
"https://www.youtube.com/playlist?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog"
]},
{name:"Devika’s Commerce - Whole Subject",links:[
"https://www.youtube.com/playlist?list=PLLhSIFfDZcUVaBuGIMvQFx1OVGzfhbPeC"
]}
]
},

{
name:"Theory and Practice of GST",
channels:[
{name:"Hasham Ali Khan - Whole Subject",links:[
"https://www.youtube.com/playlist?list=PLWJDzVuPkXAkNpdAIqufc2JxDoxjENrsj"
]}
]
},

{
name:"Accounting Standards",
channels:[
{name:"Devika’s Commerce",links:[
"https://www.youtube.com/playlist?list=PLLhSIFfDZcUXO81uWFy_F6O4ZX0JfTYkV"
]},
{name:"Hasham Ali Khan",links:[
"https://www.youtube.com/playlist?list=PLWJDzVuPkXAmAI6CfaLfYpQVvQFhXzxC6"
]}
]
},

{
name:"Research Methodology & Project",
channels:[
{name:"Devika’s Commerce",links:[
"https://www.youtube.com/playlist?list=PLLhSIFfDZcUWRlgiXMkd1rNeLSz1You4O"
]},
{name:"Lakshya Commerce",links:[
"https://www.youtube.com/playlist?list=PLjMjkIR4-dvIAvboLjtq6sSi_1_wk2VgD"
]},
{name:"Pooja Singh",links:[
"https://www.youtube.com/playlist?list=PLk3poRqYftlhDGto5oSxeNeFWHzajbVuA"
]}
]
}

];

const data = {

"B.Com General - Semester 6": [
...commonLanguages,
...commerceCore
],

"B.Com Honors - Semester 6": [
...commonLanguages,
{
name:"International Finance",
channels:[
{name:"Hasham Ali Khan",links:[
"https://www.youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf"
]}
]
},
...commerceCore
],

"B.Com Computer Applications - Semester 6": [
...commonLanguages,
...commerceCore,
{
name:"Cybersecurity",
channels:[
{name:"Whole Subject",links:[
"https://www.youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo"
]}
]
}
],

"B.Com Business Analytics - Semester 6": [
...commonLanguages,
...commerceCore,
{
name:"Business Application of Emerging Technologies",
channels:[
{name:"(Add Playlist Here)",links:["#"]}
]
}
]

};
