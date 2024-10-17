import "./App.css";
import { useState } from "react";
import { UserContext } from "../src/contexts/UserContext";
import UserProfile from "./components/UserProfile";

export default function App() {
	const [isOnline, setIsOnline] = useState(false);

	return (
		<UserContext.Provider value={{ isOnline, setIsOnline }}>
			<div className="profile-card">
				<UserProfile />
			</div>
		</UserContext.Provider>
	);
}
