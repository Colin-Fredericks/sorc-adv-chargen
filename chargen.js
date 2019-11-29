const civs = {
  cult: {
    name: 'the Cult of the Empty Grave',
    cvs: [''],
    traditions: ['practice', 'rage'],
    benefit: ''
  },
  diadem: {
    name: 'Diadem',
    cvs: [''],
    traditions: ['transubstantiation', 'drudgery'],
    benefit: ''
  },
  geometers: {
    name: "The Geometer's Guild",
    cvs: [''],
    traditions: ['sacredgeom'],
    benefit: ''
  },
  glimmermere: {
    name: 'Glimmermere',
    cvs: [''],
    traditions: ['highertalent', 'madpower'],
    benefit: ''
  },
  aegis: {
    name: 'The Golden Ægis',
    cvs: [''],
    traditions: ['calling', 'auraofheaven'],
    benefit: ''
  },
  hearthkin: {
    name: 'The Hearth-Kin',
    cvs: [''],
    traditions: ['whatbindsus', 'whatdefinesus'],
    benefit: ''
  },
  nova: {
    name: 'Nova Commonwealth',
    cvs: [''],
    traditions: ['buildyourown'],
    benefit: ''
  },
  sovereigns: {
    name: 'The Sovereigns of Hell',
    cvs: [''],
    traditions: ['devilpower', 'sagepath', 'silentpath'],
    benefit: ''
  },
  thoseabove: {
    name: 'Those Above the Sky',
    cvs: [''],
    traditions: ['starlitway', 'homebuilders'],
    benefit: ''
  },
  unroyal: {
    name: 'The Unroyal',
    cvs: [''],
    traditions: ['keyoffreedom', 'keyofcourage'],
    benefit: ''
  },
  worldbuilders: {
    name: 'The Worldbuilders',
    cvs: [''],
    traditions: ['parelthonia', 'symmachis'],
    benefit: ''
  },
  unruly: {
    name: 'An Unruly Land',
    cvs: [''],
    traditions: ['buildyourown'],
    benefit: ''
  },
  returner: {
    name: 'Returner Cult',
    cvs: [''],
    traditions: ['none'],
    benefit: ''
  }
};

const societies = {
  nosociety: { name: 'None', cvs: [''], traditions: [], benefit: '' },
  archivist: {
    name: 'Archivist',
    cvs: ['Knowledge for the sake of...'],
    traditions: [],
    benefit: ''
  },
  explorer: {
    name: "the Explorer's Society",
    cvs: ['Exploration'],
    traditions: [],
    benefit: ''
  },
  fellowship: {
    name: 'the Fellowship of Truth',
    cvs: ['The Old Ways'],
    traditions: ['truewiz'],
    benefit: ''
  },
  fireandscale: {
    name: 'Fire and Scale',
    cvs: ['Hedonism'],
    traditions: ['languid'],
    benefit: ''
  },
  gatecrasher: {
    name: 'the Gatecrashers',
    cvs: ['Stay Bought'],
    traditions: ['pathfinding'],
    benefit: ''
  },
  groundbreaker: {
    name: 'the Groundbreakers',
    cvs: ['Go for the Gold'],
    traditions: [],
    benefit: ''
  },
  highsociety: {
    name: 'High Society',
    cvs: ['Good Breeding'],
    traditions: [],
    benefit: ''
  },
  hospitaler: {
    name: 'the Hospitalers',
    cvs: ['Charity'],
    traditions: [],
    benefit: ''
  },
  mindweavers: {
    name: 'the Mindweavers',
    cvs: ['Create Your Own Salvation'],
    traditions: ['analysis'],
    benefit: ''
  },
  orgcrime: {
    name: 'Organized Crime',
    cvs: ['the Wall of Silence'],
    traditions: [],
    benefit: ''
  },
  peacewalker: {
    name: 'the Peacewalkers',
    cvs: ['Non-Violence'],
    traditions: [],
    benefit: ''
  },
  protean: {
    name: 'the Protean',
    cvs: ['Freedom of Form'],
    traditions: [],
    benefit: ''
  },
  soulpact: {
    name: 'the Soulpact',
    cvs: ['Redemption'],
    traditions: [],
    benefit: ''
  },
  sunsinger: {
    name: 'the Sunsingers',
    cvs: ['The Middle Path'],
    traditions: ['callingsun'],
    benefit: ''
  },
  wargamer: {
    name: 'the Wargamers',
    cvs: ['See it Through'],
    traditions: [],
    benefit: ''
  },
  windblown: {
    name: 'the Windblown',
    cvs: ['Tell Your Story'],
    traditions: ['oldway'],
    benefit: ''
  }
};

