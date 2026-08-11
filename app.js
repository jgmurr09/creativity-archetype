const app = document.querySelector("#app");
const liveRegion = document.querySelector("#liveRegion");
const brandButton = document.querySelector("#brandButton");

const COLORS = ["#80d7bd", "#ffcb66", "#8c63d8", "#ef8e77", "#71b8dc", "#b8dc8a"];

const portraitStyles = {
  empathizer: {
    skin: "#8a563c",
    hair: "#25130f",
    shirt: "#ef8e77",
    accent: "#1282ca",
    hairStyle: "curls",
    glasses: false,
    badge: "heart",
  },
  researcher: {
    skin: "#efc29f",
    hair: "#73402d",
    shirt: "#80d7bd",
    accent: "#ffcb66",
    hairStyle: "short",
    glasses: true,
    badge: "lens",
  },
  synthesizer: {
    skin: "#b9724d",
    hair: "#2b1d19",
    shirt: "#8c63d8",
    accent: "#80d7bd",
    hairStyle: "waves",
    glasses: false,
    badge: "nodes",
  },
  ideaGenerator: {
    skin: "#704529",
    hair: "#171313",
    shirt: "#ffcb66",
    accent: "#1282ca",
    hairStyle: "high",
    glasses: false,
    badge: "spark",
  },
  prototyper: {
    skin: "#e2a476",
    hair: "#3d261e",
    shirt: "#ef8e77",
    accent: "#8c63d8",
    hairStyle: "crop",
    glasses: false,
    badge: "block",
  },
  artist: {
    skin: "#5e3a2b",
    hair: "#1e1512",
    shirt: "#71b8dc",
    accent: "#ffcb66",
    hairStyle: "bob",
    glasses: false,
    badge: "brush",
  },
  tester: {
    skin: "#f0cfb2",
    hair: "#4d352c",
    shirt: "#71b8dc",
    accent: "#ef8e77",
    hairStyle: "short",
    glasses: true,
    badge: "check",
  },
  facilitator: {
    skin: "#9b5e40",
    hair: "#241611",
    shirt: "#b8dc8a",
    accent: "#1282ca",
    hairStyle: "bun",
    glasses: false,
    badge: "speech",
  },
  leader: {
    skin: "#d89269",
    hair: "#592f25",
    shirt: "#ef8e77",
    accent: "#ffcb66",
    hairStyle: "side",
    glasses: false,
    badge: "arrow",
  },
  documenter: {
    skin: "#8a5945",
    hair: "#18120f",
    shirt: "#8c63d8",
    accent: "#80d7bd",
    hairStyle: "locs",
    glasses: true,
    badge: "page",
  },
};


const modeMeta = {
  explore: { label: "Explore", color: "#80d7bd" },
  interpret: { label: "Interpret", color: "#8c63d8" },
  imagine: { label: "Imagine", color: "#ffcb66" },
  make: { label: "Make", color: "#ef8e77" },
  validate: { label: "Validate", color: "#71b8dc" },
  align: { label: "Align", color: "#b8dc8a" },
};

const skillLabels = {
  collaboration: "Collaboration & Team Mindset",
  givingFeedback: "Giving Feedback",
  receivingFeedback: "Receiving Feedback",
  humbleHustle: "Humble Hustle",
  empathy: "Empathy",
  adaptability: "Adaptability & Flexibility",
  proactiveProblemSolving: "Proactive Problem Solving",
  resilience: "Resilience & Grit",
  clearCommunication: "Clear Communication",
  creativity: "Creativity & Resourcefulness",
  ambiguity: "Comfort with Ambiguity",
  ownership: "Ownership Mentality",
  socialAwareness: "Social Awareness",
};

const archetypes = {
  empathizer: {
    official: "The Empathizer",
    playful: "The Human Radar",
    glyph: "🫶",
    color: "#ffcb66",
    modes: ["explore", "align"],
    description:
      "You tune into people, context, and the needs that are easy to miss. You help teams remember that good work has to make sense in a human life, not only on a slide.",
    callWhen: [
      "The team has data but not yet a human story",
      "A stakeholder feels unheard or misunderstood",
      "A decision needs a grounded view of real needs",
    ],
    watchOut:
      "You may hold space for every perspective so carefully that choosing a direction takes longer than it needs to.",
    intro:
      "I help teams understand the people, context, and needs behind the work. Bring me in when the human story is unclear or a perspective is missing.",
    skills: ["empathy", "socialAwareness", "collaboration"],
  },
  researcher: {
    official: "The Researcher",
    playful: "The Evidence Hunter",
    glyph: "🔎",
    color: "#80d7bd",
    modes: ["explore", "validate"],
    description:
      "You build confidence through evidence. You ask what the team knows, how it knows it, and what still needs to be investigated before a claim becomes a decision.",
    callWhen: [
      "An assumption is being treated like a fact",
      "The team needs a trustworthy research path",
      "A complex domain needs to be understood quickly",
    ],
    watchOut:
      "You may keep gathering information after the team has enough evidence to take a responsible next step.",
    intro:
      "I help teams replace assumptions with useful evidence. Bring me in when we need to understand what is true, uncertain, or worth investigating next.",
    skills: ["proactiveProblemSolving", "ambiguity", "ownership"],
  },
  synthesizer: {
    official: "The Synthesizer",
    playful: "The Dot Connector",
    glyph: "🧩",
    color: "#8c63d8",
    modes: ["interpret", "explore"],
    description:
      "You turn scattered information into patterns, frames, and stories people can use. Where others see fragments, you start seeing the shape of the whole.",
    callWhen: [
      "Research feels fragmented or contradictory",
      "The team cannot explain what it has learned",
      "Multiple disciplines need a shared frame",
    ],
    watchOut:
      "You may keep refining the framework after the team has enough clarity to begin making something.",
    intro:
      "I help teams turn complicated information into patterns, stories, and decisions. Bring me in when the work feels fragmented or difficult to explain.",
    skills: ["clearCommunication", "ambiguity", "socialAwareness"],
  },
  ideaGenerator: {
    official: "The Idea Generator",
    playful: "The Possibility Machine",
    glyph: "💡",
    color: "#ffcb66",
    modes: ["imagine", "explore"],
    description:
      "You create movement by opening new doors. You reframe, connect unlikely ideas, and help the team escape the first answer that arrived wearing a business-casual outfit.",
    callWhen: [
      "Every option looks suspiciously familiar",
      "The team needs a fresh frame or future possibility",
      "Constraints are being treated as creative dead ends",
    ],
    watchOut:
      "You may generate more promising directions than the team has time, evidence, or emotional stamina to pursue.",
    intro:
      "I help teams see possibilities beyond the obvious answer. Bring me in when the work needs a new frame, an unexpected connection, or more imaginative range.",
    skills: ["creativity", "adaptability", "ambiguity"],
  },
  prototyper: {
    official: "The Prototyper",
    playful: "The Make-It-Real Person",
    glyph: "🛠️",
    color: "#ef8e77",
    modes: ["make", "imagine"],
    description:
      "You learn by making. You turn discussion into something visible, testable, and imperfect enough to teach the team what another meeting cannot.",
    callWhen: [
      "The team has talked long enough to qualify for a podcast",
      "An abstract idea needs a concrete form",
      "A small experiment can answer a big question",
    ],
    watchOut:
      "You may start building before the problem, audience, or intended learning has been made clear enough.",
    intro:
      "I help teams learn by making ideas tangible early. Bring me in when we need a draft, prototype, or experiment that creates real feedback.",
    skills: ["proactiveProblemSolving", "ownership", "adaptability"],
  },
  artist: {
    official: "The Artist",
    playful: "The Craft Alchemist",
    glyph: "🎨",
    color: "#71b8dc",
    modes: ["make", "imagine"],
    description:
      "You give ideas form, tone, and emotional presence. You notice when the concept technically exists but has not yet become clear, intentional, or memorable.",
    callWhen: [
      "The idea is correct but emotionally invisible",
      "A complex story needs a compelling visual form",
      "The final experience needs coherence and craft",
    ],
    watchOut:
      "You may invest in refinement before the team has validated whether the underlying direction deserves that level of care.",
    intro:
      "I help teams turn ideas into clear, intentional, and compelling experiences. Bring me in when the work needs craft, expression, or emotional resonance.",
    skills: ["creativity", "empathy", "clearCommunication"],
  },
  tester: {
    official: "The Tester",
    playful: "The Friendly Skeptic",
    glyph: "🧪",
    color: "#71b8dc",
    modes: ["validate", "interpret"],
    description:
      "You make ideas stronger by pressure-checking them. You notice assumptions, risks, edge cases, and the suspiciously quiet failure mode hiding in the corner.",
    callWhen: [
      "Everyone loves the idea a little too quickly",
      "A decision carries meaningful risk",
      "The team needs to learn what will break first",
    ],
    watchOut:
      "You may surface weaknesses so quickly that unfinished ideas do not get enough room to develop before being judged.",
    intro:
      "I help teams strengthen ideas by finding assumptions, risks, and edge cases early. Bring me in when a concept needs constructive pressure before it becomes expensive.",
    skills: ["givingFeedback", "proactiveProblemSolving", "ownership"],
  },
  facilitator: {
    official: "The Facilitator",
    playful: "The Room Conductor",
    glyph: "🎛️",
    color: "#b8dc8a",
    modes: ["align", "interpret"],
    description:
      "You pay attention to how the group is thinking together. You adjust the room, the process, and the conversation so useful participation becomes more likely.",
    callWhen: [
      "The room has more opinions than forward motion",
      "A difficult conversation needs structure",
      "The team needs genuine participation, not polite silence",
    ],
    watchOut:
      "You may prioritize shared agreement when the work actually needs productive tension or a firm decision.",
    intro:
      "I help groups think, disagree, and move forward together. Bring me in when the room needs structure, participation, or a clearer path to alignment.",
    skills: ["collaboration", "socialAwareness", "adaptability"],
  },
  leader: {
    official: "The Leader",
    playful: "The North Star",
    glyph: "🧭",
    color: "#ef8e77",
    modes: ["align", "make"],
    description:
      "You create direction and movement. You clarify what matters, make decisions when needed, and help the team turn good intentions into coordinated action.",
    callWhen: [
      "The team is circling the runway",
      "Priorities or ownership are unclear",
      "A decision needs a responsible owner and next step",
    ],
    watchOut:
      "You may create momentum before the team has explored enough uncertainty or heard from the people most affected.",
    intro:
      "I help teams establish direction, priorities, and momentum. Bring me in when we need to make a decision, clarify ownership, or move from discussion to action.",
    skills: ["ownership", "clearCommunication", "resilience"],
  },
  documenter: {
    official: "The Documenter",
    playful: "The Keeper of Receipts",
    glyph: "🗂️",
    color: "#8c63d8",
    modes: ["interpret", "validate"],
    description:
      "You create continuity. You preserve the decisions, rationale, language, and practical detail that keep good work from evaporating after the meeting ends.",
    callWhen: [
      "The project has important history but no shared memory",
      "A handoff needs to survive contact with reality",
      "Decisions and rationale need to remain traceable",
    ],
    watchOut:
      "You may capture everything with equal care instead of distinguishing what people will actually need later.",
    intro:
      "I help teams preserve decisions, rationale, and useful context. Bring me in when the work needs continuity, traceability, or a handoff people can actually use.",
    skills: ["clearCommunication", "humbleHustle", "ownership"],
  },
};


