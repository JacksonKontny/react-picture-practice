import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a1864641e131f3a382cb11ee26d2e7695c3ab3fb6d162cd4472268dd72255753"
  }
});
