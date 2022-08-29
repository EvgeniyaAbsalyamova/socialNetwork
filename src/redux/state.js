import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi,how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post", likesCount: 23 },
      ],
      newPostText: "Eva",
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State changed");
  },

  addPost() {
    debugger;
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
export default store;
