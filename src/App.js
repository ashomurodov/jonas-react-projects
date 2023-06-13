import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

export default function App() {
	const [step, setStep] = useState(1);

	function handlePrev() {
		if (step > 1) {
			setStep(step - 1);
		} else {
			alert("its lats step!");
		}
	}

	function handleNext() {
		if (step < 3) {
			setStep(step + 1);
		} else {
			alert("Its last step!");
		}
	}

	return (
		<div className="steps">
			<div className="numbers">
				<div className={step >= 1 ? "active" : ""}>1</div>
				<div className={step >= 2 ? "active" : ""}>2</div>
				<div className={step >= 3 ? "active" : ""}>3</div>
			</div>

			<p className="message">
				Step {step}: {messages[step - 1]}
			</p>

			<div className="buttons">
				<button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrev}>
					prev
				</button>
				<button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
					next
				</button>
			</div>
		</div>
	);
}
