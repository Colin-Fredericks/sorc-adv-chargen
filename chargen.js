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
        name: 'The Geometer\'s Guild',
        traditions: ['sacredgeom'],
        benefit: ''
    },        
    glimmermere: {
        name: 'Glimmermere',
        traditions: ['highertalent','madpower'],
        benefit: ''
    },        
    aegis: {
        name: 'The Golden Ægis',
        traditions: ['calling','auraofheaven'],
        benefit: ''
    },        
    hearthkin: {
        name: 'The Hearth-Kin',
        traditions: ['whatbindsus','whatdefinesus'],
        benefit: ''
    },        
    nova: {
        name: 'Nova Commonwealth',
        traditions: ['buildyourown'],
        benefit: ''
    },        
    sovereigns: {
        name: 'The Sovereigns of Hell',
        traditions: ['devilpower','sagepath', 'silentpath'],
        benefit: ''
    },        
    thoseabove: {
        name: 'Those Above the Sky',
        traditions: ['starlitway','homebuilders'],
        benefit: ''
    },        
    unroyal: {
        name: 'The Unroyal',
        traditions: ['keyoffreedom','keyofcourage'],
        benefit: ''
    },        
    worldbuilders: {
        name: 'The Worldbuilders',
        traditions: ['parelthonia','symmachis'],
        benefit: ''
    },        
    unruly: {
        name: 'An Unruly Land',
        traditions: ['buildyourown'],
        benefit: ''
    },        
    returner: {
        name: 'Returner Cult',
        traditions: ['none'],
        benefit: ''
    },        
};

const trads = {
    buildyourown: {
        name: 'Build-your-own Tradition',
        expressions: [],
        paths: [],
        founts: [],
    },
    practice: {
        name: 'The Practice',
        expressions: [ 'Cloning', 'Curses', 'Expanded Expertise (Archetypal or Polymath)', 'Hypnopraxis', 'Multitasking', 'Null Tolerance', 'Psychometry', 'Soul-work', 'the Uncountable Spinners' ],
        paths: ['language'],
        founts: ['necromancy'],
    },
    rage: {
        name: 'The Rage',
        expressions: [ 'the Burning Dream', 'Curses', 'Deconjuration', 'Hallucination', 'Nightmare Exile', 'the Ten Crore Stones', 'Weather-work' ],
        paths: ['belief'],
        founts: ['necromancy'],
    },
    transubstantiation: {
        name: 'Transubstantiation',
        expressions: [ 'Dreamshaping', 'Expanded Expertise (Satori)', 'Hallucination', 'Hypnopraxis', 'the Red Space', 'Transmutation'],
        paths: ['reagents'],
        founts: ['oneiromancy'],
    },
    drudgery: {
        name: 'Drudgery',
        expressions: [ 'Conjuration', 'Multitasking', 'Mystical Servitors', 'Nature-work', 'Tailored Canon', 'Telekinesis', 'Transmutation', 'Weather-work' ],
        paths: ['discipline (physical)'],
        founts: ['elementalism'],
    },
    sacredgeom: {
        name: 'Sacred Geometry',
        expressions: [ 'Enhanced Expertise (Satori)', 'Mana Storage', 'Psychometry', 'the Red Space', 'Tekinesis', 'Travel', 'Universal Repositories', 'Warding'],
        paths: ['geometry'],
        founts: ['alchemy'],
    },
    highertalent: {
        name: 'The Higher Talent',
        expressions: [ 'Conjuration', 'Dream Travel', 'Dreamshaping', 'Hypnopraxis', 'Shapeshifting', 'Spirit-Walking'],
        paths: ['artistry'],
        founts: ['oneiromancy'],
    },
    madpower: {
        name: 'The Mad Power',
        expressions: [ 'Curses', 'Energy Waves', 'Mystical Servitors', 'Nightmare Exile', 'Shapeshifting', 'the Ten Crore Stones '],
        paths: ['wild magic'],
        founts: ['glory'],
    },
    calling: {
        name: 'The Calling of Heaven',
        expressions: [ 'Conjuration', 'Healing', 'Mana Storage', 'Spirit-Walking', 'Travel', 'Warding'],
        paths: ['belief'],
        founts: ['glory'],
    },
    auraofheaven: {
        name: 'The Aura of Heaven',
        expressions: [ 'Null Tolerance', 'Psychometry', 'Shapeshifting', 'Soul-work', 'Telekinesis', 'Universal Repositories '],
        paths: ['patrons'],
        founts: ['arete'],
    },
    whatbindsus: {
        name: 'What Binds Us',
        expressions: [ 'Cloning', 'Conjuration', 'Healing', 'Multitasking', 'Nature-work', 'Warding', 'Weather-work' ],
        paths: ['blood magic'],
        founts: ['earthpower'],
    },
    whatdefinesus: {
        name: 'What Defines Us',
        expressions: [ 'Hypnopraxis', 'Nightmare Exile', 'Personae', 'Shapeshifting', 'Spirit-walking', 'Travel'],
        paths: ['beliefs'],
        founts: ['arete'],
    },
    devilpower: {
        name: 'Devilpower',
        expressions: [ 'Conjuration', 'Curses', 'Lagged Curses', 'Multitasking', 'Mystic Servitors', 'the Shell Game', 'Telekinesis'],
        paths: ['patrons'],
        founts: ['glory'],
    },
    sagepath: {
        name: 'The Sage\'s Path',
        expressions: [ 'Conjuration', 'Hallucination', 'Mana Storage', 'Psychometry', 'the Red Space', 'Travel'],
        paths: ['geometry'],
        founts: ['glory'],
    },
    silentpath: {
        name: 'The Silent Path',
        expressions: [ 'Dream Travel', 'Healing', 'Mystic Servitors', 'Personae', 'Psychometry', 'Spirit-Walking '],
        paths: ['reagents'],
        founts: ['necromancy'],
    },
    starlitway: {
        name: 'The Starlit Way',
        expressions: [ 'Healing', 'Precognition', 'Psychometry', 'Spirit-Walking', 'Transmutation', 'Universal Repositories'],
        paths: ['reagents'],
        founts: ['alchemy'],
    },
    homebuilders: {
        name: 'The Home-Builder\'s Art',
        expressions: [ 'Conjuration', 'Deconjuration', 'Null Tolerance', 'Shapeshifting', 'Telekinesis', 'Warding'],
        paths: ['geometry'],
        founts: ['elementalism'],
    },
    keyoffreedom: {
        name: 'The Key of Freedom',
        expressions: [ 'Conjuration', 'Energy Waves', 'Expanded Expertise (Archetypal)', 'Healing', 'Shapeshifting', 'Weather-working'],
        paths: ['wild magic'],
        founts: ['earthpower'],
    },
    keyofcourage: {
        name: 'The Key of Courage',
        expressions: [ 'Curses', 'Dream Travel', 'Dreamshaping', 'Travel', 'Warding'],
        paths: ['belief'],
        founts: ['glory'],
    },
    parelthonia: {
        name: 'Parelthonia',
        expressions: [ 'Conjuration', 'Dream Travel', 'Precognition', 'The Uncountable Spinners', 'the Ten Crore Stones', 'Travel'],
        paths: ['artistry','geometry'],
        founts: ['necromancy'],
    },
    symmachis: {
        name: 'Symmachis',
        expressions: [ 'Curses', 'Healing', 'Multitasking', 'Shapeshifting', 'Weather-working '],
        paths: ['patrons'],
        founts: ['elementalism'],
    },
};

