import React from "react";

export default function Button({ funcNext, funcPrev, page }) {
  return (
    <div className="btn2">
      <button onClick={funcPrev} disabled={page <= 1} className="Prev">
        &larr; Prev
      </button>
      <button onClick={funcNext} className="Next">
        Next &rarr;
      </button>
    </div>
  );
}
