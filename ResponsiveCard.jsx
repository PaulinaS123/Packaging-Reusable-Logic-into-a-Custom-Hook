import useWindowSize from "./hooks/useWindowSize";

function ResponsiveCard() {
  const { width, height } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div
      className="card"
      style={{
        backgroundColor: isMobile ? "#ffcccb" : "#add8e6",
      }}
    >
      <h1>
        {isMobile ? "📱 Mobile Streaming View" : "💻 Desktop Streaming View"}
      </h1>

      <p>
        Width: <strong>{width}px</strong>
      </p>

      <p>
        Height: <strong>{height}px</strong>
      </p>

      <p>
        Current Layout:
        <strong>{isMobile ? " Mobile Layout" : " Desktop Layout"}</strong>
      </p>
    </div>
  );
}

export default ResponsiveCard;
