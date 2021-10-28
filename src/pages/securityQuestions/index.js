import "./index.css";
import { Input } from "../../components/Input";
export const SecurityQuestionsPage = () => {
  const questions = [
    "What was the brand of your first car?",
    "What is your mother’s maiden name?",
    "What street did you grow up on?",
    "What is your brest friend’s name?",
    "What is your favorite sports team?",
  ];
  return (
    <div className="form-container">
      <form>
        <p className="header">Set up security questions below...</p>
        <div className="inputs">
          <select>
            {questions.map((question, index) => (
              <option key={index}>{question}</option>
            ))}
          </select>
          <Input placeholder="Answer" />
        </div>
        <div className="inputs">
          <select>
            {questions.map((question, index) => (
              <option key={index}>{question}</option>
            ))}
          </select>
          <Input placeholder="Answer" />
        </div>
        <button
          className="button-green"
          style={{
            marginTop: "4rem",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
