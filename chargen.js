$(document).ready(function(){

    const civs = {
        cult: {
            name: 'the Cult of the Empty Grave',
            traditions: ['practice','rage'],
            benefit: ''
        },
        diadem: {
            name: 'Diadem',
            traditions: ['transubstantiation','drudgery'],
            benefit: ''
        },        
        guild: {
            name: 'The Geometer\'s Guild'',
            traditions: ['sacredgeom'],
            benefit: ''
        },        
        glimmermere: {
            name: 'Glimmermere',
            traditions: ['',''],
            benefit: ''
        },        
        aegis: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        hearthkin: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        nova: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        sovereigns: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        thoseabove: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        unroyal: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        worldbuilders: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        unruly: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
        returner: {
            name: '',
            traditions: ['',''],
            benefit: ''
        },        
    }
    
    const trads = {
        practice: {
            name: 'The Practice',
            expressions: [ 'Cloning', 'Curses', 'Expanded Expertise (Archetypal or Polymath)', 'Hypnopraxis', 'Multitasking', 'Null Tolerance', 'Psychometry', 'Soul-work', 'the Uncountable Spinners' ]
        },
        rage: {
            name: '',
            expressions: [ 'the Burning Dream', 'Curses', 'Deconjuration', 'Hallucination', 'Nightmare Exile', 'the Ten Crore Stones', 'Weather-work' ]
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
        xx: {
            name: '',
            expressions: [],
        },
    }

    $('#showoptional').on('click tap', function(e){
        e.preventDefault();
        $('.optionalblock').slideToggle('fast');
        let newstate = $('#showoptional').attr('aria-expanded') === 'false';
        let newtext = newstate ? '▲' : '▼';
        console.log(newstate);
        $('#showoptional').attr('aria-expanded', newstate);
        $('#showoptional').text(newtext);
    });

});