const growthSkillPrompts = {
  collaboration: "Invite a teammate into a decision earlier than usual.",
  givingFeedback: "Offer one specific observation, its impact, and one useful next step.",
  receivingFeedback: "Ask for one piece of feedback before the work feels finished.",
  humbleHustle: "Take ownership of one useful task that sits outside the spotlight.",
  empathy: "Pause to ask whose experience has not shaped the work yet.",
  adaptability: "Name what changed, what still holds, and what you will adjust.",
  proactiveProblemSolving: "Turn one recurring frustration into a small experiment.",
  resilience: "After a setback, capture the lesson and define the smallest next move.",
  clearCommunication: "Reduce one complex idea to a sentence and a simple visual.",
  creativity: "Generate three deliberately different options before refining one.",
  ambiguity: "State what is known, unknown, and safe to test next.",
  ownership: "Clarify the owner, deadline, and definition of done.",
  socialAwareness: "Notice who has not spoken and create a lower-risk way to contribute.",
};

const modeGrowthSkills = {
  explore: ["empathy", "socialAwareness", "receivingFeedback"],
  interpret: ["clearCommunication", "ambiguity", "receivingFeedback"],
  imagine: ["creativity", "adaptability", "resilience"],
  make: ["proactiveProblemSolving", "ownership", "humbleHustle"],
  validate: ["givingFeedback", "receivingFeedback", "resilience"],
  align: ["collaboration", "socialAwareness", "clearCommunication"],
};

const modeArchetypeOptions = {
  explore: ["empathizer", "researcher", "synthesizer", "ideaGenerator"],
  interpret: ["synthesizer", "documenter", "tester", "facilitator"],
  imagine: ["ideaGenerator", "artist", "prototyper"],
  make: ["prototyper", "artist", "leader"],
  validate: ["tester", "researcher", "documenter"],
  align: ["facilitator", "leader", "empathizer"],
};

const counterbalanceMap = {
  empathizer: ["tester", "leader", "documenter"],
  researcher: ["ideaGenerator", "prototyper", "facilitator"],
  synthesizer: ["prototyper", "tester", "leader"],
  ideaGenerator: ["tester", "documenter", "facilitator"],
  prototyper: ["researcher", "tester", "facilitator"],
  artist: ["researcher", "tester", "leader"],
  tester: ["ideaGenerator", "empathizer", "prototyper"],
  facilitator: ["leader", "tester", "ideaGenerator"],
  leader: ["empathizer", "researcher", "facilitator"],
  documenter: ["ideaGenerator", "leader", "artist"],
};