const trads = {
  nomag: {
    name: 'No magical tradition',
    expressions: [],
    paths: [],
    founts: []
  },
  buildyourown: {
    name: 'Build-your-own Tradition',
    expressions: [],
    paths: [],
    founts: []
  },
  diamond: {
    name: 'the Diamond of the Soul',
    expressions: [
      'Cloning',
      'Guising',
      'Hypnopraxis',
      'Precognition',
      'Psychometry',
      'the Uncountable Spinners'
    ],
    paths: ['discipline (body)'],
    founts: ['necromancy']
  },
  languid: {
    name: 'the Languid Art',
    expressions: [
      'The Burning Dream',
      'Hallucination',
      'Shapeshifting',
      'the Shell Game',
      'Telekinesis'
    ],
    paths: ['belief'],
    founts: ['elementalism']
  },
  pathfinding: {
    name: 'Pathfinding',
    expressions: [
      'Curses',
      'Lagged Curses',
      'Multitasking',
      'Nightmare Exile',
      'Null Tolerance (required)',
      'Precognition'
    ],
    paths: ['geometry'],
    founts: ['glory']
  },
  analysis: {
    name: 'Analysis',
    expressions: [
      'Curses',
      'Lagged Curses',
      'Mnemosurgery',
      'Mystic Servitors (required)',
      'Personae',
      'the Shell Game',
      'the Uncountable Spinners'
    ],
    paths: ['geometry'],
    founts: ['oneiromancy']
  },
  callingsun: {
    name: 'Calling the Sun',
    expressions: [
      'Deconjuration',
      'Dreamshaping',
      'Hallucination',
      'Multitasking',
      'Nightmare Exile',
      'Soul-work'
    ],
    paths: ['artistry'],
    founts: ['glory']
  },
  oldway: {
    name: 'The Old Way',
    expressions: [
      'Cloning',
      'Expanded Expertise (Satori)',
      'Guising',
      'Nature-work',
      'Tailored Canon',
      'Transmutation'
    ],
    paths: ['reagents'],
    founts: ['earthpower']
  },
  truewiz: {
    name: 'True Wizardry',
    expressions: [
      'Curses',
      'Expanded Expertise (Prodigy)',
      'the Red Space',
      'Shapeshifting',
      'Travel',
      'Universal Repositories'
    ],
    paths: ['language'],
    founts: ['alchemy']
  },
  practice: {
    name: 'The Practice',
    expressions: [
      'Cloning',
      'Curses',
      'Expanded Expertise (Archetypal or Polymath)',
      'Hypnopraxis',
      'Multitasking',
      'Null Tolerance',
      'Psychometry',
      'Soul-work',
      'the Uncountable Spinners'
    ],
    paths: ['language'],
    founts: ['necromancy']
  },
  rage: {
    name: 'The Rage',
    expressions: [
      'the Burning Dream',
      'Curses',
      'Deconjuration',
      'Hallucination',
      'Nightmare Exile',
      'the Ten Crore Stones',
      'Weather-work'
    ],
    paths: ['belief'],
    founts: ['necromancy']
  },
  transubstantiation: {
    name: 'Transubstantiation',
    expressions: [
      'Dreamshaping',
      'Expanded Expertise (Satori)',
      'Hallucination',
      'Hypnopraxis',
      'the Red Space',
      'Transmutation'
    ],
    paths: ['reagents'],
    founts: ['oneiromancy']
  },
  drudgery: {
    name: 'Drudgery',
    expressions: [
      'Conjuration',
      'Multitasking',
      'Mystical Servitors',
      'Nature-work',
      'Tailored Canon',
      'Telekinesis',
      'Transmutation',
      'Weather-work'
    ],
    paths: ['discipline (physical)'],
    founts: ['elementalism']
  },
  sacredgeom: {
    name: 'Sacred Geometry',
    expressions: [
      'Enhanced Expertise (Satori)',
      'Mana Storage',
      'Psychometry',
      'the Red Space',
      'Tekinesis',
      'Travel',
      'Universal Repositories',
      'Warding'
    ],
    paths: ['geometry'],
    founts: ['alchemy']
  },
  highertalent: {
    name: 'The Higher Talent',
    expressions: [
      'Conjuration',
      'Dream Travel',
      'Dreamshaping',
      'Hypnopraxis',
      'Shapeshifting',
      'Spirit-Walking'
    ],
    paths: ['artistry'],
    founts: ['oneiromancy']
  },
  madpower: {
    name: 'The Mad Power',
    expressions: [
      'Curses',
      'Energy Waves',
      'Mystical Servitors',
      'Nightmare Exile',
      'Shapeshifting',
      'the Ten Crore Stones '
    ],
    paths: ['wild magic'],
    founts: ['glory']
  },
  calling: {
    name: 'The Calling',
    expressions: [
      'Conjuration',
      'Healing',
      'Mana Storage',
      'Spirit-Walking',
      'Travel',
      'Warding'
    ],
    paths: ['belief'],
    founts: ['glory']
  },
  auraofheaven: {
    name: 'The Aura of Heaven',
    expressions: [
      'Null Tolerance',
      'Psychometry',
      'Shapeshifting',
      'Soul-work',
      'Telekinesis',
      'Universal Repositories '
    ],
    paths: ['patrons'],
    founts: ['arete']
  },
  whatbindsus: {
    name: 'What Binds Us',
    expressions: [
      'Cloning',
      'Conjuration',
      'Healing',
      'Multitasking',
      'Nature-work',
      'Warding',
      'Weather-work'
    ],
    paths: ['blood magic'],
    founts: ['earthpower']
  },
  whatdefinesus: {
    name: 'What Defines Us',
    expressions: [
      'Hypnopraxis',
      'Nightmare Exile',
      'Personae',
      'Shapeshifting',
      'Spirit-walking',
      'Travel'
    ],
    paths: ['beliefs'],
    founts: ['arete']
  },
  devilpower: {
    name: 'Devilpower',
    expressions: [
      'Conjuration',
      'Curses',
      'Lagged Curses',
      'Multitasking',
      'Mystic Servitors',
      'the Shell Game',
      'Telekinesis'
    ],
    paths: ['patrons'],
    founts: ['glory']
  },
  sagepath: {
    name: "The Sage's Path",
    expressions: [
      'Conjuration',
      'Hallucination',
      'Mana Storage',
      'Psychometry',
      'the Red Space',
      'Travel'
    ],
    paths: ['geometry'],
    founts: ['glory']
  },
  silentpath: {
    name: 'The Silent Path',
    expressions: [
      'Dream Travel',
      'Healing',
      'Mystic Servitors',
      'Personae',
      'Psychometry',
      'Spirit-Walking '
    ],
    paths: ['reagents'],
    founts: ['necromancy']
  },
  starlitway: {
    name: 'The Starlit Way',
    expressions: [
      'Healing',
      'Precognition',
      'Psychometry',
      'Spirit-Walking',
      'Transmutation',
      'Universal Repositories'
    ],
    paths: ['reagents'],
    founts: ['alchemy']
  },
  homebuilders: {
    name: "The Home-Builder's Art",
    expressions: [
      'Conjuration',
      'Deconjuration',
      'Null Tolerance',
      'Shapeshifting',
      'Telekinesis',
      'Warding'
    ],
    paths: ['geometry'],
    founts: ['elementalism']
  },
  keyoffreedom: {
    name: 'The Key of Freedom',
    expressions: [
      'Conjuration',
      'Energy Waves',
      'Expanded Expertise (Archetypal)',
      'Healing',
      'Shapeshifting',
      'Weather-working'
    ],
    paths: ['wild magic'],
    founts: ['earthpower']
  },
  keyofcourage: {
    name: 'The Key of Courage',
    expressions: [
      'Curses',
      'Dream Travel',
      'Dreamshaping',
      'Travel',
      'Warding'
    ],
    paths: ['belief'],
    founts: ['glory']
  },
  parelthonia: {
    name: 'Parelthonia',
    expressions: [
      'Conjuration',
      'Dream Travel',
      'Precognition',
      'The Uncountable Spinners',
      'the Ten Crore Stones',
      'Travel'
    ],
    paths: ['artistry', 'geometry'],
    founts: ['necromancy']
  },
  symmachis: {
    name: 'Symmachis',
    expressions: [
      'Curses',
      'Healing',
      'Multitasking',
      'Shapeshifting',
      'Weather-working '
    ],
    paths: ['patrons'],
    founts: ['elementalism']
  }
};

