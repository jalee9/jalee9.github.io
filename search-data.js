// SEARCH DATA
// This file acts like a small searchable database for the site.
// Each object represents one page, post, project, or presentation.
//
// When you add a new item to the site that you want searchable,
// add a new object here.

const searchData = [
  {
    title: "What Artemis II Taught Me About Teaching",
    excerpt: "A reflection on what space missions can teach us about preparation, human judgment, and the quiet work of teaching.",
    tags: ["teaching", "reflection", "leadership", "blog"],
    url: "blog/artemis-teaching.html",
    type: "Blog Post"
  },
  {
    title: "Quiet Leadership in Everyday Work",
    excerpt: "Leadership is not always loud. Sometimes it looks like consistency, encouragement, and showing up for people in ordinary ways.",
    tags: ["leadership", "reflection", "human connection", "blog"],
    url: "blog/quiet-leadership.html",
    type: "Blog Post"
  },
  {
    title: "Why Human Connection Still Matters in Online Teaching",
    excerpt: "A reflection on visibility, presence, and the role of authentic instructor communication in digital spaces.",
    tags: ["online learning", "teaching", "human connection", "blog"],
    url: "blog/human-connection-online-teaching.html",
    type: "Blog Post"
  },
  {
    title: "Teaching with AI Without Losing the Human Part",
    excerpt: "Thoughts on using AI in practical, ethical, and student-centered ways in higher education.",
    tags: ["ai", "teaching", "reflection", "blog"],
    url: "blog/teaching-with-ai-human-part.html",
    type: "Blog Post"
  },
  {
    title: "Teaching with AI",
    excerpt: "An open repository of practical, human-centered resources for integrating AI into teaching, learning, and academic work.",
    tags: ["ai", "teaching", "open resources", "repository"],
    url: "https://github.com/jalee9/Teaching-with-AI",
    type: "Repository"
  },
  {
    title: "Eagle Flight Plan",
    excerpt: "A student planning agent designed to help learners think realistically about time, workload, and whether a class schedule truly fits their lives.",
    tags: ["student success", "ai", "agent", "planning"],
    url: "https://github.com/jalee9/Teaching-with-AI/tree/main/agents",
    type: "Tool"
  },
  {
    title: "Prompts, Workflows, and Templates",
    excerpt: "Reusable materials for feedback, course design, communication, instructional planning, and intentional AI-supported practice.",
    tags: ["prompts", "workflows", "templates", "ai", "teaching"],
    url: "https://github.com/jalee9/Teaching-with-AI/tree/main/prompts",
    type: "Resource"
  },
  {
    title: "From Access to Connection",
    excerpt: "Reimagining online learning by designing for connection, belonging, and meaningful student engagement.",
    tags: ["online learning", "connection", "speaking", "engagement"],
    url: "#speaking",
    type: "Presentation"
  },
  {
    title: "Human-Centered Learning in the Age of AI",
    excerpt: "Integrating AI into teaching while maintaining presence, care, and authentic student interaction.",
    tags: ["ai", "teaching", "speaking", "human-centered learning"],
    url: "#speaking",
    type: "Presentation"
  },
  {
    title: "Teaching with Humans in the Loop",
    excerpt: "Helping students use AI as a support tool while keeping human judgment and ownership at the center.",
    tags: ["ai", "students", "speaking", "human judgment"],
    url: "#speaking",
    type: "Presentation"
  }
];
