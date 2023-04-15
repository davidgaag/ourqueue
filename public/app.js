class Queue {
    constructor() {
        this.queueListEl = document.getElementById("queue-list");
        this.songs = new Map();
        this.nextSongNumber = 1;

        this.currUsername = localStorage.getItem("username");
        if (window.location.href.endsWith("/my-queue.html")) {
            document.getElementById("queue-title").innerText = this.currUsername + "'s Queue";
            this.loadMyQueue();
        }
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
        } else {
            document.getElementById("error-alert").style.display = "block";
        }
    }

    addSongsFromRemote(songs) {
        for (const [i, song] of songs.entries()) {
            this.addSongToDom(song.songTitle, song.artistName, "song" + this.nextSongNumber);
            this.nextSongNumber++;
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

            const newSongId = "song" + this.nextSongNumber;
            this.nextSongNumber++;
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
            let queue = document.getElementById("queue-list");
            while (queue.firstChild) {
                queue.removeChild(queue.firstChild);
            }
            document.getElementById("queue-empty-prompt").style.display = "block";
        }
    }

}

let queue = new Queue();