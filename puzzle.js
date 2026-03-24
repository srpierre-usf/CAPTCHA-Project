// ── WORD BANK — government-themed 7-letter words ─────────────────────────────
// Each entry pairs a word with a short excerpt on its negative modern usage.
const WORD_DATA = [
  {
    word: 'COUNCIL',
    def:  'In modern politics, "council" is often used to create the illusion of collective decision-making while power remains concentrated among a select few. Unelected councils frequently operate without transparency, insulating officials from public accountability and becoming vehicles for bureaucratic entrenchment rather than genuine civic representation.'
  },
  {
    word: 'CABINET',
    def:  'Originally a body of senior advisers, the cabinet has increasingly become a tool for rewarding political loyalty over competence. Cabinet appointments are routinely used to consolidate executive power, sideline dissenting voices, and advance partisan agendas rather than serve the public interest.'
  },
  {
    word: 'KINGDOM',
    def:  'The concept of a kingdom is invoked in modern rhetoric to criticise leaders who govern as though authority is hereditary or divinely granted. Politicians who resist term limits, suppress opposition, or concentrate wealth within a ruling class are frequently accused of building a personal kingdom at the expense of democratic norms.'
  },
  {
    word: 'REGIME',
    def:  '"Regime" carries a strongly negative connotation in contemporary usage, typically applied to governments that maintain power through repression, propaganda, or electoral manipulation. The term signals a system prioritising its own survival over civil liberties, and is frequently associated with authoritarian rule and the erosion of checks and balances.'
  },
  {
    word: 'STATISM',
    def:  'Statism is criticised across the political spectrum for concentrating economic and social control in government hands at the expense of individual freedom. Critics argue that statist policies breed dependency, stifle innovation, and create bloated bureaucracies that serve institutional interests rather than the citizens they were designed to help.'
  },
  {
    word: 'MONARCH',
    def:  'While constitutional monarchies can be largely ceremonial, the figure of the monarch is routinely used to critique leaders who accumulate unchecked power. In modern discourse, calling someone a monarch or monarchist implies contempt for democratic accountability and a belief that authority flows from status or wealth rather than popular consent.'
  },
  {
    word: 'POLITY',
    def:  'Though "polity" simply denotes a political community, the term is deployed critically when that community\'s governing structures become captured by elite interests. A polity can be manipulated through gerrymandering, lobbying, or media control until its institutions no longer reflect the will of the majority, rendering democratic participation largely symbolic.'
  },
  {
    word: 'ELECTOR',
    def:  'The role of the elector has been undermined in modern democracies through voter suppression, disinformation campaigns, and systemic barriers to participation. When the electoral process is distorted by dark money, foreign interference, or deliberate disenfranchisement, the term "elector" becomes hollow — a formality rather than a meaningful expression of popular will.'
  },
  {
    word: 'DYNASTY',
    def:  'Political dynasties concentrate influence across generations, creating informal aristocracies within nominally democratic systems. Critics argue that dynastic politics entrenches privilege, limits diversity of leadership, and signals to citizens that public office is inherited rather than earned — corroding public trust and fuelling cynicism about whether elections genuinely change anything.'
  },
  {
    word: 'FEDERAL',
    def:  'Federal structures, intended to distribute power and protect regional autonomy, are increasingly exploited to obstruct progressive reform or entrench minority rule. Critics point to how federal systems can allow a small number of states or representatives to veto policies supported by the national majority, turning structural balance into gridlock and inequality.'
  },
  {
    word: 'JUSTICE',
    def:  '"Justice" as an institution has been weaponised in modern governance to prosecute political opponents, protect allies from accountability, and legitimise inequality under a veneer of legal process. When judicial appointments are openly partisan and enforcement is selectively applied, the term "justice" itself becomes a rhetorical shield for systemic injustice.'
  },
  // Additional government-themed 7-letter words
  {
    word: 'AMNESTY',
    def:  'Amnesty, while historically a tool for reconciliation, is increasingly granted selectively to shield politically connected individuals from consequences. When amnesties protect those in power while ordinary citizens face prosecution, the policy undermines the rule of law and signals that accountability is contingent on proximity to power rather than the nature of the offence.'
  },
  {
    word: 'CAPITAL',
    def:  'The seat of government — the capital — has come to symbolise a ruling class disconnected from the lived experience of ordinary citizens. In many nations, capital cities concentrate wealth, lobbying power, and media influence so thoroughly that policy-making serves metropolitan elites at the expense of regional populations who feel unheard and deliberately excluded.'
  },
  {
    word: 'CHARTER',
    def:  'Charters and mandates are frequently cited by governments to justify actions that exceed their original scope. What begins as a specific grant of authority is routinely stretched to cover surveillance, detention without trial, or the suppression of dissent — with the charter\'s original protective intent inverted to serve the very power it was meant to constrain.'
  },
  {
    word: 'MANDATE',
    def:  'Political mandates are routinely overstated by governments to justify sweeping action on issues never put to voters. A narrow electoral victory is recast as a broad public endorsement, allowing administrations to pursue ideologically extreme policies while claiming democratic authority — a manoeuvre critics describe as a fundamental misreading of consent.'
  },
  {
    word: 'MILITIA',
    def:  'In modern contexts, militias are frequently associated with vigilante violence, extremist ideology, and the erosion of the state\'s monopoly on legitimate force. When governments tolerate or covertly support irregular armed groups, they create parallel power structures that threaten civil order, target minority communities, and operate beyond any meaningful legal accountability.'
  },
  {
    word: 'SENATOR',
    def:  'The office of senator, designed to provide deliberative and experienced governance, has been degraded in modern politics by hyper-partisanship and the influence of donor money. Senators increasingly vote along party lines regardless of their constituents\' interests, rendering the institution a rubber stamp for party leadership rather than an independent check on executive power.'
  },
  {
    word: 'TACTICS',
    def:  'Political tactics have evolved into sophisticated mechanisms for manipulating public opinion rather than winning genuine support. From targeted disinformation and astroturfing to procedural obstruction and bad-faith negotiation, modern political tactics often prioritise short-term advantage over governance, eroding institutional trust and teaching citizens that politics is a performance rather than a public service.'
  },
  {
    word: 'TRIBUNE',
    def:  'Originally a protector of the common people against elite abuse, the tribune figure in modern politics is often a demagogue who channels popular grievance while consolidating personal power. Self-styled tribunes frequently attack institutions, undermine judicial independence, and suppress press freedom under the banner of fighting for "the people" — a rhetoric that masks authoritarian intent.'
  },
  {
    word: 'VERDICT',
    def:  'In politicised justice systems, verdicts reflect power rather than truth. High-profile political trials routinely produce outcomes determined by the defendant\'s connections, the government\'s interests, or public pressure rather than evidence. When verdicts are widely perceived as predetermined, the courtroom becomes a stage for legitimising persecution, and faith in impartial justice collapses entirely.'
  },
  {
    word: 'WARLORD',
    def:  'The warlord — a figure who controls territory through military force rather than legitimate authority — persists in fragile states where governance has collapsed. In modern contexts, warlords are often created or sustained by foreign powers pursuing strategic interests, turning local populations into collateral in geopolitical contests that have nothing to do with their welfare or self-determination.'
  }
];

