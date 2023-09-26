import { HubConnectionBuilder } from "@microsoft/signalr";

const hubConnection = new HubConnectionBuilder()
	.withUrl("https://localhost:7174/offers")
	.configureLogging("debug")
	.build();

export const startConnection = () => {
	return hubConnection.start();
};

export const addOfferListener = (callback) => {
	hubConnection.on("SendOffersToUser", (result) => {
		callback(result);
	});
};
