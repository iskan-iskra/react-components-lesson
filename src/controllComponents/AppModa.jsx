import { createPortal } from "react-dom";

export default function AppModal() {
  return createPortal(
    <div className="test-test-test">test-test-test</div>,
    document.getElementById("test-id")
  );
}
