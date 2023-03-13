class Queue {
    constructor() {
        this.queueListEl = document.getElementById("queue-list");
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

            this.addSongToQueue(songTitle, artistName);
            document.getElementById("queue-empty-info").style.display="none";

        }
    }

    addSongToQueue(songTitle, artistName) {
        const newSongListEl = document.createElement("li");
        newSongListEl.setAttribute("class", "list-group-item d-flex");

        const newSongDiv = document.createElement("div");
        newSongDiv.setAttribute("class", "ms-2 me-auto");

        const songTitleDiv = document.createElement("div");
        songTitleDiv.setAttribute("class", "fw-bold");
        songTitleDiv.textContent = songTitle;

        const artistNameDiv = document.createElement("div");
        artistNameDiv.textContent = artistName;

        const votesBadgeSpan = document.createElement("span");
        votesBadgeSpan.setAttribute("class", "badge bg-primary align-self-center");
        votesBadgeSpan.textContent = "Votes: 1";

        newSongDiv.appendChild(songTitleDiv);
        newSongDiv.appendChild(artistNameDiv);
        newSongListEl.appendChild(newSongDiv);
        newSongListEl.appendChild(votesBadgeSpan);
    
        const listElement = document.getElementById("queue-list");
        listElement.appendChild(newSongListEl);

        
        /* <li class="list-group-item d-flex">
                    <div class="ms-2 me-auto">
                        <div class="fw-bold">Song Title 1</div>
                        Artist 1
                    </div>
                    <span class="badge bg-primary align-self-center">Votes: 3</span>
                </li> */
    }
}

queue = new Queue();
