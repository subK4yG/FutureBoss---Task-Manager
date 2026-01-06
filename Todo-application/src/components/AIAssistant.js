import React, { useState } from "react";

const motivationalTips = [
  "A man is made by his actions, not his words. – Mahabharat",
  "Duty before comfort, karma before desire. – Ramayan",
  "Action performed with focus brings clarity.",
  "Complete your karma, fulfill your dharma.",
  "Small progress each day leads to great destiny.",
];

export default function AIAssistant({ todos }) {
  const [advice, setAdvice] = useState("");

  const handleAI = () => {
    if (todos.length === 0) {
      setAdvice("No duties today! Add something first to get guidance.");
      return;
    }

    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    const sortedTasks = [...todos].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    const taskAdvice = sortedTasks
      .map(
        (t, i) =>
          `${i + 1}. ${t.task} (${t.priority} – ${t.category})${
            t.completed ? " ✅ Completed" : ""
          }`
      )
      .join("\n");

    const firstTask = sortedTasks.find((t) => !t.completed);
    const firstTaskAdvice = firstTask
      ? `🔥 First task to focus: ${firstTask.task} (${firstTask.priority})\n\n`
      : "";

    const tip =
      motivationalTips[Math.floor(Math.random() * motivationalTips.length)];

    setAdvice(`${firstTaskAdvice}Suggested Order:\n${taskAdvice}\n\nTip: "${tip}"`);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <button
        onClick={handleAI}
        className="todo-btn"
        style={{ width: "100%", backgroundColor: "#f0c040", color: "#222" }}
      >
        🧠 Get AI Advice
      </button>

      {advice && (
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            borderLeft: "4px solid #f0c040",
            padding: "1rem",
            marginTop: "1rem",
            borderRadius: "8px",
            whiteSpace: "pre-line",
            color: "#fff",
          }}
        >
          {advice}
        </div>
      )}
    </div>
  );
}
