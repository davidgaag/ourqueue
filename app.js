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
            this.songs.set(newSongId, new Song(songTitle, artistName));
            this.nextSongNumber++;
            this.addSongToQueue(songTitle, artistName, id)
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
}

queue = new Queue();