const questions = [
  {
    stem: "My attention goes first to...",
    kicker: "Attention",
    options: [
      {
        word: "People",
        symbol: "◉",
        archetype: "empathizer",
        secondary: "facilitator",
        skills: ["empathy", "socialAwareness"],
        color: "#ffcb66",
      },
      {
        word: "Patterns",
        symbol: "⌁",
        archetype: "synthesizer",
        secondary: "researcher",
        skills: ["ambiguity", "clearCommunication"],
        color: "#8c63d8",
      },
    ],
  },
  {
    stem: "I put more faith in...",
    kicker: "Belief",
    options: [
      {
        word: "Evidence",
        symbol: "⌕",
        archetype: "researcher",
        secondary: "tester",
        skills: ["proactiveProblemSolving", "ownership"],
        color: "#80d7bd",
      },
      {
        word: "Possibility",
        symbol: "✦",
        archetype: "ideaGenerator",
        secondary: "artist",
        skills: ["creativity", "ambiguity"],
        color: "#ffcb66",
      },
    ],
  },
  {
    stem: "My default practice is to...",
    kicker: "Practice",
    options: [
      {
        word: "Prototype",
        symbol: "▱",
        archetype: "prototyper",
        secondary: "leader",
        skills: ["proactiveProblemSolving", "adaptability"],
        color: "#ef8e77",
      },
      {
        word: "Refine",
        symbol: "✎",
        archetype: "artist",
        secondary: "documenter",
        skills: ["creativity", "clearCommunication"],
        color: "#71b8dc",
      },
    ],
  },
  {
    stem: "I help teams through...",
    kicker: "Contribution",
    options: [
      {
        word: "Challenge",
        symbol: "△",
        archetype: "tester",
        secondary: "researcher",
        skills: ["givingFeedback", "proactiveProblemSolving"],
        color: "#71b8dc",
      },
      {
        word: "Alignment",
        symbol: "◎",
        archetype: "facilitator",
        secondary: "empathizer",
        skills: ["collaboration", "socialAwareness"],
        color: "#b8dc8a",
      },
    ],
  },
  {
    stem: "Others rely on me for...",
    kicker: "Role",
    options: [
      {
        word: "Direction",
        symbol: "↗",
        archetype: "leader",
        secondary: "facilitator",
        skills: ["ownership", "clearCommunication"],
        color: "#ef8e77",
      },
      {
        word: "Continuity",
        symbol: "∞",
        archetype: "documenter",
        secondary: "synthesizer",
        skills: ["humbleHustle", "ownership"],
        color: "#8c63d8",
      },
    ],
  },
  {
    stem: "When something feels off, I...",
    kicker: "Instinct",
    options: [
      {
        word: "Listen",
        symbol: "◡",
        archetype: "empathizer",
        secondary: "synthesizer",
        skills: ["empathy", "receivingFeedback"],
        color: "#ffcb66",
      },
      {
        word: "Investigate",
        symbol: "⌖",
        archetype: "researcher",
        secondary: "tester",
        skills: ["proactiveProblemSolving", "ambiguity"],
        color: "#80d7bd",
      },
    ],
  },
  {
    stem: "Momentum begins with…",
    kicker: "Energy",
    options: [
      {
        word: "Imagination",
        symbol: "☄",
        archetype: "ideaGenerator",
        secondary: "artist",
        skills: ["creativity", "adaptability"],
        color: "#ffcb66",
      },
      {
        word: "Action",
        symbol: "▶",
        archetype: "prototyper",
        secondary: "leader",
        skills: ["ownership", "humbleHustle"],
        color: "#ef8e77",
      },
    ],
  },
  {
    stem: "Clarity comes from…",
    kicker: "Sensemaking",
    options: [
      {
        word: "Framing",
        symbol: "▣",
        archetype: "synthesizer",
        secondary: "ideaGenerator",
        skills: ["clearCommunication", "ambiguity"],
        color: "#8c63d8",
      },
      {
        word: "Recording",
        symbol: "≡",
        archetype: "documenter",
        secondary: "empathizer",
        skills: ["clearCommunication", "ownership"],
        color: "#80d7bd",
      },
    ],
  },
  {
    stem: "I care most about…",
    kicker: "Standard",
    options: [
      {
        word: "Meaning",
        symbol: "♡",
        archetype: "artist",
        secondary: "ideaGenerator",
        skills: ["empathy", "creativity"],
        color: "#71b8dc",
      },
      {
        word: "Rigor",
        symbol: "✓",
        archetype: "tester",
        secondary: "documenter",
        skills: ["givingFeedback", "resilience"],
        color: "#80d7bd",
      },
    ],
  },
  {
    stem: "Under pressure, I...",
    kicker: "Pressure",
    options: [
      {
        word: "Adapt",
        symbol: "↝",
        archetype: "facilitator",
        secondary: "prototyper",
        skills: ["adaptability", "socialAwareness"],
        color: "#b8dc8a",
      },
      {
        word: "Decide",
        symbol: "◆",
        archetype: "leader",
        secondary: "prototyper",
        skills: ["ownership", "resilience"],
        color: "#ef8e77",
      },
    ],
  },
];

const state = {
  screen: "intro",
  currentQuestion: 0,
  answers: [],
  result: null,
  selectedSkills: [],
  growthSkills: [],
  editingAnswers: false,
  name: "",
  introText: "",
};

brandButton.addEventListener("click", () => {
  if (state.screen === "intro") return;
  const shouldReset = window.confirm("Return to the beginning and clear this result?");
  if (shouldReset) resetAssessment();
});

document.addEventListener("keydown", (event) => {
  if (state.screen !== "quiz") return;
  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
    event.preventDefault();
    selectOption(0);
  }
  if (event.key === "ArrowRight" || event.key.toLowerCase() === "b") {
    event.preventDefault();
    selectOption(1);
  }
});

function announce(message) {
  liveRegion.textContent = "";
  window.setTimeout(() => {
    liveRegion.textContent = message;
  }, 40);
}

function render() {
  if (state.screen === "intro") renderIntro();
  if (state.screen === "quiz") renderQuiz();
  if (state.screen === "reveal") renderReveal();
  if (state.screen === "results") renderResults();
  app.focus({ preventScroll: true });
}

function renderIntro() {
  app.innerHTML = `
    <section class="screen intro-layout" aria-labelledby="introTitle">
      <div>
        <p class="eyebrow">A tiny quiz about your working instincts</p>
        <h1 class="hero-title" id="introTitle">How do you<br><span>show up?</span></h1>
        <p class="hero-copy">
          Choose between ten pairs to reveal the beliefs, tendencies, and practices you naturally bring to a team.
        </p>
        <div class="meta-row" aria-label="Assessment details">
          <span class="meta-pill">10 quick choices</span>
          <span class="meta-pill">About 60 to 90 seconds</span>
          <span class="meta-pill">No wrong answers</span>
        </div>
        <button class="primary-button" id="startButton" type="button">
          Show me my type <span aria-hidden="true">→</span>
        </button>
        <p class="intro-note">
          Pick what feels more like you most of the time. Do not choose what your title expects or what sounds most impressive. This is a reflection tool, not a personality diagnosis or performance rating.
        </p>
      </div>
      <div class="intro-art" aria-hidden="true">
        <div class="poster"><span class="doodle">🧩</span><span class="poster-word">Connect the dots</span></div>
        <div class="poster"><span class="doodle">🫶</span><span class="poster-word">Read the room</span></div>
        <div class="poster"><span class="doodle">🛠️</span><span class="poster-word">Make it real</span></div>
      </div>
    </section>
  `;
  document.querySelector("#startButton").addEventListener("click", startAssessment);
}

function startAssessment() {
  state.screen = "quiz";
  state.currentQuestion = 0;
  state.answers = [];
  state.result = null;
  state.selectedSkills = [];
  state.growthSkills = [];
  state.editingAnswers = false;
  state.introText = "";
  render();
  announce("Assessment started. Question 1 of 10.");
}

function renderQuiz() {
  const question = questions[state.currentQuestion];
  const number = state.currentQuestion + 1;
  const progress = (number / questions.length) * 100;
  const selectedIndex = state.answers[state.currentQuestion];
  const timeText = state.editingAnswers
    ? "Reviewing your answers"
    : number <= 3
      ? "About a minute left"
      : number <= 7
        ? "Less than a minute left"
        : number === 10
          ? "Final choice"
          : "Almost there";

  app.innerHTML = `
    <section class="screen quiz-card" aria-labelledby="questionTitle">
      <div class="quiz-topline">
        <span>Choice ${number} of ${questions.length}</span>
        <span>${timeText}</span>
      </div>
      <div class="progress-track" aria-label="Assessment progress">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      ${
        state.editingAnswers
          ? '<div class="edit-banner"><strong>Edit mode:</strong> Your current answer is highlighted. Change it or continue to the next choice.</div>'
          : ""
      }
      <p class="question-kicker">${question.kicker}</p>
      <h2 class="question-title" id="questionTitle">${question.stem}</h2>
      <p class="question-help">Go with the option that feels more automatic, especially when nobody assigns you the role.</p>
      <div class="choice-grid">
        ${question.options
          .map(
            (option, index) => `
          <button
            class="choice-card ${selectedIndex === index ? "is-selected" : ""}"
            type="button"
            data-option-index="${index}"
            style="--choice-color: ${option.color}; --tilt: ${index === 0 ? "-0.4deg" : "0.4deg"}"
            aria-label="Choose ${option.word}"
            aria-pressed="${selectedIndex === index}"
          >
            <span class="choice-shortcut" aria-hidden="true">${index === 0 ? "A" : "B"}</span>
            <span class="choice-symbol" aria-hidden="true">${option.symbol}</span>
            <span class="choice-word">${option.word}</span>
            ${selectedIndex === index ? '<span class="choice-selected-label">Your choice</span>' : ""}
          </button>
        `,
          )
          .join("")}
      </div>
      <div class="quiz-actions">
        <div class="quiz-nav">
          ${
            state.currentQuestion > 0
              ? '<button class="ghost-button" id="backButton" type="button">← Previous</button>'
              : ""
          }
          ${
            state.editingAnswers && selectedIndex !== undefined
              ? `<button class="secondary-button" id="nextButton" type="button">${
                  state.currentQuestion === questions.length - 1 ? "Update result" : "Next choice →"
                }</button>`
              : ""
          }
        </div>
        ${
          state.editingAnswers
            ? '<button class="ghost-button" id="saveAndReturnButton" type="button">Save and return to results</button>'
            : '<p class="microcopy">Use ← / → or A / B</p>'
        }
      </div>
    </section>
  `;

  document.querySelectorAll("[data-option-index]").forEach((button) => {
    button.addEventListener("click", () => selectOption(Number(button.dataset.optionIndex)));
  });

  const backButton = document.querySelector("#backButton");
  if (backButton) backButton.addEventListener("click", previousQuestion);

  const nextButton = document.querySelector("#nextButton");
  if (nextButton) nextButton.addEventListener("click", nextQuestion);

  const saveAndReturnButton = document.querySelector("#saveAndReturnButton");
  if (saveAndReturnButton) saveAndReturnButton.addEventListener("click", finishEditingAnswers);
}