// ── GRID CONSTANTS ────────────────────────────────────────────────────────────
const COLS  = 3;
const ROWS  = 3;
const TOTAL = 9;

// ── STATE ─────────────────────────────────────────────────────────────────────
let targetWord    = '';
let targetDef     = '';
let board         = []; // length 9 — 7 letter tiles + 2 nulls (empty slots)
let moves         = 0;
let selectedIdx   = null; // index of the currently selected tile, or null

// ── KEYBOARD MAP ──────────────────────────────────────────────────────────────
const KEY_MAP = {
  ArrowUp:    { dr: -1, dc:  0, kId: 'k-up'    },
  w:          { dr: -1, dc:  0, kId: 'k-w'      },
  W:          { dr: -1, dc:  0, kId: 'k-w'      },
  ArrowDown:  { dr: +1, dc:  0, kId: 'k-down'   },
  s:          { dr: +1, dc:  0, kId: 'k-s'       },
  S:          { dr: +1, dc:  0, kId: 'k-s'       },
  ArrowLeft:  { dr:  0, dc: -1, kId: 'k-left'   },
  a:          { dr:  0, dc: -1, kId: 'k-a'       },
  A:          { dr:  0, dc: -1, kId: 'k-a'       },
  ArrowRight: { dr:  0, dc: +1, kId: 'k-right'  },
  d:          { dr:  0, dc: +1, kId: 'k-d'       },
  D:          { dr:  0, dc: +1, kId: 'k-d'       },
};

