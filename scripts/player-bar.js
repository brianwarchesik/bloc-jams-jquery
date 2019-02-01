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

        const PREVIOUSSONG = album.songs[PREVIOUSSONGINDEX];
        player.playPause(PREVIOUSSONG);
    });

    $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
    });

    $('#volume-control input').on('input', function (event) {
        player.setVolume(event.target.value);
    });

    setInterval( () => {
        if (player.playState !== 'playing') { return; }
        const CURRENTTIME = player.getTime();
        const DURATION = player.getDuration();
        const PERCENT = (CURRENTTIME / DURATION) * 100;
        $('#time-control .total-time').text(player.prettyTime(DURATION));
        $('#time-control .current-time').text(player.prettyTime(CURRENTTIME));
        $('#time-control input').val(PERCENT);
    }, 1000);
}
