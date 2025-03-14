import React from 'react'

const Chatapp = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Chat Application</h1>
      <br />

      <article>
        <p>
          I built up a chatroom with node.js very simple and basic chatroom where users can join and chat with each other. I used socket.io for real-time communication between clients and server. I did not use express or any other frameworks only node.js and socket.io . I learned how to use socket.io and how to emit events and listen to events. I learned how to broadcast messages to all clients or to a specific client. with that low level of writing your own code I even handle the chat security input as well so user could not send even if they did there input chat field will be filter because of bad intentions and attacks. it was super simple chat app I just want to work more with pure node.js and socket.io(realtime communication).
        </p>
      </article>
    </div>
  )
}

export default Chatapp