// ── BUILD BOARD ───────────────────────────────────────────────────────────────
function buildBoard() {
  const entry   = WORD_DATA[Math.floor(Math.random() * WORD_DATA.length)];
  targetWord    = entry.word;
  targetDef     = entry.def;
  selectedIdx   = null;

  const tiles = [...targetWord];
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }

  board = [...tiles, null, null];
  moves = 0;
}

// ── SELECT A TILE ─────────────────────────────────────────────────────────────
function selectTile(idx) {
  selectedIdx = (selectedIdx === idx) ? null : idx;
  render();
}

// ── MOVE SELECTED TILE ────────────────────────────────────────────────────────
function moveSelected(dr, dc) {
  if (selectedIdx === null) return false;

  const sRow  = Math.floor(selectedIdx / COLS);
  const sCol  = selectedIdx % COLS;
  const dRow  = sRow + dr;
  const dCol  = sCol + dc;

  if (dRow < 0 || dRow >= ROWS || dCol < 0 || dCol >= COLS) return false;

  const destIdx = dRow * COLS + dCol;
  if (board[destIdx] !== null) return false;

  board[destIdx]     = board[selectedIdx];
  board[selectedIdx] = null;
  selectedIdx        = destIdx; // selection follows the tile
  moves++;
  render();
  return true;
}

// ── RENDER TARGET WORD ────────────────────────────────────────────────────────
function renderTarget() {
  document.getElementById('target-display').textContent = targetWord;
}

// ── RENDER BOARD ──────────────────────────────────────────────────────────────
function render() {
  const grid = document.getElementById('puzzle-grid');
  grid.innerHTML = '';

  // Update move counter
  const moveEl = document.getElementById('move-count');
  if (moveEl) moveEl.textContent = moves;

  board.forEach((letter, i) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');

    if (letter === null) {
      tile.classList.add('empty');

      // Highlight empty slots the selected tile can move into
      if (selectedIdx !== null) {
        const sRow = Math.floor(selectedIdx / COLS);
        const sCol = selectedIdx % COLS;
        const eRow = Math.floor(i / COLS);
        const eCol = i % COLS;
        if (Math.abs(sRow - eRow) + Math.abs(sCol - eCol) === 1) {
          tile.classList.add('empty-target');
        }
      }
    } else {
      tile.classList.add('letter');
      if (i === selectedIdx)          tile.classList.add('selected');
      if (letter === targetWord[i])   tile.classList.add('correct');
      tile.textContent = letter;
      tile.addEventListener('click', () => selectTile(i));
    }

    grid.appendChild(tile);
  });
}

// ── VERIFY ────────────────────────────────────────────────────────────────────
function verify() {
  const guess = board.slice(0, targetWord.length).join('');
  if (guess === targetWord) {
    document.getElementById('s-word').textContent = targetWord;
    document.getElementById('s-def').textContent  = targetDef;
    document.getElementById('success-overlay').classList.add('show');
  } else {
    const grid = document.getElementById('puzzle-grid');
    grid.classList.remove('shake');
    void grid.offsetWidth;
    grid.classList.add('shake');
  }
}

// ── CONTINUE BUTTON (inside success overlay) ──────────────────────────────────
document.getElementById('s-continue').addEventListener('click', () => {
  document.getElementById('success-overlay').classList.remove('show');
  init();
});

// ── KEY FLASH ─────────────────────────────────────────────────────────────────
function flashKey(kId) {
  const el = document.getElementById(kId);
  if (!el) return;
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 160);
}

// ── KEYBOARD HANDLER ──────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  const action = KEY_MAP[e.key];
  if (!action) return;
  if (e.key.startsWith('Arrow')) e.preventDefault();
  const moved = moveSelected(action.dr, action.dc);
  if (moved) flashKey(action.kId);
});

// ── INIT ──────────────────────────────────────────────────────────────────────
function init() {
  buildBoard();
  renderTarget();
  render();
}

document.getElementById('btn-reset').addEventListener('click', init);
document.getElementById('btn-verify').addEventListener('click', verify);

init();