function selectOption(optionIndex) {
  if (state.screen !== "quiz") return;
  state.answers[state.currentQuestion] = optionIndex;

  if (state.editingAnswers) {
    render();
    announce(`${questions[state.currentQuestion].options[optionIndex].word} selected.`);
    return;
  }

  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion += 1;
    render();
    announce(`Question ${state.currentQuestion + 1} of ${questions.length}.`);
    return;
  }

  state.result = calculateResult();
  state.selectedSkills = [...state.result.suggestedSkills];
  state.growthSkills = getSuggestedGrowthSkills(state.result, state.selectedSkills);
  state.introText = state.result.primary.intro;
  state.screen = "reveal";
  render();
  announce("All choices complete. Calculating your result.");

  window.setTimeout(() => {
    if (state.screen !== "reveal") return;
    state.screen = "results";
    render();
    announce(`Your strongest signal is ${state.result.primary.playful}.`);
  }, 1350);
}

function previousQuestion() {
  if (state.currentQuestion === 0) return;
  state.currentQuestion -= 1;
  render();
  announce(`Returned to question ${state.currentQuestion + 1}.`);
}

function nextQuestion() {
  if (state.answers[state.currentQuestion] === undefined) {
    announce("Choose an option before continuing.");
    return;
  }

  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion += 1;
    render();
    announce(`Question ${state.currentQuestion + 1} of ${questions.length}.`);
    return;
  }

  finishEditingAnswers();
}

function editAnswers() {
  state.editingAnswers = true;
  state.screen = "quiz";
  state.currentQuestion = 0;
  render();
  announce("Reviewing your answers. Your current choice is highlighted.");
}

function finishEditingAnswers() {
  const previousSuggestions = state.result?.suggestedSkills || [];
  const wasUsingSuggestions = arraysHaveSameItems(state.selectedSkills, previousSuggestions);

  state.result = calculateResult();

  if (wasUsingSuggestions || state.selectedSkills.length === 0) {
    state.selectedSkills = [...state.result.suggestedSkills];
  }

  state.growthSkills = getSuggestedGrowthSkills(state.result, state.selectedSkills);
  state.introText = state.result.primary.intro;
  state.editingAnswers = false;
  state.screen = "results";
  render();
  announce("Your updated result is ready.");
}

function calculateResult() {
  const archetypeScores = Object.fromEntries(Object.keys(archetypes).map((key) => [key, 0]));
  const modeScores = Object.fromEntries(Object.keys(modeMeta).map((key) => [key, 0]));
  const skillScores = Object.fromEntries(Object.keys(skillLabels).map((key) => [key, 0]));

  state.answers.forEach((selectedIndex, questionIndex) => {
    const option = questions[questionIndex].options[selectedIndex];
    archetypeScores[option.archetype] += 3;
    archetypeScores[option.secondary] += 1;

    const primaryArchetype = archetypes[option.archetype];
    const secondaryArchetype = archetypes[option.secondary];
    modeScores[primaryArchetype.modes[0]] += 2;
    modeScores[primaryArchetype.modes[1]] += 1;
    modeScores[secondaryArchetype.modes[0]] += 0.6;
    modeScores[secondaryArchetype.modes[1]] += 0.3;

    option.skills.forEach((skill, index) => {
      skillScores[skill] += index === 0 ? 2 : 1;
    });
  });

  const rankedArchetypes = Object.entries(archetypeScores).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    const aModeFit = archetypes[a[0]].modes.reduce((sum, mode) => sum + modeScores[mode], 0);
    const bModeFit = archetypes[b[0]].modes.reduce((sum, mode) => sum + modeScores[mode], 0);
    return bModeFit - aModeFit;
  });

  const maxModeScore = Math.max(...Object.values(modeScores));
  const normalizedModes = Object.fromEntries(
    Object.entries(modeScores).map(([mode, score]) => [mode, Math.max(18, Math.round((score / maxModeScore) * 100))]),
  );

  const rankedSkills = Object.entries(skillScores).sort((a, b) => b[1] - a[1]);
  const suggestedSkills = rankedSkills.slice(0, 3).map(([skill]) => skill);

  const [first, second, third] = rankedArchetypes;
  return {
    archetypeScores,
    skillScores,
    modeScores: normalizedModes,
    primaryKey: first[0],
    primary: archetypes[first[0]],
    supportingKeys: [second[0], third[0]],
    supporting: [archetypes[second[0]], archetypes[third[0]]],
    isBlend: first[1] - second[1] <= 1,
    suggestedSkills,
    stretchMode: Object.entries(normalizedModes).sort((a, b) => a[1] - b[1])[0][0],
  };
}

function arraysHaveSameItems(first = [], second = []) {
  if (first.length !== second.length) return false;
  const a = [...first].sort();
  const b = [...second].sort();
  return a.every((item, index) => item === b[index]);
}

function getSuggestedGrowthSkills(result, excludedSkills = []) {
  const excluded = new Set(excludedSkills);
  const rankedLowSignals = Object.entries(result.skillScores || {})
    .sort((a, b) => a[1] - b[1])
    .map(([skill]) => skill);

  const candidates = [
    ...(modeGrowthSkills[result.stretchMode] || []),
    ...rankedLowSignals,
    ...Object.keys(skillLabels),
  ];

  const suggestions = [];
  candidates.forEach((skill) => {
    if (suggestions.length >= 2) return;
    if (!suggestions.includes(skill) && !excluded.has(skill)) suggestions.push(skill);
  });

  if (suggestions.length < 2) {
    candidates.forEach((skill) => {
      if (suggestions.length >= 2) return;
      if (!suggestions.includes(skill)) suggestions.push(skill);
    });
  }

  return suggestions;
}

