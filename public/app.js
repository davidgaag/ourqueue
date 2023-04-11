function Song(songTitle, artistName, numVotes = 1) {
    return {
        songTitle: songTitle,
        artistName: artistName,
        numVotes: numVotes,
    };
}
class Queue {
    constructor() {
        this.queueListEl = document.getElementById("queue-list");
        this.songs = new Map();
        this.nextSongNumber = 1;

        this.currUsername = localStorage.getItem("username");
        document.getElementById("username").innerText = this.currUsername;
        this.loadQueue();
    }

    // Gets the songs from the database
    async loadQueue() {
        const currUsername = await fetch("/api/queue/")

        const response = await fetch("/api/queue/" + currUsername);
        let songs = await response.json;
        for (let song in songs) {
            this.addSongToQueue(song.songTitle, song.artistName, -1)
        }
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
            this.addSongToQueue(songTitle, artistName, newSongId)
            document.getElementById("queue-empty-info").style.display="none";
        }
    }
    
    addSongToQueue(songTitle, artistName, id) {
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
        votingDiv.setAttribute("class", "align-self-center");

        const voteCheckbox = document.createElement("input");
        voteCheckbox.setAttribute("type", "checkbox");
        voteCheckbox.addEventListener("change", this.changeVoteCounter)
        voteCheckbox.checked = true;

        const votesBadgeSpan = document.createElement("span");
        votesBadgeSpan.setAttribute("class", "badge bg-primary");
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
        
        if(this.checked === true) {
            currNumVotes++;
        } else {
            currNumVotes--;
        }

        let newVoteBadgeText = "Votes: " + currNumVotes;
        votesBadgeSpan.textContent = newVoteBadgeText;
    }
}

let queue = new Queue();

//window.onload = () => queue = new Queue();
