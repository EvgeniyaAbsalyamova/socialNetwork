let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 0 },
      { id: 2, message: "It's my first post", likesCount: 23 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you" },
      { id: 3, message: "I love you" },
    ],
    dialogs: [
      { id: 1, name: "Evgeniya" },
      { id: 2, name: "Eva" },
      { id: 3, name: "Zhenya" },
    ],
  },
};

export default state;