const natures = ['Communion', 'Industry', 'Mystery', 'Self', 'Trickery', 'War'];

$(document).ready(function() {
  let charstats = {
    civ: [],
    society: [],
    traditions: []
  };

  // Tradition and Nature HTML definition
  // n is for the nth block, the title is the tradition's keyname
  function tradBlock(n, title) {
    // container div
    let d = $('<div>');
    d.attr('id', 'trad' + n);

    // title
    let t = $('<div>');
    t.attr({ id: 'trad' + n + 'name' });
    t.text(trads[title].name);
    t.addClass('tradition-title');
    d.append(t);

    // nature block
    let nb = $('<div>');
    nb.addClass('nature-scores');

    nb.append('<div></div>');
    nb.append('<div style="padding-left: 0.5em;">Score</div>');
    nb.append('<div style="padding-left: 0.5em;">Aspect</div>');

    // rows for individual natures
    natures.forEach(function(e) {
      elow = e.toLowerCase();

      let label = $('<label>');
      label.attr('for', elow);
      label.text(e + '-nature');

      let natureval = $('<input>');
      natureval.attr({ id: elow, type: 'number', name: elow });

      let aspect = $('<input>');
      aspect.attr({
        id: elow + '-aspect',
        type: 'text',
        name: elow + '-aspect'
      });

      nb.append(label);
      nb.append(natureval);
      nb.append(aspect);
    });

    d.append(nb);

    return d;
  }

  function addNatureBlock(t) {
    console.log(t);
    let n = $('.nature-scores').length;
    $('#allnatures').append(tradBlock(n, t));
  }

  // Add a checkbox for each tradition you have available.
  function addTradSelector(t) {
    let tp = $('#tradpicker');

    let sel = $('<div>');
    sel.addClass('tradition-selector');

    let cb = $('<input>');
    cb.attr({ type: 'checkbox', id: 'trad' + t, value: t });

    let label = $('<label>');
    label.attr({ for: 'trad' + t });
    label.text(trads[t].name);

    sel.append(cb);
    sel.append(label);

    tp.append(sel);

    cb.on('click tap', function(e) {
      addNatureBlock(e.target.value);
    });
  }

  // Civilization selector
  $('#civselector').on('input', function(e) {
    charstats.civ[0] = e.target.value;
    // Update character sheet and civ checkbox
    civs[e.target.value].traditions.forEach(function(t) {
      console.log(t);
      charstats.traditions.push(t);
      addTradSelector(t);
    });
  });

  // Society selector
  $('#society').on('input', function(e) {
    charstats.society[0] = e.target.value;
    // Update character sheet and civ checkbox
    societies[e.target.value].traditions.forEach(function(t) {
      charstats.traditions.push(t);
      addTradSelector(t);
    });
  });

  // Second Civilization toggle

  // Second Society toggle

  // Fill values based on Civ and Society.

  // Add build-your-own traditions
  $('#addtrad').on('click tap', function(e) {
    e.preventDefault();
    console.log('adding tradition');
  });

  // If you have no magical tradition...
  $('#nomag').on('input', function(e) {
    addTradSelector('nomag');
  });

  // Toggle optional elements
  $('#showoptional').on('click tap', function(e) {
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
