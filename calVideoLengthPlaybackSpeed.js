const calVideoLengthPlaybackSpeed = (videoLength)=>{
    const hms = videoLength.split(':');
    hms.length === 2 && (hms[2] = 0) ;
    const seconds = (+hms[0]) * 60 * 60 + (+hms[1]) * 60 + (+hms[2]);
    console.log('videoLength: ', videoLength); 
    console.log('1.25x = ', new Date(seconds /1.25  * 1000).toISOString().substring(11, 16));
    console.log('1.5x = ', new Date(seconds /1.5  * 1000).toISOString().substring(11, 16));
    console.log('1.75x = ', new Date(seconds /1.75  * 1000).toISOString().substring(11, 16));
    console.log('2x = ', new Date(seconds /2  * 1000).toISOString().substring(11, 16));
}

const getYoutubeVideoLength = ()=>{ // get YouTube video length
    return document.querySelector('.ytp-time-duration').innerText+':00';
}
