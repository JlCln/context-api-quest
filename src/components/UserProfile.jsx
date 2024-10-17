import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserProfile() {
	const { isOnline, setIsOnline } = useContext(UserContext);

	const toggleOnlineStatus = () => {
		setIsOnline(!isOnline);
	};

	return (
		<>
			<p>User is {isOnline ? "online 🟢" : "offline 🔴"}</p>

			<button type="button" onClick={toggleOnlineStatus}>
				Click me to change user status
			</button>
		</>
	);
}

export default UserProfile;
