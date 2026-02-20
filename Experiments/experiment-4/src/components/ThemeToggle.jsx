import { useApp } from "../context/AppContext";

export default function ThemeToggle() {
  const { state, dispatch } = useApp();

  return (
    <button
      className="btn btn-sm btn-outline-light"
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
    >
      {state.theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}