const natures = ['Communion', 'Industry', 'Mystery', 'Self', 'Trickery', 'War'];


$(document).ready(function(){

    // Tradition and Nature HTML definition
    // n is for the nth block, the title is the tradition's keyname
    function tradblock(n, title){
        // container div
        let d = $('<div>');
        d.attr('id', 'trad' + n);
        
        // title
        let t = $('<div>');
        d.attr = ('id', 'trad' + n + 'name');
        d.text = trads[title];
        d.append(t);
        
        // nature block
        let nb = $('<div>');
        nb.addClass('nature-scores');
        nb.append('<div></div>');
        nb.append('<div style="padding-left: 0.5em;">Score</div>');
        nb.append('<div style="padding-left: 0.5em;">Aspect</div>');
        
        natures.forEach(function(e){
            el = e.toLowerCase();
            
            let label = $('<label>');
            label.attr('for',el);
            label.text(e + '-nature');
            
            let natureval = $('<input>');
            natureval.attr({'id': el, type: 'number', 'name': el});
            
            let aspect = $('<input>');
            aspect.attr({'id': el + '-aspect', type: 'text', 'name': el + '-aspect'});

            nb.append(label);
            nb.append(natureval);
            nb.append(aspect);
        });
        
        d.append(nb);
        
        return d;
    }

    // Second Civilization toggle
    
    // Second Society toggle

    // Fill values based on Civ and Society.
    

    // Toggle optional elements
    $('#showoptional').on('click tap', function(e){
        e.preventDefault();
        $('.optionalblock').slideToggle('fast');
        let newstate = $('#showoptional').attr('aria-expanded') === 'false';
        let newtext = newstate ? '▲' : '▼';
        console.log(newstate);
        $('#showoptional').attr('aria-expanded', newstate);
        $('#showoptional').text(newtext);
    });
    
    // Calculate Import and Power

});