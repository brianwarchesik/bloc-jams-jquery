{
    $('button#play-pause').on('click', function() {
        player.playPause();
        $(this).attr('playState', player.playState);
    });

    $('button#next').on('click', function() {
        if (player.playState !== 'playing')
            {return};

        const CURRENTSONGINDEX = album.songs.indexOf(player.currentlyPlaying);
        const NEXTSONGINDEX = CURRENTSONGINDEX +1;

        if (NEXTSONGINDEX >= album.songs.length)
            {return};

        const NEXTSONG = album.songs[NEXTSONGINDEX];
        player.playPause(NEXTSONG);
    });

    $('button#previous').on('click', function() {
        if (player.playState !== 'playing')
            {return};

        const CURRENTSONGINDEX = album.songs.indexOf(player.currentlyPlaying);
        const PREVIOUSSONGINDEX = CURRENTSONGINDEX -1;

        if (PREVIOUSSONGINDEX <= -1)
            {return};

        const PREVIOSSONG = album.songs[PREVIOUSSONGINDEX];
        player.playPause(PREVIOSSONG);
    });
}
