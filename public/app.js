class Queue {
    constructor() {
        this.queueListEl = document.getElementById("queue-list");
        this.songs = new Map();
        this.nextSongNumber = 1;
        this.socket;
        this.socketActive = false;

        this.currUsername = localStorage.getItem("username");
        if (window.location.href.endsWith("/my-queue.html")) {
            document.getElementById("queue-title").innerText = this.currUsername + "'s Queue";
            this.loadMyQueue();
        }

        const messageInputEl = document.getElementById("chat-message-input");
        messageInputEl.addEventListener("keydown", (event) => {
            if (this.socketActive && messageInputEl.value && event.key === "Enter") {
                this.displayMessage(this.currUsername, messageInputEl.value);
                this.broadcastEvent("message", this.currUsername, messageInputEl.value);
                messageInputEl.value = "";
            }
        });
    }

    getNextSongId() {
        const nextSongId = "song" + this.nextSongNumber;
        this.nextSongNumber++;
        return nextSongId;
    }

    // Gets current users' songs from the database
    async loadMyQueue() {
        const response = await fetch(`/api/queue/` + this.currUsername);
        let songs = await response.json();
        if (songs) {
            document.getElementById("load-animation").style.display = "none";
            this.addSongsFromRemote(songs);
        } else {
            document.getElementById("queue-empty-prompt").style.display = "block";
        }
        document.getElementById("song-information-container").style.display = "flex";
        document.getElementById("clear-queue").style.display = "block";
        this.configureWebSocket();
    }

    async loadOtherQueue() {
        const username = document.getElementById("username-input").value;
        const response = await fetch(`/api/queue/` + username);
        if (response.status === 200) {
            this.currQueueOwnerUsername = username;
            let songs = await response.json();
            if (songs.length) {
                this.addSongsFromRemote(songs);
                document.getElementById("queue-title").innerText = username + "'s Queue";
                document.getElementById("join-controls").style.display = "none";
                document.getElementById("song-information-container").style.display = "flex";
                document.getElementById("clear-queue").style.display = "block";
            } else {
                document.getElementById("queue-empty-prompt").style.display = "block";
            }
            this.configureWebSocket();
        } else {
            document.getElementById("error-alert").style.display = "block";
        }
    }

    addSongsFromRemote(songs) {
        for (const [i, song] of songs.entries()) {
            this.addSongToDom(song.songTitle, song.artistName, this.getNextSongId());
        }
    }

    addSong(ownQueue) {
        const songTitleEl = document.getElementById("song-title");
        const artistNameEl = document.getElementById("artist-name");
        const songTitle = songTitleEl.value;
        const artistName = artistNameEl.value;
        let username;
        if (ownQueue) {
            username = this.currUsername;
        } else {
            username = this.currQueueOwnerUsername;
        }

        if (!songTitle) {
            songTitleEl.reportValidity();
        } else {
            songTitleEl.value = "";
            artistNameEl.value = "";

            const newSongId = this.getNextSongId();
            this.addSongToDom(songTitle, artistName, newSongId);
            document.getElementById("queue-empty-prompt").style.display = "none";
            fetch(`/api/queue/${username}/addSong`, {
                method: "post",
                body: JSON.stringify({
                    queueOwner: username,
                    songTitle: songTitle,
                    artistName: artistName,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                credentials: "same-origin"
            });
        }
    }

    // TODO: ID needed? currently unused (except for local vote updating)
    addSongToDom(songTitle, artistName, id) {
        // Song title and artist
        const newSongListEl = document.createElement("li");
        newSongListEl.setAttribute("class", "list-group-item d-flex");
        newSongListEl.id = id;

        const newSongDiv = document.createElement("div");
        newSongDiv.setAttribute("class", "ms-2 me-auto");

        const songTitleDiv = document.createElement("div");
        songTitleDiv.setAttribute("class", "fw-bold");
        songTitleDiv.textContent = songTitle;

        const artistNameDiv = document.createElement("div");
        artistNameDiv.textContent = artistName;

        // Voting div
        const votingDiv = document.createElement("div");
        votingDiv.setAttribute("class", "align-self-center d-flex");

        const voteCheckbox = document.createElement("input");
        voteCheckbox.setAttribute("type", "checkbox");
        voteCheckbox.setAttribute("class", "align-self-center m-2");
        voteCheckbox.addEventListener("change", this.changeVoteCounter)
        voteCheckbox.checked = true;

        const votesBadgeSpan = document.createElement("span");
        votesBadgeSpan.setAttribute("class", "badge bg-primary align-self-center");
        votesBadgeSpan.textContent = "Votes: 1";

        // Append children
        newSongDiv.appendChild(songTitleDiv);
        newSongDiv.appendChild(artistNameDiv);

        votingDiv.appendChild(voteCheckbox);
        votingDiv.appendChild(votesBadgeSpan);

        newSongListEl.appendChild(newSongDiv);
        newSongListEl.appendChild(votingDiv);

        const listElement = document.getElementById("queue-list");
        listElement.appendChild(newSongListEl);
    }

    changeVoteCounter() {
        const songListElId = this.parentElement.parentElement.id;
        const query = "#" + songListElId + " div span"
        const votesBadgeSpan = document.querySelector(query);

        let currNumVotes = parseInt(votesBadgeSpan.textContent.substring(7));

        if (this.checked === true) {
            currNumVotes++;
        } else {
            currNumVotes--;
        }

        let newVoteBadgeText = "Votes: " + currNumVotes;
        votesBadgeSpan.textContent = newVoteBadgeText;
    }

    inviteUser() {
        const inviteeUsernameInputEl = document.getElementById("invitee-username");
        const inviteeUsername = inviteeUsernameInputEl.value;
        if (inviteeUsername) {
            fetch(`/api/queue/` + this.currUsername + `/inviteUser/` + inviteeUsername, {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                credentials: "same-origin"
            });
        } else {
            inviteeUsernameInputEl.reportValidity();
        }
        inviteeUsernameInputEl.value = "";
    }

    uninviteUser() {
        const inviteeUsernameInputEl = document.getElementById("invitee-username");
        const inviteeUsername = inviteeUsernameInputEl.value;
        if (inviteeUsername) {
            fetch(`/api/queue/` + this.currUsername + `/uninviteUser/` + inviteeUsername, {
                method: "delete"
            });
        } else {
            inviteeUsernameInputEl.reportValidity();
        }
        inviteeUsernameInputEl.value = "";
    }

    async clearQueue() {
        const response = await fetch(`/api/queue/${this.currUsername}/clearQueue`, {
            method: "delete",
        });
        if (response.status >= 200 && response.status <= 300) {
            clearQueueElements();
            this.broadcastEvent("clear", "", "");
        }
    }

    clearQueueElements() {
        let queue = document.getElementById("queue-list");
        while (queue.firstChild) {
            queue.removeChild(queue.firstChild);
        }
        document.getElementById("queue-empty-prompt").style.display = "block";
    }

    // WebSocket config
    configureWebSocket() {
        const protocol = window.location.protocol === "http:" ? "ws" : "wss";
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
            this.displayMessage("System", "Connected to chat");
            this.socketActive = true;
        };
        this.socket.onclose = (event) => {
            this.displayMessage("System", "Disconnected from chat");
            this.socket = false;
        };
        this.socket.onmessage = async (event) => {
            const parsedEvent = JSON.parse(await event.data.text());
            switch (parsedEvent?.eventType) {
                case "song":
                    //this.addSongToDom(parsedEvent.songTitle)
                    break;
                case "clear":
                    //this.clearQueueElements();
                    break;
                case "message":
                    this.displayMessage(parsedEvent.username, parsedEvent.message);
                    break;
            }
        };
    }

    displayMessage(username, message) {
        const newMessageEl = document.createElement("p");
        // newMessageEl.setAttribute("class", eventType);
        newMessageEl.innerText = `${username}: ${message}`;

        const chatBoxEl = document.getElementById("chat-box");
        chatBoxEl.appendChild(newMessageEl);
        chatBoxEl.scrollTop = chatBoxEl.scrollHeight;
    }

    broadcastEvent(eventType, username, message) {
        const data = {
            eventType: eventType,
            username: username,
            message: message
        };
        this.socket.send(JSON.stringify(data));
    }
}

let queue = new Queue();