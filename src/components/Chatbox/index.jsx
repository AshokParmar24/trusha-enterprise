import {
  addChatUserApi,
  chatStartWithUser,
  createChannelApi,
  createToken,
} from "@/services/api";
import { Avatar, Text, Group, Box, Badge } from "@mantine/core";

import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import "@/components/Chatbox/chatbox.css";

const apiKey = "gend75q59h9y";
const userId = "1404083";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTQwNDA4MyJ9.3WaU4DREN0PffTMZpL6D5Q-8dA8CIVyrPSCZTRKFGkY";

const filters = { members: { $in: [userId] }, type: "messaging" };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };

const ChatBox = () => {
  const [client, setClient] = useState(null);
  const [newUserId, setNewUserId] = useState("");
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const chatClient = StreamChat.getInstance(apiKey);

    const initChat = async () => {
      const result = await createChannelApi({
        channelId: "traveling",
        name: "Ashokssss",
        members: [
          userId,
          "686e84bd153d7d2ee4ffb940",
          "686e84ec153d7d2ee4ffb943",
        ],
      });

      const response = await createToken({ userId: userId });
      console.log("response :>> ", response);

      console.log("result :>> ", result);

      if (response?.data?.success) {
        console.log("sdkjhfksdhfjkshdjkfhskdhfkhsdkfhsjd :>> ");
        await chatClient.connectUser(
          {
            id: userId,
            name: "John Doe",
          },
          response?.data?.token
        );
      }

      setClient(chatClient);
      // const channelsChat = await chatClient.queryChannels(filters, [
      //   { last_message_at: -1 },
      // ]);
      // setChannel(channelsChat);
    };

    initChat();

    return () => {
      if (client) client.disconnectUser();
    };
  }, []);

  const handleAddUser = async () => {
    try {
      const result = await chatStartWithUser({
        currentUserId: userId,
        friendUserId: newUserId.trim(),
      });
      setNewUserId("");
      console.log("result :>> ", result);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  if (!client) return <div>Loading chat...</div>;
  return (
    <>
      <div className="add-user-bar">
        <input
          type="text"
          placeholder="Enter user ID to add"
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
          className="user-input"
        />
        <button onClick={handleAddUser} className="add-user-button">
          ➕ Add User
        </button>
      </div>
      <Box className="chat-container">
        <Chat client={client} theme="messaging light">
          <ChannelList
            filters={filters}
            sort={sort}
            options={options}
            Preview={({ channel, setActiveChannel }) => {
              const members = Object.values(channel.state.members || {});
              const other = members.find((m) => m.user.id !== userId);
              const isGroup = members.length > 2;

              const name = isGroup
                ? channel.data.name
                : other?.user?.name || "Chat";
              const avatar = isGroup
                ? "https://ui-avatars.com/api/?name=" + name
                : other?.user?.image ||
                  "https://ui-avatars.com/api/?name=" + name;

              const isOnline = other?.user?.online;
              const lastMessage =
                channel.state.messages?.[channel.state.messages.length - 1]
                  ?.text || "";

              return (
                <Box
                  onClick={() => setActiveChannel(channel)}
                  className="hover:bg-gray-100 cursor-pointer px-4 py-2 border-b border-gray-200"
                >
                  <Group noWrap align="center">
                    <div className="relative">
                      <Avatar src={avatar} radius="xl" size="md" />
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          isOnline ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>

                    <div className="flex-1">
                      <Text fw={500}>{name}</Text>
                      <Text size="xs" c="dimmed" truncate>
                        {lastMessage || "Start chatting..."}
                      </Text>
                    </div>
                  </Group>
                </Box>
              );
            }}
          />
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </Box>
    </>
  );
};

export default ChatBox;