function getBalancedCrew(result) {
  const chosen = new Set([result.primaryKey]);
  const crew = [
    {
      key: result.primaryKey,
      label: "Your natural anchor",
      reason: `${result.primary.playful} brings ${result.primary.modes.map((mode) => modeMeta[mode].label).join(" and ")} energy to the crew.`,
    },
  ];

  const pickFirstAvailable = (candidates) => candidates.find((key) => !chosen.has(key));

  const stretchKey = pickFirstAvailable(modeArchetypeOptions[result.stretchMode] || []);
  if (stretchKey) {
    chosen.add(stretchKey);
    crew.push({
      key: stretchKey,
      label: `Activate more ${modeMeta[result.stretchMode].label}`,
      reason: `${archetypes[stretchKey].playful} adds energy in your lightest contribution mode and helps the team avoid leaning only on your default style.`,
    });
  }

  const counterKey = pickFirstAvailable(counterbalanceMap[result.primaryKey] || []);
  if (counterKey) {
    chosen.add(counterKey);
    crew.push({
      key: counterKey,
      label: "Create a productive counterweight",
      reason: `${archetypes[counterKey].playful} introduces a different instinct that can question, focus, or ground the direction without canceling your strengths.`,
    });
  }

  const coveredModes = new Set();
  chosen.forEach((key) => archetypes[key].modes.forEach((mode) => coveredModes.add(mode)));

  const finalKey = Object.keys(archetypes)
    .filter((key) => !chosen.has(key))
    .sort((a, b) => {
      const aNew = archetypes[a].modes.filter((mode) => !coveredModes.has(mode)).length;
      const bNew = archetypes[b].modes.filter((mode) => !coveredModes.has(mode)).length;
      if (bNew !== aNew) return bNew - aNew;
      const bridgePriority = ["facilitator", "synthesizer", "empathizer", "documenter"];
      return bridgePriority.indexOf(a) - bridgePriority.indexOf(b);
    })[0];

  if (finalKey) {
    crew.push({
      key: finalKey,
      label: "Round out the project cycle",
      reason: `${archetypes[finalKey].playful} adds ${archetypes[finalKey].modes.map((mode) => modeMeta[mode].label).join(" and ")} coverage so the crew can move from understanding to action with fewer blind spots.`,
    });
  }

  return crew;
}

function renderArchetypeLibrary(currentKey) {
  return Object.entries(archetypes)
    .map(
      ([key, item]) => `
        <details class="archetype-card ${key === currentKey ? "is-current" : ""}">
          <summary>
            <span class="archetype-swatch" style="--swatch-color:${item.color}" aria-hidden="true">${item.glyph}</span>
            <span class="archetype-summary-copy">
              <small>${stripLeadingThe(item.official)}</small>
              <strong>${item.playful}</strong>
            </span>
            <span class="archetype-expand" aria-hidden="true">+</span>
          </summary>
          <div class="archetype-detail">
            <p>${item.description}</p>
            <div class="mode-chip-row">
              ${item.modes.map((mode) => `<span class="mode-chip">${modeMeta[mode].label}</span>`).join("")}
            </div>
            <p><strong>Bring them in when:</strong> ${item.callWhen[0]}.</p>
          </div>
        </details>
      `,
    )
    .join("");
}

