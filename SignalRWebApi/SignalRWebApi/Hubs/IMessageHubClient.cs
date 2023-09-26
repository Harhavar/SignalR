using Microsoft.AspNetCore.SignalR;

namespace SignalRWebApi.Hubs
{
    public interface IMessageHubClient
    {
        Task SendOffersToUser(List<string> message);
    }

    public class MessageHub : Hub<IMessageHubClient>
    {
        public async Task SendOffersToUser(List<string> message)
        {
            await Clients.All.SendOffersToUser(message);
        }
    }
}
