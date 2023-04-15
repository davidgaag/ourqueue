class Queue {
    constructor() {
        this.queueListEl = document.getElementById("queue-list");
        this.songs = new Map();
        this.nextSongNumber = 1;

        this.currUsername = localStorage.getItem("username");
        document.getElementById("username").innerText = this.currUsername;
        if (window.location.href.endsWith("/my-queue.html")) {
            this.loadMyQueue();
        } else if (window.location.href.endsWith("/other-queue.html")) {
            this.loadOtherQueue();
        }
    }

    // Gets current users' songs from the database
    async loadMyQueue() {
        const response = await fetch(`/api/queue/` + this.currUsername);
        let songs = await response.json();
        if (songs) {
            document.getElementById("load-animation").style.display = "none";
            for (const [i, song] of songs.entries()) {
                this.addSongToDom(song.songTitle, song.artistName, "song" + this.nextSongNumber);
                this.nextSongNumber++;
            }
        } else  {
            document.getElementById("queue-empty-prompt").style.display = "block";
        }
        document.getElementById("song-information-container").style.display = "flex";
        document.getElementById("clear-queue").style.display = "block";
    }

    async loadOtherQueue() {

    }

    addSong() {
        const songTitleEl = document.getElementById("song-title");
        const artistNameEl = document.getElementById("artist-name");
        const songTitle = songTitleEl.value;
        const artistName = artistNameEl.value;

        if (!songTitle) {
            songTitleEl.reportValidity();
        } else {
            songTitleEl.value = "";
            artistNameEl.value = "";

            const newSongId = "song" + this.nextSongNumber;
            // Obselete now, but in future, reorder list based on number of votes
            // Will we need a map of elements in this list? Maybe in the future
            //this.songs.set(newSongId, new Song(songTitle, artistName));
            this.nextSongNumber++;
            this.addSongToDom(songTitle, artistName, newSongId);
            document.getElementById("queue-empty-prompt").style.display = "none";
            fetch(`/api/queue/${this.currUsername}/addSong`, {
                method: "post", 
                body: JSON.stringify({ 
                    queueOwner: this.currUsername,
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

    // TODO: ID needed? currently unused.
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

    async clearQueue() {
        const response = await fetch(`/api/queue/${this.currUsername}/deleteQueue`, {
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