async function drawPortraitSvgToCanvas(ctx, key, x, y, width, height) {
  const svgMarkup = renderArchetypePortrait(key);
  const blob = new Blob([svgMarkup], {
    type: "image/svg+xml;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  try {
    const img = await new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });

    ctx.drawImage(img, x, y, width, height);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function renderReveal() {
  app.innerHTML = `
    <section class="screen reveal-card" aria-label="Calculating result">
      <div class="reveal-orbit" aria-hidden="true"><span>✦</span></div>
      <h2>Connecting your dots...</h2>
      <p>Calculating your preferred ratio of questions, craft, momentum, and constructive skepticism.</p>
    </section>
  `;
}


function stripLeadingThe(value) {
  return value.replace(/^The\s+/i, "");
}

function portraitHairSvg(style, hair) {
  const common = `fill="${hair}" stroke="#17151f" stroke-width="4" stroke-linejoin="round"`;
  if (style === "curls") {
    return `
      <g ${common}>
        <circle cx="110" cy="80" r="28"/>
        <circle cx="140" cy="61" r="32"/>
        <circle cx="174" cy="60" r="34"/>
        <circle cx="207" cy="75" r="29"/>
        <circle cx="94" cy="112" r="24"/>
        <circle cx="224" cy="111" r="24"/>
      </g>
    `;
  }
  if (style === "waves") {
    return `
      <path d="M96 126C88 71 112 42 160 39c48-3 76 29 67 89-17-16-34-22-51-20-20 3-42-3-61-20-3 15-9 27-19 38z" ${common}/>
      <path d="M99 114c-14 30-9 66 9 89M220 112c17 29 13 65-6 90" fill="none" stroke="${hair}" stroke-width="18" stroke-linecap="round"/>
    `;
  }
  if (style === "high") {
    return `
      <g ${common}>
        <ellipse cx="160" cy="56" rx="61" ry="43"/>
        <ellipse cx="126" cy="42" rx="30" ry="35"/>
        <ellipse cx="194" cy="41" rx="31" ry="36"/>
        <path d="M98 110c4-39 24-59 62-60 38 1 60 22 64 62-24-17-45-23-65-19-22 4-42-1-61-16z"/>
      </g>
    `;
  }
  if (style === "bob") {
    return `
      <path d="M91 125C88 64 112 39 160 38c49 1 74 27 70 88l-2 78h-28l-5-89c-21 9-46 9-70 0l-4 89H94z" ${common}/>
    `;
  }
  if (style === "bun") {
    return `
      <circle cx="202" cy="43" r="31" ${common}/>
      <path d="M96 126C91 69 114 42 160 40c46 2 70 30 65 87-21-18-43-25-66-20-21 4-42-2-63-18z" ${common}/>
    `;
  }
  if (style === "side") {
    return `
      <path d="M95 118C92 69 113 43 158 40c47-3 72 25 69 79-25-5-46-18-61-39-20 20-43 33-71 38z" ${common}/>
    `;
  }
  if (style === "locs") {
    return `
      <path d="M96 119C92 68 115 41 160 40c45 1 68 28 65 79-22-17-44-24-65-21-22 3-43-3-64-19z" ${common}/>
      <g fill="${hair}" stroke="#17151f" stroke-width="4">
        <rect x="90" y="98" width="22" height="117" rx="11"/>
        <rect x="112" y="82" width="22" height="137" rx="11"/>
        <rect x="186" y="83" width="22" height="136" rx="11"/>
        <rect x="208" y="99" width="22" height="116" rx="11"/>
      </g>
    `;
  }
  if (style === "crop") {
    return `<path d="M98 111C99 66 121 43 160 43s61 23 62 68c-24-13-45-18-63-14-21 4-41 0-61-13z" ${common}/>`;
  }
  return `<path d="M97 116C95 68 117 43 160 42c43 1 66 26 63 75-22-14-43-19-63-16-21 3-42-2-63-16z" ${common}/>`;
}

function portraitBadgeSvg(kind, accent) {
  const stroke = `stroke="#17151f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"`;
  let icon = "";
  if (kind === "heart") {
    icon = `<path d="M247 83c-16-17-39 5-18 27l18 17 18-17c21-22-2-44-18-27z" fill="${accent}" ${stroke}/>`;
  } else if (kind === "lens") {
    icon = `<circle cx="245" cy="99" r="18" fill="none" ${stroke}/><path d="M258 112l17 17" ${stroke}/>`;
  } else if (kind === "nodes") {
    icon = `<circle cx="229" cy="91" r="7" fill="${accent}" ${stroke}/><circle cx="267" cy="81" r="7" fill="${accent}" ${stroke}/><circle cx="260" cy="121" r="7" fill="${accent}" ${stroke}/><path d="M236 89l24-6M234 96l21 20M266 88l-4 26" fill="none" ${stroke}/>`;
  } else if (kind === "spark") {
    icon = `<path d="M249 72l7 19 19 7-19 7-7 19-7-19-19-7 19-7z" fill="${accent}" ${stroke}/>`;
  } else if (kind === "block") {
    icon = `<path d="M229 88l21-12 21 12-21 13zM229 88v25l21 13 21-13V88M250 101v25" fill="${accent}" ${stroke}/>`;
  } else if (kind === "brush") {
    icon = `<path d="M236 120l27-36" ${stroke}/><path d="M263 84l9-9 8 8-9 9z" fill="${accent}" ${stroke}/><path d="M236 120c-8 0-13 5-14 14 9 0 14-5 14-14z" fill="${accent}" ${stroke}/>`;
  } else if (kind === "check") {
    icon = `<path d="M229 102l13 13 29-34" fill="none" ${stroke}/>`;
  } else if (kind === "speech") {
    icon = `<path d="M225 80h50v34h-26l-14 13 3-13h-13z" fill="${accent}" ${stroke}/><circle cx="239" cy="97" r="2.5"/><circle cx="250" cy="97" r="2.5"/><circle cx="261" cy="97" r="2.5"/>`;
  } else if (kind === "arrow") {
    icon = `<path d="M228 119l43-43M247 76h24v24" fill="none" ${stroke}/>`;
  } else {
    icon = `<path d="M232 76h36v51h-36z" fill="${accent}" ${stroke}/><path d="M240 91h20M240 102h20M240 113h14" ${stroke}/>`;
  }
  return `
    <circle cx="250" cy="101" r="43" fill="rgba(255,255,255,0.76)" stroke="#17151f" stroke-width="4"/>
    ${icon}
  `;
}

function renderArchetypePortrait(key) {
  const style = portraitStyles[key] || portraitStyles.synthesizer;
  const glasses = style.glasses
    ? `
      <g fill="none" stroke="#17151f" stroke-width="4">
        <rect x="113" y="126" width="38" height="28" rx="11"/>
        <rect x="169" y="126" width="38" height="28" rx="11"/>
        <path d="M151 138h18"/>
      </g>
    `
    : "";
  return `
    <svg viewBox="0 0 320 360" focusable="false" aria-hidden="true">
      <defs>
        <linearGradient id="portraitGlow-${key}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.94"/>
          <stop offset="1" stop-color="${style.accent}" stop-opacity="0.22"/>
        </linearGradient>
      </defs>
      <path d="M25 340V159C25 76 82 19 160 19s135 57 135 140v181z" fill="url(#portraitGlow-${key})"/>
      <circle cx="63" cy="84" r="13" fill="${style.accent}" opacity="0.8"/>
      <circle cx="281" cy="167" r="9" fill="${style.shirt}" opacity="0.9"/>
      <path d="M54 350c10-76 48-112 106-112s96 36 106 112z" fill="${style.shirt}" stroke="#17151f" stroke-width="5"/>
      <path d="M132 236h56v48h-56z" fill="${style.skin}" stroke="#17151f" stroke-width="4"/>
      <circle cx="98" cy="147" r="18" fill="${style.skin}" stroke="#17151f" stroke-width="4"/>
      <circle cx="222" cy="147" r="18" fill="${style.skin}" stroke="#17151f" stroke-width="4"/>
      <rect x="100" y="70" width="120" height="164" rx="57" fill="${style.skin}" stroke="#17151f" stroke-width="5"/>
      ${portraitHairSvg(style.hairStyle, style.hair)}
      <circle cx="135" cy="140" r="6" fill="#17151f"/>
      <circle cx="185" cy="140" r="6" fill="#17151f"/>
      <circle cx="133" cy="137" r="2" fill="#ffffff"/>
      <circle cx="183" cy="137" r="2" fill="#ffffff"/>
      <path d="M160 145l-6 28h14" fill="none" stroke="#17151f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M143 190c11 11 23 11 34 0" fill="none" stroke="#17151f" stroke-width="5" stroke-linecap="round"/>
      ${glasses}
      ${portraitBadgeSvg(style.badge, style.accent)}
      <path d="M92 298c20-11 39-16 57-16M228 298c-20-11-39-16-57-16" fill="none" stroke="#17151f" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

function drawHumanPortrait(ctx, key, x, y, width, height) {
  const style = portraitStyles[key] || portraitStyles.synthesizer;
  ctx.save();
  ctx.translate(x, y);

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(255,255,255,0.96)");
  gradient.addColorStop(1, style.accent);
  ctx.fillStyle = gradient;
  roundedRect(ctx, 0, 0, width, height, 86);
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#17151f";
  ctx.stroke();

  ctx.fillStyle = style.shirt;
  ctx.beginPath();
  ctx.ellipse(width / 2, height * 0.9, width * 0.34, height * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = style.skin;
  ctx.fillRect(width * 0.43, height * 0.56, width * 0.14, height * 0.16);
  ctx.strokeRect(width * 0.43, height * 0.56, width * 0.14, height * 0.16);

  roundedRect(ctx, width * 0.31, height * 0.19, width * 0.38, height * 0.48, width * 0.17);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = style.hair;
  ctx.beginPath();
  ctx.ellipse(width / 2, height * 0.23, width * 0.21, height * 0.14, 0, Math.PI, Math.PI * 2);
  ctx.lineTo(width * 0.69, height * 0.34);
  ctx.quadraticCurveTo(width * 0.51, height * 0.22, width * 0.31, height * 0.34);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#17151f";
  ctx.beginPath();
  ctx.arc(width * 0.43, height * 0.42, 5, 0, Math.PI * 2);
  ctx.arc(width * 0.57, height * 0.42, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(width * 0.45, height * 0.56);
  ctx.quadraticCurveTo(width * 0.5, height * 0.6, width * 0.55, height * 0.56);
  ctx.stroke();

  ctx.fillStyle = style.accent;
  ctx.beginPath();
  ctx.arc(width * 0.78, height * 0.24, 34, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

function renderResults() {
  const result = state.result;
  const primary = result.primary;
  const supportNames = result.supporting.map((item) => stripLeadingThe(item.playful));
  const energyLine = result.isBlend
    ? `With strong ${supportNames[0]} energy`
    : `A clear ${stripLeadingThe(primary.official)} signal`;
  const balancedCrew = getBalancedCrew(result);

  app.innerHTML = `
    <section class="screen results-layout" aria-labelledby="resultTitle">
      <article class="result-hero" style="--archetype-color: ${primary.color}">
        <div>
          <p class="result-label">Your creativity archetype</p>
          <h1 class="result-title" id="resultTitle">${primary.playful}</h1>
          <p class="result-energy">${energyLine}</p>
          <p class="result-official">Best-fit team role: ${stripLeadingThe(primary.official)}</p>
          <p class="result-description">${primary.description}</p>
          <div class="supporting-row" aria-label="Supporting archetypes">
            ${result.supporting
              .map((item) => `<span class="chip">${stripLeadingThe(item.playful)}</span>`)
              .join("")}
          </div>
          <div class="result-actions compact">
            <button class="secondary-button" id="editAnswersButton" type="button">Edit my answers</button>
          </div>
        </div>
        <div class="result-portrait">
          ${renderArchetypePortrait(result.primaryKey)}
        </div>
      </article>

      <div class="result-grid">
        <article class="panel">
          <h3>Your contribution profile</h3>
          <div class="mode-list">
            ${Object.entries(result.modeScores)
              .sort((a, b) => b[1] - a[1])
              .map(
                ([mode, score]) => `
                <div class="mode-row">
                  <span class="mode-name">${modeMeta[mode].label}</span>
                  <div class="mode-track" aria-hidden="true">
                    <div class="mode-fill" style="width: ${score}%; --mode-color: ${modeMeta[mode].color}"></div>
                  </div>
                  <span class="mode-score">${score}</span>
                </div>
              `,
              )
              .join("")}
          </div>
          <p class="microcopy" style="margin-top:18px">These are relative signals from ten quick choices. They are not ability ratings.</p>
        </article>

        <article class="panel">
          <h3>Bring me in when</h3>
          <ul class="clean-list">
            ${primary.callWhen.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <div class="watchout" style="margin-top:22px">
            <strong>Watch-out:</strong> ${primary.watchOut}
          </div>
        </article>

        <article class="panel wide">
          <h3>A balanced crew around your style</h3>
          <p>
            Good team composition does not mean collecting four people who think alike. It means pairing your natural contribution with people who cover lighter modes, create useful tension, and help the work move across the full project cycle.
          </p>
          <div class="crew-grid">
            ${balancedCrew
              .map((member, index) => {
                const item = archetypes[member.key];
                return `
                  <article class="crew-card ${member.key === result.primaryKey ? "is-you" : ""}" style="--crew-color:${item.color}">
                    <span class="crew-number">${String(index + 1).padStart(2, "0")}</span>
                    <p class="crew-label">${member.label}</p>
                    <h4>${item.playful}</h4>
                    <p class="crew-role">${stripLeadingThe(item.official)}</p>
                    <div class="mode-chip-row">
                      ${item.modes.map((mode) => `<span class="mode-chip">${modeMeta[mode].label}</span>`).join("")}
                    </div>
                    <p>${member.reason}</p>
                  </article>
                `;
              })
              .join("")}
          </div>
          <p class="composition-note">Use this as a conversation starter when forming a team, not as a staffing rule or a claim that one person can only play one role.</p>
        </article>

        <article class="panel wide growth-panel">
          <h3>Choose two areas to grow</h3>
          <p>
            Your lighter signals are not weaknesses. Choose up to two power skills you want to practice more intentionally in your next project.
          </p>
          <div class="skill-picker" id="growthSkillPicker">
            ${Object.entries(skillLabels)
              .map(
                ([key, label]) => `
                <button
                  class="skill-toggle growth-toggle"
                  type="button"
                  data-growth-skill="${key}"
                  aria-pressed="${state.growthSkills.includes(key)}"
                >${label}</button>
              `,
              )
              .join("")}
          </div>
          <p class="skill-count" id="growthSkillCount">${state.growthSkills.length} of 2 selected</p>
          <div class="growth-practice-grid" id="growthPracticeGrid">
            ${renderGrowthPractices()}
          </div>
        </article>

        <article class="panel wide">
          <h3>What should teammates rely on you for?</h3>
          <p>
            We suggested three power skills from your choices. Keep them or select the three you most want to bring to the team.
          </p>
          <div class="skill-picker" id="skillPicker">
            ${Object.entries(skillLabels)
              .map(
                ([key, label]) => `
                <button
                  class="skill-toggle"
                  type="button"
                  data-skill="${key}"
                  aria-pressed="${state.selectedSkills.includes(key)}"
                >${label}</button>
              `,
              )
              .join("")}
          </div>
          <p class="skill-count" id="skillCount">${state.selectedSkills.length} of 3 selected</p>
        </article>

        <article class="panel wide">
          <h3>Explore all archetypes</h3>
          <p>
            Your result is a strongest signal, not a box. Open any archetype below to understand the other ways people may contribute and where each style can help a team.
          </p>
          <div class="archetype-library">
            ${renderArchetypeLibrary(result.primaryKey)}
          </div>
        </article>

        <article class="panel wide">
          <h3>Your team introduction</h3>
          <div class="profile-builder">
            <div class="field">
              <label for="nameInput">Name <span style="font-weight:500;color:var(--muted)">(optional)</span></label>
              <input id="nameInput" value="${escapeHtml(state.name)}" placeholder="Your name" autocomplete="name" />
            </div>
            <div class="field">
              <label for="introText">Edit this before sharing</label>
              <textarea id="introText">${escapeHtml(state.introText || primary.intro)}</textarea>
            </div>
          </div>
          <div class="result-actions">
            <button class="primary-button" id="copyButton" type="button">Copy introduction</button>
            <button class="secondary-button" id="downloadButton" type="button">Download result card</button>
            <button class="ghost-button" id="editAnswersBottomButton" type="button">Edit answers</button>
            <button class="ghost-button" id="retakeButton" type="button">Start over</button>
          </div>
        </article>

        <aside class="disclaimer panel wide">
          <strong>About this result:</strong> This lightweight reflection describes preferences and attention patterns. It should support conversation and onboarding. It should not be used for hiring, performance evaluation, promotion decisions, or permanent role assignment. Your less-selected modes are still valuable and can be developed or activated intentionally.
        </aside>
      </div>
    </section>
  `;

  bindResultInteractions();
}

function renderGrowthPractices() {
  if (!state.growthSkills.length) {
    return '<p class="growth-empty">Choose one or two skills to see a small practice you can try.</p>';
  }

  return state.growthSkills
    .map(
      (skill) => `
        <article class="growth-practice-card">
          <span>Practice</span>
          <h4>${skillLabels[skill]}</h4>
          <p>${growthSkillPrompts[skill]}</p>
        </article>
      `,
    )
    .join("");
}

function bindResultInteractions() {
  document.querySelectorAll("[data-skill]").forEach((button) => {
    button.addEventListener("click", () => {
      const skill = button.dataset.skill;
      const selected = state.selectedSkills.includes(skill);

      if (selected) {
        state.selectedSkills = state.selectedSkills.filter((item) => item !== skill);
      } else if (state.selectedSkills.length < 3) {
        state.selectedSkills.push(skill);
      } else {
        announce("Choose up to three power skills. Remove one before adding another.");
        return;
      }

      button.setAttribute("aria-pressed", String(!selected));
      document.querySelector("#skillCount").textContent = `${state.selectedSkills.length} of 3 selected`;
    });
  });

  document.querySelectorAll("[data-growth-skill]").forEach((button) => {
    button.addEventListener("click", () => {
      const skill = button.dataset.growthSkill;
      const selected = state.growthSkills.includes(skill);

      if (selected) {
        state.growthSkills = state.growthSkills.filter((item) => item !== skill);
      } else if (state.growthSkills.length < 2) {
        state.growthSkills.push(skill);
      } else {
        announce("Choose up to two growth skills. Remove one before adding another.");
        return;
      }

      button.setAttribute("aria-pressed", String(!selected));
      document.querySelector("#growthSkillCount").textContent = `${state.growthSkills.length} of 2 selected`;
      document.querySelector("#growthPracticeGrid").innerHTML = renderGrowthPractices();
    });
  });

  document.querySelector("#nameInput").addEventListener("input", (event) => {
    state.name = event.target.value;
  });

  document.querySelector("#introText").addEventListener("input", (event) => {
    state.introText = event.target.value;
  });

  document.querySelector("#copyButton").addEventListener("click", copyIntroduction);
  document.querySelector("#downloadButton").addEventListener("click", downloadResultCard);
  document.querySelector("#editAnswersButton").addEventListener("click", editAnswers);
  document.querySelector("#editAnswersBottomButton").addEventListener("click", editAnswers);
  document.querySelector("#retakeButton").addEventListener("click", resetAssessment);
}

async function copyIntroduction() {
  const text = (state.introText || document.querySelector("#introText").value).trim();
  const prefix = state.name.trim() ? `${state.name.trim()}: ` : "";
  try {
    await navigator.clipboard.writeText(prefix + text);
    announce("Team introduction copied.");
    const button = document.querySelector("#copyButton");
    const original = button.textContent;
    button.textContent = "Copied!";
    window.setTimeout(() => {
      button.textContent = original;
    }, 1400);
  } catch {
    window.prompt("Copy your introduction:", prefix + text);
  }
}

async function downloadResultCard() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 1200;

  const ctx = canvas.getContext("2d");
  const result = state.result;
  const primary = result.primary;
  const supportingType = stripLeadingThe(result.supporting[0].playful);
  const topModes = Object.entries(result.modeScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  const selectedLabels = state.selectedSkills
    .map((skill) => skillLabels[skill])
    .slice(0, 3);
  const shareLine = (state.introText || primary.intro).split(" Bring me in")[0];

  ctx.fillStyle = "#f7f3eb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const blueGlow = ctx.createRadialGradient(1100, 70, 10, 1100, 70, 430);
  blueGlow.addColorStop(0, "rgba(18, 130, 202, 0.22)");
  blueGlow.addColorStop(1, "rgba(18, 130, 202, 0)");
  ctx.fillStyle = blueGlow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.shadowColor = "rgba(23, 21, 31, 0.16)";
  ctx.shadowBlur = 32;
  ctx.shadowOffsetY = 14;
  roundedRect(ctx, 55, 55, 1090, 1090, 48);
  ctx.fillStyle = "#fffdf8";
  ctx.fill();
  ctx.restore();

  roundedRect(ctx, 55, 55, 1090, 1090, 48);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#17151f";
  ctx.stroke();

  // Header
  roundedRect(ctx, 98, 92, 48, 48, 8);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#17151f";
  ctx.stroke();
  ctx.fillStyle = "#17151f";
  ctx.font = "900 34px system-ui, sans-serif";
  ctx.fillText("T", 110, 129);
  ctx.font = "800 23px system-ui, sans-serif";
  ctx.fillText("TANG ONBOARDING", 164, 124);
  ctx.textAlign = "right";
  ctx.fillStyle = "#65616f";
  ctx.font = "700 21px system-ui, sans-serif";
  ctx.fillText("TANG ONBOARDING", 1098, 124);
  ctx.textAlign = "left";

  // Left content column. Nothing from the portrait is allowed into this zone.
  const leftX = 105;
  const leftWidth = 560;

  ctx.fillStyle = "#65616f";
  ctx.font = "800 19px system-ui, sans-serif";
  ctx.fillText("YOUR CREATIVITY ARCHETYPE", leftX, 218);

  ctx.fillStyle = "#17151f";
  ctx.font = fitCanvasFont(ctx, primary.playful, leftWidth, 82, 54, "Georgia, serif", 800);
  const titleBottom = wrapTextWithLimit(ctx, primary.playful, leftX, 308, leftWidth, 76, 2);

  const roleY = Math.max(430, titleBottom + 36);
  ctx.fillStyle = primary.color;
  roundedRect(ctx, leftX, roleY, 250, 50, 25);
  ctx.fill();
  ctx.fillStyle = "#17151f";
  ctx.font = "800 20px system-ui, sans-serif";
  ctx.fillText(stripLeadingThe(primary.official).toUpperCase(), leftX + 23, roleY + 33);

  ctx.fillStyle = "#17151f";
  ctx.font = "500 28px system-ui, sans-serif";
  const descriptionBottom = wrapTextWithLimit(ctx, shareLine, leftX, roleY + 112, leftWidth, 42, 4);

  const supportY = Math.max(735, descriptionBottom + 46);
  ctx.fillStyle = "#65616f";
  ctx.font = "800 18px system-ui, sans-serif";
  ctx.fillText("ALSO SHOWING", leftX, supportY);
  roundedRect(ctx, leftX, supportY + 25, 430, 56, 28);
  ctx.fillStyle = "#edf6fb";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#1282ca";
  ctx.stroke();
  ctx.fillStyle = "#17151f";
  ctx.font = "700 22px system-ui, sans-serif";
  ctx.fillText(`${supportingType} energy`, leftX + 25, supportY + 61);

  // Right art column. Use the same full portrait artwork as the live result screen.
  const artX = 735;
  const artY = 175;
  const artWidth = 360;
  const artHeight = 380;
  
  roundedRect(ctx, artX, artY, artWidth, artHeight, 54);
  const artGradient = ctx.createLinearGradient(artX, artY, artX, artY + artHeight);
  artGradient.addColorStop(0, "#fffaf0");
  artGradient.addColorStop(1, `${primary.color}77`);
  ctx.fillStyle = artGradient;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#17151f";
  ctx.stroke();
  
  ctx.save();
  roundedRect(ctx, artX + 12, artY + 12, artWidth - 24, artHeight - 24, 44);
  ctx.clip();
  await drawPortraitSvgToCanvas(
    ctx,
    result.primaryKey,
    artX + 18,
    artY + 14,
    artWidth - 36,
    artHeight - 28,
  );
  ctx.restore();

  // Modes are placed below the art with a fixed gap.
  ctx.fillStyle = "#65616f";
  ctx.font = "800 18px system-ui, sans-serif";
  ctx.fillText("TOP CONTRIBUTION MODES", artX, 600);

  topModes.forEach(([mode, score], index) => {
    const y = 646 + index * 78;
    ctx.fillStyle = "#17151f";
    ctx.font = "700 21px system-ui, sans-serif";
    ctx.fillText(modeMeta[mode].label, artX, y);

    roundedRect(ctx, artX, y + 18, artWidth, 18, 9);
    ctx.fillStyle = "#e8e4dc";
    ctx.fill();

    roundedRect(ctx, artX, y + 18, Math.max(42, artWidth * (score / 100)), 18, 9);
    ctx.fillStyle = modeMeta[mode].color;
    ctx.fill();
  });

  // Shared bottom zone
  ctx.strokeStyle = "rgba(23, 21, 31, 0.18)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(105, 885);
  ctx.lineTo(1095, 885);
  ctx.stroke();

  ctx.fillStyle = "#65616f";
  ctx.font = "800 18px system-ui, sans-serif";
  ctx.fillText("TEAMMATES CAN RELY ON", 105, 930);

  const skills = selectedLabels.length ? selectedLabels : ["Choose three power skills"];
  const gap = 20;
  const skillWidth = (990 - gap * (skills.length - 1)) / skills.length;

  skills.forEach((label, index) => {
    const x = 105 + index * (skillWidth + gap);
    drawSkillCard(ctx, label, x, 958, skillWidth, 108, index === 1 ? "#edf6fb" : "#f7f3eb");
  });

  ctx.fillStyle = "#65616f";
  ctx.font = "700 18px system-ui, sans-serif";
  const footerName = state.name.trim() ? state.name.trim().toUpperCase() : "SHARE YOUR TYPE";
  ctx.fillText(footerName, 105, 1105);
  ctx.textAlign = "right";
  ctx.fillText("REFLECTION, NOT EVALUATION", 1095, 1105);
  ctx.textAlign = "left";

  const link = document.createElement("a");
  const safeName =
    state.name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "my";

  link.download = `${safeName}-creativity-archetype.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  announce("Result card downloaded.");
}

function fitCanvasFont(
  ctx,
  text,
  maxWidth,
  startSize,
  minimumSize,
  family,
  weight = 700,
) {
  let size = startSize;

  while (size > minimumSize) {
    ctx.font = `${weight} ${size}px ${family}`;

    if (ctx.measureText(text).width <= maxWidth) {
      break;
    }

    size -= 2;
  }

  return `${weight} ${size}px ${family}`;
}

function drawSkillCard(ctx, label, x, y, width, height, fill) {
  roundedRect(ctx, x, y, width, height, 24);
  ctx.fillStyle = fill;
  ctx.fill();

  ctx.lineWidth = 3;
  ctx.strokeStyle = "#17151f";
  ctx.stroke();

  ctx.fillStyle = "#17151f";
  ctx.font = "700 21px system-ui, sans-serif";
  wrapText(ctx, label, x + 22, y + 44, width - 44, 28);
}

function wrapTextWithLimit(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });

  if (line) lines.push(line);

  const visible = lines.slice(0, maxLines);
  if (lines.length > maxLines) {
    let finalLine = visible[maxLines - 1];
    while (ctx.measureText(`${finalLine}…`).width > maxWidth && finalLine.includes(" ")) {
      finalLine = finalLine.slice(0, finalLine.lastIndexOf(" "));
    }
    visible[maxLines - 1] = `${finalLine}…`;
  }

  visible.forEach((lineText, index) => {
    ctx.fillText(lineText, x, y + index * lineHeight);
  });

  return y + (visible.length - 1) * lineHeight;
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line.trim(), x, currentY);
      line = `${word} `;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line.trim(), x, currentY);
}

function resetAssessment() {
  state.screen = "intro";
  state.currentQuestion = 0;
  state.answers = [];
  state.result = null;
  state.selectedSkills = [];
  state.growthSkills = [];
  state.editingAnswers = false;
  state.name = "";
  state.introText = "";
  render();
  announce("Assessment reset.");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
